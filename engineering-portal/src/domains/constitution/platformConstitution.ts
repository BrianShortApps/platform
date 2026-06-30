export const platformConstitution = {
  title: 'Platform Constitution',
  subtitle: 'Engineering principles for the BrianShortApps Engineering Platform',
  version: 'Foundation 004',
  principles: [
    {
      title: 'Single Source of Truth',
      description:
        'Every platform concept should have one authoritative definition. Metadata, navigation, rendering, and domain identity should not be duplicated across the application.',
    },
    {
      title: 'Framework Owns Behavior; Domains Own Content',
      description:
        'Reusable framework components own interaction, layout, rendering patterns, and composition. Domain modules provide content, data, metadata, and domain-specific meaning.',
    },
    {
      title: 'Registry-Driven Architecture',
      description:
        'Platform capabilities are registered, discovered, and rendered through registries. The application shell should not hard-code individual explorers or platform capabilities.',
    },
    {
      title: 'Abstract Only After Multiple Implementations',
      description:
        'Shared abstractions should emerge from repeated implementation patterns. Avoid premature generalization until the platform has proven the need through multiple concrete domains.',
    },
    {
      title: 'Composition Over Duplication',
      description:
        'New capabilities should be assembled from existing framework pieces whenever possible. Duplication is a signal that a reusable platform pattern may be emerging.',
    },
    {
      title: 'Every Work Package Must Build Cleanly',
      description:
        'Each work package must preserve a clean TypeScript and production build. Broken builds are not acceptable handoff points.',
    },
    {
      title: 'Every Work Package Ends Clean',
      description:
        'A completed work package ends with committed changes, pushed branch state, and a clean Git working tree.',
    },
    {
      title: 'Platform Capabilities Are Registered, Not Hard-Coded',
      description:
        'Navigation, showcase rendering, app routing, explorer metadata, and platform capabilities should flow through registration patterns rather than static application logic.',
    },
  ],
} as const;