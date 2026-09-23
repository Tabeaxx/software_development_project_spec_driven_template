# Data Model: Remove Tasks

## Task

Represents an active item in the To-Do list.

| Field | Type | Required | Rules |
| --- | --- | --- | --- |
| `id` | number or string | Yes | Stable and unique for the active session; used by the matching Done control. |
| `description` | string | Yes | Existing task description; remains unchanged when another task is removed. |

## Task List

Represents the ordered in-memory collection of active `Task` objects.

- Removing a task deletes only the object with the selected identity.
- Remaining tasks retain their existing relative order.
- The collection is not persisted after the page is closed or refreshed.

## Done Control Association

Each rendered task item has one Done control associated with that task's `id`.
The association is recreated whenever the task list is rendered, preventing stale
controls from targeting the wrong item.

## State Transitions

1. **Visible**: A Task exists in the Task List and has one Done control.
2. **Selected**: The user activates that task's Done control.
3. **Removed**: The matching Task is deleted from the collection.
4. **Displayed**: The task list and count update immediately; remaining tasks stay
   visible in order.