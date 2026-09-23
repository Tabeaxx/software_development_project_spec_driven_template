---

description: "Implementation tasks for the Remove Tasks feature"

---

# Tasks: Remove Tasks

**Input**: Design documents from `/specs/002-remove-tasks/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`,
`contracts/ui.md`, and `quickstart.md`

**Organization**: Tasks are grouped by user story. This feature has one P1 story,
so the MVP is the complete task-removal flow.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing Add Tasks implementation and removal design
before editing shared dashboard files.

- [X] T001 Confirm the existing task collection and renderer in `dashboard/src/script.js` and the task-list markup in `dashboard/src/index.html`
- [X] T002 [P] Review the Remove Tasks UI contract, data model, and acceptance scenarios in `specs/002-remove-tasks/contracts/ui.md`, `specs/002-remove-tasks/data-model.md`, and `specs/002-remove-tasks/spec.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the task identity and DOM structure needed for task-specific
Done controls.

- [X] T003 Add stable unique task identity fields to newly created task objects in `dashboard/src/script.js`
- [X] T004 [P] Add task-item layout and Done-button styles, including visible focus states, in `dashboard/src/styles.css`

**Checkpoint**: Every task can have a stable identity and the stylesheet supports
an accessible task-specific control.

---

## Phase 3: User Story 1 - Mark a task done (Priority: P1) 🎯 MVP

**Goal**: Let a user activate a task-specific Done button and immediately remove
only that task while preserving remaining tasks and page state.

**Independent Test**: Add multiple tasks, activate one task's Done button, and
confirm only that task disappears within 1 second; then remove the final task and
confirm no task items or Done controls remain without a page refresh.

### Implementation for User Story 1

- [X] T005 [US1] Render each task description with exactly one clearly labeled Done button in `dashboard/src/script.js`
- [X] T006 [US1] Associate each rendered Done button with its task identity in `dashboard/src/script.js` so duplicate descriptions are handled independently
- [X] T007 [US1] Add the Done-button event handler in `dashboard/src/script.js` to remove only the associated task from the in-memory collection
- [X] T008 [US1] Re-render the task list and task count immediately after removal in `dashboard/src/script.js`, preserving the remaining task order
- [X] T009 [US1] Ensure Done buttons use non-submit native button controls and remain keyboard accessible in `dashboard/src/index.html` and `dashboard/src/script.js`
- [X] T010 [US1] Ensure an empty task collection renders no task items or task-specific Done buttons in `dashboard/src/script.js` and `dashboard/src/index.html`

### Testing for User Story 1

- [X] T011 [US1] Run the Remove Tasks acceptance scenarios from `specs/002-remove-tasks/quickstart.md` against `dashboard/src/index.html`, including single removal, multiple tasks, duplicate descriptions, last-task removal, and no-refresh behavior
- [X] T012 [US1] Verify keyboard activation, accessible Done-button names, task-count updates, and special-character descriptions in `dashboard/src/index.html` and `dashboard/src/script.js`
- [X] T013 [US1] Verify JavaScript syntax and inspect browser console output for errors in `dashboard/src/script.js`

**Checkpoint**: User Story 1 is independently functional and demonstrable as the
MVP.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Document the completed removal behavior and perform final quality checks.

- [X] T014 [P] Update `specs/002-remove-tasks/quickstart.md` with observed browser validation notes and known session-only removal limitations
- [X] T015 [P] Review `dashboard/src/index.html`, `dashboard/src/styles.css`, and `dashboard/src/script.js` against `specs/002-remove-tasks/contracts/ui.md` and the project constitution
- [X] T016 Run `git diff --check` for `dashboard/src/` and `specs/002-remove-tasks/`, then record the completed Remove Tasks increment in a meaningful Git commit

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; inspect the current Add Tasks foundation and design inputs first.
- **Foundational (Phase 2)**: Depends on Setup; blocks the removal implementation.
- **User Story 1 (Phase 3)**: Depends on stable task identities and compatible task-item styles.
- **Polish (Phase 4)**: Depends on User Story 1 being implemented and browser-validated.

### User Story Dependencies

- **User Story 1 (P1)**: Builds on the existing Add Tasks flow but has no dependency on another new user story.

### Within User Story 1

- Complete T005 and T006 before T007 because the handler depends on rendered controls and task identities.
- Complete T007 before T008 and T010 so removal and empty-list behavior are implemented together.
- Complete T008-T010 before T011 and T012 so browser checks cover the finished interaction.
- Complete T011-T013 before the Polish phase.

## Parallel Execution Examples

### Setup and Foundation

```text
Task T002: Review the Remove Tasks design documents
Task T004: Add task-item and Done-button styles
```

T002 and T004 touch different files and can be handled in parallel after T001.

### User Story 1

```text
Task T005: Render task descriptions with Done buttons
Task T009: Confirm native keyboard-accessible control structure
```

T005 and T009 both affect the task rendering surface and should be coordinated if
worked on in parallel; T009 can begin after the intended button markup is agreed.

## Implementation Strategy

### MVP First

1. Complete Phase 1 setup.
2. Complete Phase 2 identity and styling foundation.
3. Complete Phase 3 User Story 1 implementation and testing.
4. Stop and validate the independent removal flow using `quickstart.md`.
5. Demonstrate or commit the working MVP.

### Incremental Delivery

1. Give each task a stable identity.
2. Render a Done control for each task.
3. Remove the selected task and immediately re-render the list and count.
4. Verify duplicates, last-task removal, keyboard activation, and special characters.
5. Record validation notes and commit the increment.

## Notes

- Every task follows the required `- [ ] [TaskID] [P?] [Story?] description` format.
- `[P]` marks tasks that can be performed in parallel without incomplete dependencies.
- No undo, archive, bulk removal, persistence, editing, or backend tasks are included.
- Commit after the logical feature increment, in accordance with the project constitution.
