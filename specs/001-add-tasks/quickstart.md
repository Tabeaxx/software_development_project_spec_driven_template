# Quickstart: Add Tasks

## Prerequisites

- A current desktop or mobile browser.
- The repository checked out locally.

## Run

1. Open `dashboard/src/index.html` directly in the browser, or serve the repository
   with a local static server.
2. Locate the task description field and Add control.

## Validation Scenarios

### Add a valid task

1. Enter `Buy groceries`.
2. Activate Add.
3. Confirm `Buy groceries` appears in the task list within 1 second.
4. Confirm the page does not refresh or navigate.

### Reject empty input

1. Leave the field empty and activate Add.
2. Confirm no new list item appears.
3. Confirm visible feedback explains that a description is required.

### Reject whitespace-only input

1. Enter spaces only and activate Add.
2. Confirm no new list item appears and the same validation feedback is shown.

### Preserve existing tasks

1. Add `First task`.
2. Add `Second task`.
3. Confirm both tasks remain visible in insertion order.

### Keyboard and text safety

1. Use keyboard navigation to focus the input and Add control.
2. Add `Review <today>`.
3. Confirm the exact text is displayed as text and is not interpreted as markup.