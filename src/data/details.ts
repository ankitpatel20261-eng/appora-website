import { services } from './services'
import { industries } from './industries'
import { technologies } from './technologies'
import { insights } from './insights'
import { caseStudies } from './caseStudies'
import { awards } from './stats'

export interface DetailSection { title: string; body: string; points?: string[] }
export interface DetailContent { title: string; category: string; summary: string; sections: DetailSection[]; image?: string; imageAlt?: string; external?: string; related?: { label: string; href: string }[] }

const servicePoints: Record<string, string[]> = {
  ai: ['Intelligent document classification and information extraction', 'Search and recommendations built around your business data', 'Decision support with clear human review and measurable outcomes'],
  'machine-learning': ['Demand forecasts and predictive analytics', 'Classification, anomaly detection, and model evaluation', 'Data pipelines, deployment, and monitoring as inputs change'],
  'generative-ai': ['Enterprise assistants grounded in approved knowledge', 'Document summarization and retrieval-augmented generation', 'Workflow agents with scoped tools and approval checkpoints'],
  robotics: ['Robot software and sensor integration', 'Pick-and-place workflows, inspection, and fleet coordination', 'Simulation, system integration, and deployment planning'],
  'computer-vision': ['Object detection and image classification', 'Optical character recognition and document processing', 'Inspection workflows with representative image datasets'],
  'software-development': ['Custom business applications and SaaS platforms', 'APIs, integrations, and legacy modernization', 'Testing, deployment, maintainability, and ongoing improvements'],
  'web-development': ['Responsive company sites, portals, and ecommerce', 'Accessible interfaces and content management', 'Application integrations and performance improvements'],
  'mobile-apps': ['Customer and internal business applications', 'iOS, Android, and cross-platform development', 'Device integration, offline workflows, and release planning'],
  cloud: ['Cloud architecture, server provisioning, and environment configuration', 'Networking, access controls, backups, and deployment pipelines', 'Monitoring, capacity planning, and resource cost reviews'],
  'data-analytics': ['Data integration and reliable ETL / ELT workflows', 'Warehouses, dashboards, and reporting models', 'Data quality checks, ownership, and access management'],
  'strategy-consulting': ['Discovery sessions to define the commercial problem', 'Technology assessment and architecture options', 'Prioritized roadmaps with delivery phases and tradeoffs'],
  'it-maintenance-support': ['Application troubleshooting and scheduled maintenance', 'Monitoring, updates, and dependency management', 'Incident investigation, documentation, and iterative improvements'],
}
const industryPoints: Record<string, string[]> = {
  ecommerce: ['Product catalogs, search, checkout, and payment integrations', 'Order management and inventory synchronization', 'Mobile commerce and customer account experiences'],
  saas: ['Product discovery and focused MVP delivery', 'Subscriptions, account management, and tenant-aware workflows', 'Usage visibility and a practical path to product growth'],
  enterprise: ['ERP, CRM, and business system integrations', 'Role-based internal portals and operational workflows', 'Data consolidation and modernization of legacy tools'],
  healthcare: ['Scheduling and clinic administration workflows', 'Patient-facing experiences and care-team tools', 'Access controls and privacy requirements defined during discovery'],
  education: ['Student, staff, and administrator portals', 'Course content, enrollment, and learning workflows', 'Campus communications and reporting integrations'],
  retail: ['Unified product, inventory, and customer data', 'Direct-to-consumer storefronts and loyalty experiences', 'Operational reporting across digital and physical channels'],
  finance: ['Payment and financial-system integrations', 'Reporting, reconciliation, and operational dashboards', 'Permission management, audit trails, and review workflows'],
  professional: ['Client portals, CRM, and project visibility', 'Document workflows and service delivery coordination', 'Scheduling, billing integrations, and operational reporting'],
}
const techDescriptions: Record<string, [string, string[]]> = {
  python: ['A versatile programming language for data processing, AI workflows, APIs, and business automation.', ['Data processing and automation scripts', 'Machine learning and analytics workflows', 'Backend services and integrations']],
  typescript: ['JavaScript with a type system that helps teams describe interfaces and maintain larger applications.', ['Typed frontend and backend code', 'Shared API models and reusable components', 'Refactoring and collaborative development']],
  react: ['A component-based UI library for interactive web applications.', ['Reusable user-interface components', 'Dashboards and business portals', 'Stateful, responsive product experiences']],
  nextjs: ['A React framework for building web applications with routing and server-side capabilities.', ['Content-driven sites and web platforms', 'Rendering choices matched to each page', 'Full-stack application workflows']],
  nodejs: ['A JavaScript runtime used to build services, integrations, and web application backends.', ['APIs and integration layers', 'Event-driven application workflows', 'JavaScript and TypeScript services']],
  tensorflow: ['A machine learning ecosystem for building, training, and deploying models.', ['Model training and evaluation', 'Prediction and classification workflows', 'Deployment options chosen for the target environment']],
  pytorch: ['A machine learning framework used to develop and train neural networks.', ['Model experimentation and training', 'Computer vision and language workflows', 'Evaluation and production integration']],
  llm: ['Integration of language models into applications with business context and appropriate controls.', ['Summarization and drafting assistance', 'Knowledge assistants and document processing', 'Evaluation, data boundaries, and human review']],
  rag: ['Retrieval-augmented generation connects a language model with relevant source material at query time.', ['Search over approved business documents', 'Answers supported by retrieved passages', 'Document indexing, retrieval quality, and evaluation']],
  agents: ['Application workflows in which a model can select tools or actions within defined boundaries.', ['Tool access scoped to the task', 'Approval checkpoints for consequential actions', 'Run tracking, error handling, and evaluation']],
  opencv: ['A computer vision library for image processing and visual analysis.', ['Image preprocessing and transformations', 'Camera and video processing workflows', 'Integration with inspection and recognition systems']],
  ros: ['A robotics software ecosystem for connecting robot components, sensors, and control workflows.', ['Sensor and device communication', 'Robot software integration and simulation', 'Navigation and application-level coordination']],
  postgresql: ['A relational database for structured application data and SQL-based querying.', ['Transactional business records', 'Relational data models and reporting', 'Indexes, migrations, and access management']],
  mongodb: ['A document database for applications that work with flexible, nested data structures.', ['Document-oriented product data', 'Application event and content models', 'Queries and indexes designed around access patterns']],
  redis: ['An in-memory data store often used for caching and fast access to frequently used information.', ['Application caching', 'Temporary state and counters', 'Data expiry and cache invalidation planning']],
  aws: ['A cloud platform used to host applications, data systems, and infrastructure.', ['Compute, storage, and network architecture', 'Application deployments and environment setup', 'Access management, monitoring, and cost reviews']],
  azure: ['A cloud platform for business applications, data workloads, and infrastructure.', ['Application hosting and environment provisioning', 'Identity and enterprise system integration', 'Monitoring, resource planning, and operations']],
  gcp: ['A cloud platform supporting application hosting, analytics, and machine learning workloads.', ['Application and container hosting', 'Data processing and analytics platforms', 'Infrastructure configuration and monitoring']],
  docker: ['Container tooling for packaging applications with their runtime dependencies.', ['Consistent development environments', 'Repeatable application packaging', 'Container-based deployment workflows']],
  kubernetes: ['A platform for orchestrating containerized workloads across infrastructure.', ['Workload scheduling and deployment management', 'Service networking and configuration', 'Operational planning for container environments']],
  flutter: ['A framework for building application interfaces across multiple platforms from a shared codebase.', ['Cross-platform mobile interfaces', 'Shared UI and business logic', 'Device integrations and release workflows']],
  ios: ['Application development for Apple mobile devices.', ['iPhone and iPad application experiences', 'Platform-specific device capabilities', 'Testing and release preparation']],
  android: ['Application development for Android devices and their varied form factors.', ['Consumer and enterprise mobile applications', 'Device capabilities and offline workflows', 'Testing across target devices']],
  iot: ['Connected-device systems that link physical equipment with software and data services.', ['Device telemetry and data ingestion', 'Monitoring dashboards and remote workflows', 'Device identity, connectivity, and access planning']],
}
const articleSections: Record<string, DetailSection[]> = {
  'ai-vs-automation': [
    { title: 'Start with the decision you need to improve', body: 'A useful starting point is a specific workflow: who performs it, which inputs they use, and how a good result is measured. Record the time spent, common mistakes, and the cost of exceptions before selecting a solution. This gives the team a baseline for judging whether the change is useful.' },
    { title: 'Use automation when the rules are clear', body: 'A process with predictable inputs and explicit rules is often a good fit for conventional software. Moving approved records between systems, sending scheduled reminders, and validating required fields can be implemented with deterministic logic. This keeps behavior easy to explain and makes failures easier to investigate.', points: ['Document the rules and exceptions', 'Define ownership when an automated step fails', 'Measure time saved and error rates against the original process'] },
    { title: 'Consider AI when variation is the challenge', body: 'AI becomes a candidate when inputs vary in ways that are difficult to capture with fixed rules, such as free-form documents, images, or natural-language requests. A prototype should be evaluated against representative examples, including difficult cases, rather than judged only on a successful demonstration.' },
    { title: 'Design a practical pilot', body: 'Choose a bounded task, assemble examples that reflect real usage, and define acceptable output quality. Keep a review path for uncertain or consequential results. Compare the pilot with a simpler rules-based solution and include integration, maintenance, and review effort in the decision.' },
    { title: 'Make the outcome visible', body: 'Agree on success criteria before launch. These might include turnaround time, manual review effort, task completion, or the quality of a recommendation. Continue measuring after release so the business can see where the system helps and where it still needs improvement.' },
  ],
  'ml-in-production': [
    { title: 'A model is one part of a working system', body: 'A useful prediction depends on more than model training. Data must arrive reliably, transformations must be consistent, and the prediction must reach the person or application that needs it. Plan the entire path from source data to business action.' },
    { title: 'Build a dependable data foundation', body: 'Define the source of each feature, how missing or delayed inputs are handled, and who owns data quality. Separate training and evaluation data in a way that reflects the real prediction task. Record the dataset and model versions so results can be reproduced.', points: ['Validate input schemas and expected ranges', 'Check for missing data and unintended information leakage', 'Version training code, transformations, and model artifacts'] },
    { title: 'Choose deployment around the workflow', body: 'Some decisions need an immediate response; others can use a scheduled batch of predictions. Select the delivery approach based on latency, availability, cost, and integration needs. Define how the application behaves when a prediction service is unavailable or the input is outside the expected range.' },
    { title: 'Monitor business behavior as well as infrastructure', body: 'Service health does not tell the whole story. Track input changes, prediction distributions, and outcome quality when feedback becomes available. Make it clear who investigates alerts and when a model should be reviewed or retrained.' },
    { title: 'Release with a fallback', body: 'Validate changes before replacing the existing model. A staged release and a documented rollback path help teams compare behavior and respond to unexpected results. Keep a simple fallback workflow for periods when the model cannot be used confidently.' },
  ],
  'agents-at-work': [
    { title: 'Move from answering to completing a task', body: 'A chatbot primarily produces a response. An agent workflow may also retrieve information, call tools, or propose changes to a business system. Start by defining the task and the permitted actions, rather than giving a model broad access and expecting it to discover the process.' },
    { title: 'Ground the workflow in approved information', body: 'A knowledge assistant should retrieve material the current user is allowed to access. Define how documents are selected, how source passages are presented, and what happens when the available information does not support an answer. Retrieval does not remove the need to evaluate output quality.' },
    { title: 'Keep tool permissions narrow', body: 'Each tool should have a clear purpose, validated inputs, and an explicit access boundary. Reading a record, preparing a draft, and sending a message are different levels of action. Separate them so the application can require review at the right point.', points: ['Use the minimum permissions needed for the task', 'Validate tool inputs and handle errors explicitly', 'Require approval before consequential external actions'] },
    { title: 'Treat untrusted content as data', body: 'Documents and external messages can contain text that looks like instructions. The application should preserve the boundary between retrieved content and the rules governing tool use. Test the workflow with conflicting instructions, missing context, and attempts to trigger unintended actions.' },
    { title: 'Evaluate complete runs', body: 'Assess whether the agent completed the intended task, used the right information, respected permissions, and recovered sensibly from failures. Keep useful run records with appropriate privacy controls so a team can investigate mistakes and improve the workflow.' },
  ],
}

export function getDetail(section: string, slug: string): DetailContent | undefined {
  if (section === 'services') {
    const item = services.find((entry) => entry.id === slug)
    if (!item) return
    return { title: item.title, category: 'Our services', summary: item.description, sections: [
      { title: 'What we can help you build', body: `Our ${item.title.toLowerCase()} work starts with the task your business needs to accomplish. We define the users, existing systems, constraints, and expected outcomes before choosing an implementation.`, points: servicePoints[slug] },
      { title: 'How delivery works', body: 'We begin with discovery and a focused scope, then design and implement in reviewable stages. Testing, integration, documentation, and deployment planning are included in the delivery conversation, with tradeoffs made visible along the way.' },
      { title: 'Planning your project', body: 'Bring your current workflow, example inputs, system dependencies, and the outcome you want to improve. Together we can assess feasibility, identify risks, and define an initial phase that is useful on its own and provides a foundation for future work.' },
    ], related: [{ label: 'Explore our technology stack', href: '/#tech-stack-heading' }] }
  }
  if (section === 'industries') {
    const item = industries.find((entry) => entry.id === slug)
    if (!item) return
    return { title: `${item.title} solutions`, category: 'Industries', summary: item.description, sections: [
      { title: `Digital capabilities for ${item.title.toLowerCase()}`, body: 'Technology works best when it fits the people, processes, and constraints of the sector. We map the workflow and system dependencies before proposing a solution.', points: industryPoints[slug] },
      { title: 'Connected to your operations', body: 'We consider the existing tools your team depends on, data ownership, and the permissions needed by each user group. Integration and reporting are planned alongside the customer-facing experience.' },
      { title: 'A clear path to delivery', body: 'Start with a focused problem and representative examples from your business. We define scope, validate the approach, and deliver in stages so your team can review progress and prioritize what comes next.' },
    ], related: [{ label: 'Software development', href: '/services/software-development' }, { label: 'Cloud solutions', href: '/services/cloud' }] }
  }
  if (section === 'technologies') {
    const item = technologies.find((entry) => entry.id === slug)
    const content = techDescriptions[slug]
    if (!item || !content) return
    return { title: item.name, category: 'Technology expertise', summary: content[0], sections: [
      { title: `Where ${item.name} fits`, body: `We consider ${item.name} where its strengths match the application and the team that will operate it. The choice depends on workload, existing architecture, maintainability, and deployment requirements.`, points: content[1] },
      { title: 'From selection to integration', body: 'We define the boundaries between components, validate a representative workflow, and plan testing and deployment before scaling the implementation. Security, observability, and documentation are considered alongside feature delivery.' },
      { title: 'Choosing the right fit', body: 'A technology choice should serve a real business need. Tell us about your users, current systems, expected usage, and delivery constraints so we can compare suitable options and explain the tradeoffs.' },
    ], related: [{ label: 'Discuss a technology roadmap', href: '/services/strategy-consulting' }] }
  }
  if (section === 'insights') {
    const item = insights.find((entry) => entry.id === slug)
    if (!item) return
    return { title: item.title, category: item.category, summary: item.description, sections: articleSections[slug], related: [{ label: 'Explore AI services', href: '/services/ai' }, { label: 'Strategy & consulting', href: '/services/strategy-consulting' }] }
  }
  if (section === 'clients') {
    const item = caseStudies.find((entry) => entry.id === slug)
    if (!item) return
    return { title: item.title, category: item.category, summary: item.description, image: item.image, imageAlt: item.imageAlt, sections: [
      { title: 'Project overview', body: item.description },
      { title: 'Solution focus', body: slug === 'decorist' ? 'This project brings brand identity and a web presence together. The focus is a coherent digital experience that communicates the design-led nature of the business.' : slug === 'third-eye' ? 'The project connects a CRM workflow with a website platform, bringing customer information and everyday operational tasks into a connected digital experience.' : 'The project focuses on an ecommerce experience across the channels described above, with a consistent presentation of products and a straightforward customer journey.' },
      { title: 'Planning a similar project', body: 'Every delivery has its own requirements. Share your audience, desired workflows, integration needs, and existing systems with us to explore an approach tailored to your business.' },
    ], related: [{ label: 'Web development', href: '/services/web-development' }, { label: 'Mobile applications', href: '/services/mobile-apps' }] }
  }
  if (section === 'recognition') {
    const item = awards.find((entry) => entry.id === slug)
    if (!item) return
    const platformDescriptions: Record<string, string> = { clutch: 'Clutch is a directory for researching service providers and reading client reviews.', upwork: 'Upwork is a platform that connects clients with independent professionals and agencies.', designrush: 'DesignRush is a directory for discovering agencies and exploring their service offerings.', google: 'Google can help visitors find business information and available customer reviews.', results: 'Learn about Appora, our services, and our approach to practical software delivery.' }
    return { title: item.name, category: 'Platform information', summary: platformDescriptions[slug], external: item.href.startsWith('https:') ? item.href : undefined, sections: [
      { title: slug === 'results' ? 'Our delivery approach' : `Explore ${item.name}`, body: slug === 'results' ? 'We start with your business question and work toward a focused delivery plan. Clear scope, reviewable milestones, and ongoing communication help keep the project aligned with its intended outcome.' : `Use ${item.name} to explore available provider information and make your own assessment. The link below opens the platform homepage; an Appora-specific profile is not linked here.` },
      { title: 'What to look for in a technology partner', body: 'Ask about relevant experience, delivery responsibilities, communication, and support after launch. Review examples that match your needs and agree on clear scope and acceptance criteria before work begins.', points: ['A clear understanding of your commercial problem', 'A delivery plan with visible milestones and responsibilities', 'A practical approach to testing, documentation, and support'] },
    ], related: [{ label: 'About Appora', href: '/company' }, { label: 'Explore our work', href: '/clients' }] }
  }
}