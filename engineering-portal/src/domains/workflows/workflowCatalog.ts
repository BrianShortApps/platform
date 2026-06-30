import type { WorkflowItem } from './workflow.types';

export const workflowCatalog: WorkflowItem[] = [
  {
    id: 'work-package-delivery',
    title: 'Work Package Delivery',
    type: 'delivery',
    status: 'active',
    owner: 'BrianShortApps Engineering',
    summary:
      'Defines the incremental delivery process used to plan, implement, verify, commit, and recap platform work packages.',
    stages: [
      {
        id: 'architecture-intent',
        title: 'Architecture Intent',
        description:
          'Define the purpose, boundaries, and expected architectural impact of the work package.',
      },
      {
        id: 'component-package',
        title: 'Component Package',
        description:
          'Group related files into a small implementation package that can be built and verified independently.',
      },
      {
        id: 'incremental-implementation',
        title: 'Incremental Implementation',
        description:
          'Apply focused changes without expanding scope beyond the package objective.',
      },
      {
        id: 'build-verification',
        title: 'Build Verification',
        description:
          'Run the production build and confirm TypeScript and Vite complete successfully.',
      },
      {
        id: 'visual-verification',
        title: 'Visual Verification',
        description:
          'Open the app, inspect the UI, and confirm the feature behaves as expected.',
      },
      {
        id: 'commit-and-push',
        title: 'Commit & Push',
        description:
          'Commit the verified package, push to the remote branch, and confirm a clean Git state.',
      },
      {
        id: 'architecture-recap',
        title: 'Architecture Recap',
        description:
          'Summarize what changed, why it matters, and how it affects the next work package.',
      },
    ],
    inputs: ['Architecture intent', 'Clean working tree', 'Current platform registry'],
    outputs: ['Committed work package', 'Pushed branch', 'Clean Git state'],
    relatedDocumentation: ['platform-constitution'],
    relatedRepositories: ['platform'],
    relatedServices: [],
    relatedApis: [],
    tags: ['foundation-004', 'delivery', 'engineering-process'],
    version: 'Foundation 004',
  },
  {
    id: 'documentation-review',
    title: 'Documentation Review',
    type: 'documentation',
    status: 'draft',
    owner: 'BrianShortApps Engineering',
    summary:
      'Defines how engineering documentation is reviewed, approved, deprecated, and connected to related platform knowledge.',
    stages: [
      {
        id: 'draft',
        title: 'Draft',
        description:
          'Create or update documentation with clear ownership, status, and related platform references.',
      },
      {
        id: 'technical-review',
        title: 'Technical Review',
        description:
          'Validate technical accuracy, architectural alignment, and consistency with platform standards.',
      },
      {
        id: 'approval',
        title: 'Approval',
        description:
          'Mark the documentation as approved once it accurately represents the platform.',
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        description:
          'Periodically review documentation and deprecate anything that no longer reflects current architecture.',
      },
    ],
    inputs: ['Documentation item', 'Owner', 'Related platform concepts'],
    outputs: ['Approved documentation', 'Reviewed knowledge record'],
    relatedDocumentation: ['platform-constitution', 'explorer-framework-guide'],
    relatedRepositories: ['platform'],
    relatedServices: [],
    relatedApis: [],
    tags: ['documentation', 'review', 'knowledge-quality'],
    version: '0.1.0',
  },
  {
    id: 'api-lifecycle',
    title: 'API Lifecycle',
    type: 'lifecycle',
    status: 'draft',
    owner: 'BrianShortApps Engineering',
    summary:
      'Defines how APIs are proposed, implemented, documented, versioned, reviewed, and retired across the platform.',
    stages: [
      {
        id: 'proposal',
        title: 'Proposal',
        description:
          'Identify the API purpose, owning service, expected consumers, and integration boundaries.',
      },
      {
        id: 'implementation',
        title: 'Implementation',
        description:
          'Build the API contract, endpoint behavior, validation, and service integration.',
      },
      {
        id: 'documentation',
        title: 'Documentation',
        description:
          'Create or update API documentation, usage guidance, and related explorer metadata.',
      },
      {
        id: 'review',
        title: 'Review',
        description:
          'Verify ownership, lifecycle status, compatibility, and relationship metadata.',
      },
      {
        id: 'deprecation',
        title: 'Deprecation',
        description:
          'Retire obsolete APIs with clear replacement guidance and downstream impact review.',
      },
    ],
    inputs: ['API proposal', 'Owning service', 'Consumer requirements'],
    outputs: ['Registered API', 'Documentation link', 'Lifecycle status'],
    relatedDocumentation: ['api-explorer-adr'],
    relatedRepositories: ['platform'],
    relatedServices: ['engineering-portal'],
    relatedApis: ['platform-api-catalog'],
    tags: ['api', 'lifecycle', 'governance'],
    version: '0.1.0',
  },
];