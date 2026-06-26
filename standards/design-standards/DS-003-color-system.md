# Foundation 001 — Design Standards

---

# DS-003 — Color System

**Status:** Approved
**Version:** 1.0
**Foundation:** Foundation 001 – Identity & Design System

---

## Purpose

The Brian Short Apps Color System defines how color communicates meaning throughout the Brian Short Apps ecosystem.

Color exists to reinforce understanding, hierarchy, interaction, and confidence.

Color is never decorative.

---

## Why This Exists

Color is one of the fastest forms of communication available in an interface.

Without a consistent semantic color system, applications gradually develop inconsistent visual language, making the ecosystem more difficult to learn and maintain.

The Brian Short Apps Color System ensures that color communicates meaning rather than decoration.

---

## Philosophy

The interface should feel calm and professional.

Content should always receive visual priority over interface chrome.

Color should guide attention rather than compete for it.

Every application should inherit the same semantic color language.

---

## Engineering Rules

* Components consume semantic color tokens only.
* Applications never reference raw hexadecimal values directly.
* Dark Mode and Light Mode use identical semantic token names.
* Color must never be the sole indicator of meaning.
* Product identity may introduce an accent color while preserving platform consistency.

---

## Color Layers

### Brand

Represents Brian Short Apps itself.

### Interface

Surfaces, backgrounds, borders, cards, navigation.

### Information

Success

Warning

Error

Information

Neutral

### Interaction

Hover

Pressed

Focused

Disabled

Loading

### Motion

Motion reinforces communication.

Color transitions should remain subtle and calm.

---

## Design Tokens

```text
platform.primary
platform.secondary

surface.default
surface.elevated
surface.overlay

text.primary
text.secondary
text.inverse

border.default
border.focus

status.success
status.warning
status.error
status.info
```

---

## Accessibility

* WCAG AA minimum contrast
* Visible keyboard focus
* Never rely on color alone
* Motion respects reduced-motion preferences

---

## Implementation

React, SwiftUI, CSS variables, and future platforms all consume identical semantic token names.

---

## Non-Goals

The Color System is not intended to:

* Make interfaces visually louder.
* Replace hierarchy with color.
* Introduce application-specific color meanings.
* Encourage direct hexadecimal values within application code.

---

## Reference Implementation

Brian Short Apps Engineering Portal

## Related Standards

* DS-004 — Typography
* DS-005 — Layout & Geometry
* DS-006 — Component Library

## Related ADRs

* ADR-0003 — Three-Ring Platform Mark

## Future Evolution

Future versions may introduce:

* semantic elevation tokens
* chart palettes
* accessibility contrast automation
* theme generation

## Revision History

| Version | Date       | Notes                          |
| ------- | ---------- | ------------------------------ |
| 1.0     | 2026-06-26 | Initial approved Color System. |
