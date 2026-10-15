# Assignment 1 - Coverage and submission

## Required implementation

- [x] Three component files in `src/app/components/student-card/`, each with FILE / WHAT / WHY header comments and short explanatory comments.
- [x] `app-student-card` selector and `input.required<Student>()`.
- [x] Parent imports the standalone component and passes `[student]="s"` for each filtered student.
- [x] Whole-card RouterLink to `/students/:id`, descriptive link label, portrait alt text, lazy loading and decorative hidden arrow.
- [x] Photo, name, faculty, class year and curly-quoted quotation.
- [x] White surface, thin border, 8px corners, clipped portrait and equal-height cards.
- [x] 310:246 crop with object-fit cover; 20px body padding and 12px gaps.
- [x] 19px semibold sans-serif name, 18px red arrow, 10px uppercase gray meta and 17px italic serif quote.
- [x] Hover lift/shadow and global keyboard focus outline; shared tokens used wherever available.
- [x] Responsive grid: four columns at the 1440px reference width and one below 720px.
- [x] Existing name search, faculty filtering and sorting preserved.
- [x] Private failure signal, computed image source and error handler use `images/placeholder-portrait.svg`.
- [x] Story links retain the required placeholder destination.
- [x] Technical written questions and reflection answers included in `assignment-answers.md`.

## Before submission

- Complete the final personal reflection in `assignment-answers.md` in your own words.
- Review the page at desktop and mobile widths, use Tab across the cards and try the search `maya` and faculty filters.
- Run the build and tests using the commands in the README.
- Fork/push to your own repository and submit its link through the course submission form. These account and submission actions have not been performed by this local project update.

Example Git commands, after reviewing the changes:

```sh
git add src README.md docs .gitignore
git commit -m "feat: add student card component"
git push
```
