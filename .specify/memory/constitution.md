<!--
Sync Impact Report
- Version change: unversioned scaffold -> 1.0.0
- Modified principles: placeholder principles -> Specification-First; Incremental Delivery; Student Ownership; Meaningful Git History; Quality and Simplicity
- Added sections: Technology and Scope; Development Workflow
- Removed sections: none
- Follow-up TODOs: RATIFICATION_DATE requires the original adoption date
-->

# Course Web Application Constitution

## Core Principles

### I. Specification-First
Each feature MUST begin with a clear user need, acceptance criteria, and an implementation
plan before coding starts. The specification is the reference for scope and completion.
This keeps a student project focused and makes decisions reviewable.

### II. Incremental Delivery
The application MUST be built in small, demonstrable increments. Each increment MUST leave
the application in a working state and MUST be checked against its acceptance criteria
before the next increment begins.

### III. Student Ownership
AI tools MAY be used for research, design, coding, debugging, and documentation. The
student remains responsible for understanding, reviewing, testing, and being able to
explain every submitted part of the project. Unchecked generated output MUST NOT be
submitted.

### IV. Meaningful Git History
Work MUST be tracked in Git. Commits MUST be small enough to explain and MUST describe the
actual change, such as a feature, fix, documentation update, or refactor. Misleading,
empty, or catch-all commit messages MUST be avoided.

### V. Quality and Simplicity
Features MUST work in supported browsers, preserve basic accessibility, and be checked for
functional errors before delivery. The project MUST use HTML, CSS, and JavaScript without
unnecessary dependencies or architecture; complexity requires a documented reason.

## Technology and Scope

The project uses HTML for structure, CSS for presentation, and JavaScript for behavior.
Requirements outside the approved specification are out of scope until documented and
accepted. User input MUST be handled deliberately, and sensitive data MUST NOT be exposed
in source code or Git history.

## Development Workflow

For each increment, the student MUST update the specification or decision notes when scope
or design changes, implement the smallest useful change, verify the result in the browser,
and record the work in a meaningful commit. Before submission, the student MUST review the
requirements, test the primary user flows, and document important technical decisions and
known limitations.

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

This constitution governs project decisions and is reviewed at each milestone and before
submission. Amendments MUST state the reason, affected principles, and any required follow-
up work. Versioning follows semantic intent: MAJOR for incompatible governance changes,
MINOR for new or materially expanded requirements, and PATCH for clarifications or wording
fixes. The student MUST check new work against this constitution during each milestone
review.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): record the original adoption date | **Last Amended**: 2026-09-23
