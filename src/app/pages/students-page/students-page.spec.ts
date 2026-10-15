import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsPage } from './students-page';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

const students: Student[] = [
  { id: 1, name: 'Maya Hassan', faculty: 'Engineering', classYear: 2028, quote: 'Build things.', photo: 'maya.jpg', featured: true },
  { id: 2, name: 'Adam Schneider', faculty: 'Informatics', classYear: 2028, quote: 'Stay curious.', photo: 'adam.jpg', featured: false },
];

describe('StudentsPage', () => {
  let component: StudentsPage;
  let fixture: ComponentFixture<StudentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsPage],
      providers: [provideRouter([]), { provide: StudentService, useValue: { getStudents: () => of(students) } }],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters cards by name and faculty, including empty results', async () => {
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelectorAll('app-student-card')).toHaveLength(2);
    const search = page.querySelector('input')!;
    search.value = 'MAYA';
    search.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(page.querySelectorAll('app-student-card')).toHaveLength(1);
    expect(page.querySelector('.card__name')?.textContent).toContain('Maya Hassan');
    const faculty = page.querySelector('select')!;
    faculty.value = 'Informatics';
    faculty.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(page.querySelectorAll('app-student-card')).toHaveLength(0);
    expect(page.textContent).toContain('No students match your search');
    search.value = '';
    search.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(page.querySelector('.card__name')?.textContent).toContain('Adam Schneider');
  });

  it('sorts by name and restores featured order', async () => {
    const page: HTMLElement = fixture.nativeElement;
    const sort = page.querySelectorAll('select')[1];
    sort.value = 'name';
    sort.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(page.querySelector('.card__name')?.textContent).toContain('Adam');
    sort.value = 'featured';
    sort.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(page.querySelector('.card__name')?.textContent).toContain('Maya');
  });

  it('shows a readable error when the API fails', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [StudentsPage],
      providers: [provideRouter([]), { provide: StudentService, useValue: { getStudents: () => throwError(() => new Error('Offline')) } }],
    });
    const failedFixture = TestBed.createComponent(StudentsPage);
    await failedFixture.whenStable();
    expect(failedFixture.nativeElement.querySelector('[role="alert"]').textContent).toContain('could not load');
    expect(failedFixture.nativeElement.querySelector('app-student-card')).toBeNull();
  });
});
