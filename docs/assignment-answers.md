# Assignment 1 - Written answers

## Questions during the lab

1. **Why does the selector start with app-?** The Angular project config uses `app` as its selector prefix. It distinguishes our components from native HTML elements and follows the same naming convention as `app-header` and `app-top-strip`.
2. **Would the card update if the parent passed a different student?** Yes. `student` is a signal input, so bindings that read `student()` update when the parent supplies a new value; the portrait failure state also resets when that input changes.
3. **Why is the SVG arrow red?** Its stroke is `currentColor`, so it inherits its CSS `color`. The `.card__arrow` rule sets that color to `var(--color-red)`.
4. **Why use computed for photoSrc instead of assigning it in the constructor?** A computed value tracks the student input and image-failure signal, keeping the displayed path current. A one-time constructor assignment would not react to later changes and could read a required input before Angular has supplied it.

## Step 2 - Data questions

1. The card displays `photo`, `name`, `faculty`, `classYear` and `quote`.
2. `id` builds the story URL, such as `/students/3`.
3. `featured` controls Featured first ordering. The page sorts featured students first and uses `id` to break ties; the card does not display this field.

## Reflection questions

1. **Why receive the student through an input rather than load it from StudentService?** The parent already fetches and filters the collection, so it can pass the relevant student to each card without extra requests. Keeping data fetching outside the card makes it reusable and easier to test with any supplied student.
2. **Why use a separate card component?** It keeps presentation and image handling together while the page focuses on loading, filtering and sorting. The same card can be reused elsewhere, and its markup and styles can be maintained independently.
3. **How would you add graduationDate?** Add the field to `src/app/models/student.model.ts` and provide it in `public/mock-api/students.json` or the real API response. Render it in `student-card.html`, adding a date formatter/import in `student-card.ts` and a scoped style in `student-card.css` if needed, then update the test fixture and assertions.
4. **Which step was hardest for you and how did you get unstuck?** This is a personal reflection for the submitting student to complete truthfully. Suggested structure: describe the step you found difficult, the error or unexpected behavior, and the action that helped you understand and fix it.
