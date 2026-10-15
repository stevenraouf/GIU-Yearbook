/* FILE: components/student-card/student-card.ts
   WHAT: A reusable, linked student card with a portrait fallback.
   WHY: The page owns fetching/filtering; this component presents one student. */
import { Component, computed, input, OnChanges, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard implements OnChanges {
  // Required signal input: each parent must provide a student.
  readonly student = input.required<Student>();
  private readonly imageFailed = signal(false);

  // Derive the displayed path whenever the input or failure state changes.
  protected readonly photoSrc = computed(() =>
    this.imageFailed() ? 'images/placeholder-portrait.svg' : this.student().photo,
  );

  ngOnChanges(): void {
    // A reused card must try the new student's portrait again.
    this.imageFailed.set(false);
  }

  protected onImageError(): void {
    this.imageFailed.set(true);
  }
}
