# Quickstart: Remove Tasks

## Prerequisites

- A current desktop or mobile browser.
- The Add Tasks feature available in `dashboard/src/index.html`.
- The repository checked out locally.

## Run

1. Open `dashboard/src/index.html` directly in the browser, or serve the repository
   with a local static server.
2. Add at least two tasks using the existing Add task flow.

## Validation Scenarios

### Remove one task

1. Add `First task` and `Second task`.
2. Activate the Done button associated with `First task`.
3. Confirm `First task` disappears within 1 second.
4. Confirm `Second task` remains visible.
5. Confirm the page does not refresh or navigate.

### Preserve order and duplicate descriptions

1. Add `Same task`, `Other task`, and another `Same task`.
2. Activate the Done button for the first `Same task`.
3. Confirm `Other task` and the second `Same task` remain in their original order.

### Remove the last task

1. Leave one task visible.
2. Activate its Done button.
3. Confirm no task items or task-specific Done buttons remain.
4. Confirm the task count shows zero tasks.

### Keyboard and text safety

1. Add `Review <today>`.
2. Use keyboard navigation to focus its Done button.
3. Activate the button with the keyboard.
4. Confirm the task is removed and the page remains unchanged.

## Validation Notes

- Validated in a current browser on 2026-09-23 using the local `file://` entry point.
- Duplicate descriptions were removed independently by their task-specific Done controls.
- Remaining tasks preserved their order, and the final removal produced zero task items and controls.
- Keyboard activation, accessible names, and special-character text were verified with no console errors.
- Removals are session-only and reset when the page is refreshed.