# Implementation Plan: Remove Tasks

**Branch**: `002-remove-tasks` | **Date**: 2026-09-23 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-remove-tasks/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Add a task-specific Done button to every visible task and remove only the selected
task immediately when activated. Extend the existing single-page HTML, CSS, and
vanilla JavaScript implementation; keep the ordered task collection in memory and
avoid any backend, database, or page navigation.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: HTML5, CSS3, and modern browser JavaScript (ES2020+)

**Primary Dependencies**: None; use native browser APIs

**Storage**: Existing in-memory task list for the active page session; no persistence

**Testing**: Browser-based manual acceptance checks and JavaScript syntax validation

**Target Platform**: Current desktop and mobile browsers with JavaScript enabled

**Project Type**: Single-page web application

**Performance Goals**: A removed task is absent from the visible list within 1 second

**Constraints**: No page refresh, navigation, backend, database, or unnecessary dependency

**Scale/Scope**: One task-specific removal action in the existing `dashboard/src` task list

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The design passes all constitution gates:

- Specification-first: the removal behavior and acceptance scenarios are defined in
  `spec.md` before implementation.
- Incremental delivery: removal is one independently testable P1 increment built on
  the existing Add Tasks foundation.
- Student ownership: the change remains small, local, and explainable.
- Meaningful Git history: implementation and browser validation can be committed as
  one focused increment.
- Quality and simplicity: native DOM controls, keyboard access, and in-memory state
  avoid unnecessary architecture while preserving usability.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
dashboard/
└── src/
  ├── index.html    # Existing task form and task list container
  ├── styles.css    # Existing task layout plus Done-control styling
  └── script.js     # Task identity, removal handling, and list rendering

specs/002-remove-tasks/
├── plan.md
├── research.md
├── data-model.md
├── contracts/
│   └── ui.md
└── quickstart.md
```

**Structure Decision**: Extend the existing `dashboard/src` files created for Add
Tasks. Do not introduce a framework, service layer, database, or separate removal
route; the Done action belongs beside each task in the current list.

## UI Components

- **Task item**: A visible list item containing the task description and its own
  Done button.
- **Done button**: A clearly labeled, keyboard-accessible button associated with
  exactly one task item.
- **Task list**: The existing ordered list, re-rendered after removal so the
  selected item disappears and remaining items retain their order.
- **Task count**: The existing count indicator, updated when a task is removed.
- **Empty list state**: The existing empty list behavior with no task-specific Done
  controls rendered when no tasks remain.

## Data Structure

Extend each in-memory task object with a stable identity, such as a unique numeric
identifier, alongside its existing `description` string. Each Done button carries
or closes over that identity. On activation, remove exactly the matching object
from the ordered task collection and re-render the list and count.

## Validation Rules

1. Render one Done button for every task currently in the collection.
2. Associate each Done button with exactly one task identity, not only its text,
   so duplicate descriptions are handled independently.
3. Remove only the associated task when its button is activated.
4. Re-render immediately without submitting the Add form, refreshing, or navigating.
5. Render task descriptions as text and keep all remaining descriptions unchanged.
6. Render no task-specific Done buttons when the collection is empty.

## Assumptions

- The Add Tasks feature remains the source of the in-memory task collection and
  already renders task list items.
- A Done action permanently removes the task from the active session; undo and
  completed-task history are separate features.
- Browser-native buttons provide the supported mouse and keyboard interaction.
- The existing task count and empty-list presentation remain the shared UI pattern.

## Risks and Mitigations

- **Wrong duplicate removed**: assign stable identity to each task and remove by
  identity rather than matching descriptions.
- **Stale controls after removal**: re-render the list from the collection after
  every removal so controls always map to current tasks.
- **Accidental navigation or form submission**: use a button that is not a form
  submit control and handle the removal event in JavaScript.
- **Accessibility regression**: give every control an explicit accessible name,
  preserve keyboard focus visibility, and verify keyboard activation.
- **Scope expansion into persistence or undo**: keep session-only removal explicit
  and defer those capabilities to separately specified features.

## Complexity Tracking

No violations. Complexity tracking is not required.
