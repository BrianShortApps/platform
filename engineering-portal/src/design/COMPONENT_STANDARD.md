# BrianShortApps Component Standard v0.1

## Purpose

Every design-system component should use predictable props, naming, structure, and behavior so the BrianShortApps UI stays consistent across products.

## Component Categories

### Primitive Components

Small reusable UI elements.

Examples:

- Button
- Badge
- Input
- Status
- Surface

### Container Components

Components that wrap content.

Examples:

- Card
- Panel
- MetricCard
- EmptyState
- LoadingState

### Layout Components

Components that define page or workspace structure.

Examples:

- WorkspaceLayout
- WorkspaceSidebar
- WorkspaceHeader
- WorkspaceBrand
- WorkspaceBreadcrumbs

## Standard Props

### Visual Props

Use these names consistently:

```ts
variant?: string;
size?: "sm" | "md" | "lg";
tone?: "neutral" | "success" | "warning" | "danger" | "info";