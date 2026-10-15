import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { StudentCard } from './student-card';
import { Student } from '../../models/student.model';

const student: Student = {
  id: 3, name: 'Farah Adel', faculty: 'Design', classYear: 2028,
  quote: 'Make room for ideas.', photo: 'images/students/farah-adel.jpg', featured: true,
};

describe('StudentCard', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [StudentCard], providers: [provideRouter([])] }));

  it('presents student data in an accessible, lazy-loaded story link', async () => {
    const fixture = TestBed.createComponent(StudentCard);
    fixture.componentRef.setInput('student', student);
    await fixture.whenStable();
    const card: HTMLElement = fixture.nativeElement;
    expect(card.querySelector('a')?.getAttribute('href')).toBe('/students/3');
    expect(card.querySelector('a')?.getAttribute('aria-label')).toBe('Read the story of Farah Adel');
    expect(card.querySelector('h3')?.textContent).toBe(student.name);
    expect(card.querySelector('.card__meta')?.textContent).toBe('Design · Class of 2028');
    expect(card.querySelector('.card__quote')?.textContent).toBe('“Make room for ideas.”');
    expect(card.querySelector('img')?.getAttribute('alt')).toBe('Portrait of Farah Adel');
    expect(card.querySelector('img')?.getAttribute('loading')).toBe('lazy');
    expect(card.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('falls back on portrait errors and retries when the input changes', async () => {
    const fixture = TestBed.createComponent(StudentCard);
    fixture.componentRef.setInput('student', { ...student, photo: 'missing.jpg' });
    await fixture.whenStable();
    const image: HTMLImageElement = fixture.nativeElement.querySelector('img');
    image.dispatchEvent(new Event('error'));
    await fixture.whenStable();
    expect(image.getAttribute('src')).toBe('images/placeholder-portrait.svg');
    fixture.componentRef.setInput('student', { ...student, name: 'New name' });
    await fixture.whenStable();
    expect(image.getAttribute('src')).toBe(student.photo);
    expect(image.alt).toBe('Portrait of New name');
  });
});
