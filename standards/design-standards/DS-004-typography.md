# DS-004 — Typography

**Status:** Approved
**Version:** 1.0

---

## Purpose

Typography establishes hierarchy, clarity, and confidence.

Good typography should make information understandable before it is read.

---

## Why This Exists

Typography communicates structure before content is read.

Consistent typography reduces cognitive effort and allows users to quickly understand information hierarchy across every Brian Short Apps application.

---

## Philosophy

Typography is an engineering system.

Every size, weight, spacing, and hierarchy level is intentional.

---

## Engineering Rules

* Never invent one-off font sizes.
* Every size belongs to the platform scale.
* Every heading communicates hierarchy.
* Typography should maximize readability.
* Comfortable line lengths are preferred over dense layouts.

---

## Type Scale

Display

H1

H2

H3

Section

Body

Secondary

Caption

Code

---

## Typography Tokens

```text
type.display
type.h1
type.h2
type.h3

type.section

type.body
type.secondary
type.caption

type.code
```

---

## Font Family

Primary

Inter Variable

Monospace

JetBrains Mono

---

## Accessibility

* Minimum readable sizes
* Responsive scaling
* Tabular figures where appropriate
* Consistent spacing

---

## Implementation

Typography tokens are shared across React, SwiftUI, and future platforms.

---

## Non-Goals

Typography is not intended to:

* Provide branding through novelty.
* Introduce custom font scales.
* Encourage inconsistent spacing.

## Reference Implementation

Brian Short Apps Engineering Portal

## Related Standards

* DS-003 — Color System
* DS-005 — Layout & Geometry

## Related ADRs

* ADR-0004 — Component-First Development

## Future Evolution

Future versions may introduce:

* responsive typography tokens
* variable font optimization
* localization adjustments

## Revision History

| Version | Date       | Notes                                 |
| ------- | ---------- | ------------------------------------- |
| 1.0     | 2026-06-26 | Initial approved Typography standard. |
