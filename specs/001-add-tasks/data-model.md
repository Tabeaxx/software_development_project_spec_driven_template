# Data Model: Add Tasks

## Task

Represents one accepted item in the To-Do list.

| Field | Type | Required | Rules |
| --- | --- | --- | --- |
| `description` | string | Yes | Must contain at least one non-space character after trimming outer whitespace. |

## Task List

Represents the ordered collection of `Task` objects visible in the current page
session.

- New tasks are appended in the order they are accepted.
- Existing tasks remain unchanged when a new task is added.
- The collection is not persisted after the page is closed or refreshed.

## State Transitions

1. **Input**: The user enters a description.
2. **Validation**: The description is trimmed and checked for non-empty content.
3. **Rejected**: Empty content leaves the Task List unchanged and produces feedback.
4. **Accepted**: A Task is created and appended to the Task List.
5. **Displayed**: The new Task is immediately visible in the list.