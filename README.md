# GIU Yearbook - Assignment 1

An Angular yearbook directory with eight reusable student cards. This completes the student-card lab; the staff, gallery, login and student-story placeholder pages are intentional starter features outside Lab 1.

## Run

Use Node.js 24.15 or newer supported by Angular 22 (Node 22.22.3+ also works).

```sh
npm ci
npm start
```

Open http://localhost:4200. Google Fonts supplies Inter and Lora; the existing system/Georgia fallbacks apply offline.

## Validate

```sh
npm run build -- --configuration development
npm run build
npm test -- --watch=false
```

## Implementation

- `src/app/components/student-card/`: required `Student` signal input, template, token-based scoped CSS and behavioral tests.
- `src/app/pages/students-page/`: passes each filtered student into the card; retains name search, faculty filters and featured/alphabetical sorting.
- Each whole card links to `/students/:id` using Angular RouterLink and an accessible label. Portraits load lazily and use the existing placeholder on error.
- Cards use the specified 310:246 cropped portrait, 20px body padding, 12px gaps, name/meta/quote typography and red arrow. Hover lifts the card, keyboard focus uses the global red outline, and reduced-motion preferences disable movement.
- The starter's missing staff model and parameterized SSR route configuration are repaired so builds can succeed.

See [assignment answers](docs/assignment-answers.md) for the written questions and [completion checklist](docs/assignment-checklist.md) for coverage and submission steps.
