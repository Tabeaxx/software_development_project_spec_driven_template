# UI Contract: Remove Tasks

## Required Elements

- Every visible task item has exactly one clearly labeled Done button.
- Each Done button is associated with only its own task.
- The task list remains visible while remaining tasks exist.
- No task-specific Done buttons are rendered when the task list is empty.

## Interaction Contract

| Action | Initial state | Result |
| --- | --- | --- |
| Mark one task done | One or more tasks are visible | Only the selected task disappears immediately. |
| Mark a task done among several | Multiple tasks are visible | Other task descriptions and order remain unchanged. |
| Mark the last task done | One task is visible | The list contains zero task items without a page refresh. |
| Use keyboard activation | Focus is on a Done button | The same removal behavior occurs without navigation. |

## Accessibility Contract

- Each Done control has an accessible name that identifies its task.
- Done controls are native buttons and keyboard accessible.
- Focus indicators remain visible during keyboard navigation.
- The task count or list update is exposed clearly after removal.