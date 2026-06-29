---
title: EP-001 — Engineering Portal Blueprint
sidebar_label: EP-001 Engineering Portal
artifact: EP-001
type: specification
status: draft
version: 0.1
owner: Platform
foundation: Foundation 003
created: 2026-06-29
updated: 2026-06-29
related:
  - FND-003
  - CONST-001
  - KN-001
---

# EP-001 — Engineering Portal Blueprint

## Purpose

The Engineering Portal is the primary interface for the Brian Short Apps Engineering Platform.

It is not a documentation site. It is a platform application for browsing, understanding, and managing structured engineering knowledge.

## Goals

- Display engineering artifacts
- Organize standards, ADRs, packages, components, and specifications
- Consume `@bsa/artifact-engine`
- Generate navigation from artifact metadata
- Support future search, dashboards, and knowledge graph views

## Non-goals

- Replace Git as the source of truth
- Store documents in a database
- Become application-specific documentation
- Depend on Docusaurus internals

## Architecture

```text
Git Repository
    ↓
Engineering Artifacts
    ↓
@bsa/artifact-engine
    ↓
Engineering Portal
```

## Proposed Location

platform/
└── engineering-portal/

## Application Structure

engineering-portal/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   │   ├── artifacts/
│   │   ├── navigation/
│   │   ├── search/
│   │   └── dashboard/
│   ├── layouts/
│   ├── providers/
│   ├── routes/
│   ├── styles/
│   └── types/
├── package.json
├── tsconfig.json
└── README.md

## First Milestone

EP-001 is complete when the new portal can:

- Load a small set of sample artifacts
- Display artifact title, type, status, owner, and content
- Render navigation from artifact metadata
- Link related artifacts
- Run locally as a standalone platform app


## Consumers

- Brian Short Apps engineers
- Future CLI
- Future AI tooling
- Future package documentation workflows