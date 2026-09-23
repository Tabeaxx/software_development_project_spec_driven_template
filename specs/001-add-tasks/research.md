# Research: Add Tasks

## Decision: Use native browser APIs

**Rationale**: The feature is a single-page interaction with no backend, database,
or external integration. Native DOM events and text rendering provide the smallest
solution and match the project constitution's simplicity requirement.

**Alternatives considered**: A frontend framework or state-management library was
rejected because the feature has one small in-memory state collection and no need
for component or dependency overhead.

## Decision: Keep task data in memory

**Rationale**: The specification limits this increment to adding and displaying
tasks during the active page session. In-memory state satisfies that scope without
introducing persistence or backend decisions.

**Alternatives considered**: Browser storage and a remote API were rejected because
they would expand scope into persistence, synchronization, and failure handling.

## Decision: Render descriptions as text

**Rationale**: User-entered descriptions must remain text. Text rendering prevents
the description from being interpreted as markup and reduces injection risk.

**Alternatives considered**: HTML string templating was rejected because it adds
unnecessary parsing and creates avoidable handling risks for user input.