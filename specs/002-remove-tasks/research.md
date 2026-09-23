# Research: Remove Tasks

## Decision: Extend the existing task renderer

**Rationale**: `dashboard/src/script.js` already owns the in-memory task collection
and renders the task list. Adding task-specific Done controls and a removal handler
there keeps state and presentation synchronized with minimal complexity.

**Alternatives considered**: A separate removal service or framework component was
rejected because the application has no backend and only one small task list.

## Decision: Remove by stable task identity

**Rationale**: Task descriptions are not unique. A stable identity ensures that a
Done action removes only the selected task, including when descriptions match.

**Alternatives considered**: Removing by description or list text was rejected
because duplicate descriptions could remove the wrong task.

## Decision: Use native buttons and in-memory updates

**Rationale**: A real button is keyboard accessible by default, and removing from
the existing in-memory collection followed by immediate rendering satisfies the
no-refresh requirement.

**Alternatives considered**: Links or navigation-based actions were rejected because
they risk page navigation and add behavior not required by the feature.