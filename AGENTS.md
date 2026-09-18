# Project instructions

## Project stack:
- Vite
- TypeScript
- React
- Oxlint

[//]: # (## Project structure)
[//]: # (/src/api                  HTTP endpoints)
[//]: # (/src/services             Business logic)
[//]: # (/src/db                   Database layer)
[//]: # (/tests                    Tests)
[//]: # (/scripts                  Maintenance scripts)

## Setup Install dependencies:
npm install

## Commands Run tests:
npm test 

## Run linter:
npm run lint

## Code rules
- Use TypeScript.
- Do not use `any`.
- Follow the existing project structure.
- Reuse existing utilities.
- Do not introduce unnecessary dependencies.
- Keep changes focused on the task.

## Restrictions
- Change only files related to the task.
- Do not refactor unrelated code.
- Do not modify environment files.
- Do not modify configuration unless required.
- Do not change database schema unless explicitly requested.
- Do not modify database migrations.
- Do not change public APIs without approval.
- Do not add new dependencies without approval.
- Do not delete tests.
- Do not modify files in `.idea/` and `node_modules/`.
- Do not modify generated files.

## Testing
For every bug fix:
1. Add or update a test.
2. Run the relevant test suite.
3. Do not remove failing tests.
4. Report which tests were executed.

## Before finishing
- Run relevant tests.
- Run lint.
- Check changed files.
- Report what was changed.

[//]: # (## Architecture)
[//]: # (- API code: `/src/api`)
[//]: # (- Database layer: `/src/db`)
[//]: # (- Business logic: `/src/services`)
[//]: # (- Tests: `/tests`)
[//]: # (  Do not put business logic into controllers. )

[//]: # (## Code style)
[//]: # (- Use type hints.)
[//]: # (- Follow existing naming conventions.)
[//]: # (- Do not introduce new abstractions without a reason.)
[//]: # (- Prefer existing utilities over duplicate code.)
[//]: # (- Do not use `Any` unless necessary.)