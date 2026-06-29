---
title: ADR-0003 Three-Ring Platform Mark
id: adr-0003-three-ring-platform-mark
status: Approved
version: 1.0
foundation: Foundation 001
owner: Brian Short Apps
---

# ADR-0003 — Three-Ring Platform Mark

## Status

Approved

## Context

Brian Short Apps needed a platform mark that could represent the full ecosystem rather than a single application.

The mark needed to support:

- A shared user experience across all products
- A family of independent applications
- Continued progress and future technologies
- A center product zone where each application can live inside the platform identity

## Decision

Brian Short Apps will use a three-ring Platform Mark.

The rings represent:

- **Outer Ring — Experience**
- **Middle Ring — Products**
- **Inner Ring — Progress**

The default state intentionally offsets the ring breaks. This represents separate domains working independently within the ecosystem.

On interaction, the rings align. This creates a clear visual path to the center product zone.

## Interaction Model

### Default State

The rings are intentionally not aligned.

This communicates that experience, products, and progress each have distinct responsibilities.

### Interactive State

On hover or interaction, the rings align.

This communicates access, clarity, and purposeful alignment around the product.

## Geometry Rules

- Outer ring breaks: 12, 4, and 8 o'clock
- Inner ring breaks: 12, 4, and 8 o'clock
- Middle ring breaks: 10, 2, and 6 o'clock in the default state
- On interaction, the middle ring rotates into alignment with the outer and inner rings
- The center product zone remains visually protected and primary

## Motion Philosophy

Motion communicates access.

Motion does not decorate.

The Platform Mark should move calmly and intentionally, reinforcing the Brian Short Apps principles of stability, consistency, and responsive progress.

## Consequences

This changes the Platform Mark from a static logo into an interactive system component.

The mark is not merely branding. It is both:

- A visual identity element
- A functional navigation and communication element

## Alternatives Considered

### Static aligned rings

Rejected because it did not communicate the transformation from independent domains to aligned access.

### Beveled inner ring

Rejected for v1 because it introduced unnecessary visual complexity and weakened the clean engineering aesthetic.

### Letter-based monogram

Rejected because it made the brand too dependent on initials and did not represent the broader ecosystem.

## Related Standards

- DS-002 — Platform Mark
- DS-007 — Design Language
- ES-005 — Documentation Standards

## Revision History

| Version | Date | Notes |
|---|---|---|
| 1.0 | 2026-06-26 | Initial approved Platform Mark decision. |