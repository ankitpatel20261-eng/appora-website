import type { ServiceItem } from '../types'

export const servicesIntro = {
  eyebrow: 'Services',
  title: 'Technology-driven solutions. Intelligence that scales.',
  description:
    'We provide comprehensive technical support that enables companies to create, update, automate, protect, and grow their digital operations — from software and cloud engineering to AI, machine learning, robotics, cybersecurity, and intelligent automation.',
}

export const services: ServiceItem[] = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    description:
      'Build more intelligently and perform more effectively. AI solutions that automate decision-making, understand data, improve customer experiences, and power intelligent digital products.',
    href: '/services/ai',
  },
  {
    id: 'machine-learning',
    number: '02',
    title: 'Machine Learning',
    description:
      'Turn historical and real-time data into predictive intelligence — forecasting, classification, fraud detection, predictive maintenance, and MLOps.',
    href: '/services/machine-learning',
  },
  {
    id: 'generative-ai',
    number: '03',
    title: 'Generative AI & AI Agents',
    description:
      'From conversations to smart action. Enterprise copilots, chatbots, RAG systems, document processing, workflow agents, and AI-powered customer support.',
    href: '/services/generative-ai',
  },
  {
    id: 'robotics',
    number: '04',
    title: 'Robotics',
    description:
      'Intelligent machines for the real world — manufacturing robotics, AMRs, inspection, pick-and-place automation, fleet management, and ROS / ROS 2 engineering.',
    href: '/services/robotics',
  },
  {
    id: 'computer-vision',
    number: '05',
    title: 'Computer Vision',
    description:
      'Vision systems that analyze images and video for automation, inspection, monitoring, quality control, OCR, and industrial operational intelligence.',
    href: '/services/computer-vision',
  },
  {
    id: 'software-development',
    number: '06',
    title: 'Software Development',
    description:
      'Digital products designed for performance and scale — custom software, SaaS, web and mobile apps, APIs, microservices, legacy modernization, and system integration.',
    href: '/services/software-development',
  },
  {
    id: 'web-development',
    number: '07',
    title: 'Web Development',
    description:
      'Responsive, secure, and scalable websites and web applications — business sites, portals, ecommerce, SaaS apps, admin dashboards, PWAs, and CMS platforms.',
    href: '/services/web-development',
  },
  {
    id: 'mobile-apps',
    number: '08',
    title: 'Mobile App Development',
    description:
      'Experiences designed for every screen — iOS, Android, cross-platform, enterprise mobility, field-service apps, AI-powered mobile, and IoT-connected applications.',
    href: '/services/mobile-apps',
  },
  {
    id: 'cloud',
    number: '09',
    title: 'Cloud Solutions',
    description:
      'Cloud environments that power apps, AI workloads, and business systems — architecture, migration, serverless, containers, Kubernetes, security, and AWS, Azure, and GCP.',
    href: '/services/cloud',
  },
  {
    id: 'data-analytics',
    number: '10',
    title: 'Analytics & Data Engineering',
    description:
      'Data infrastructure for modern intelligence — ETL/ELT, pipelines, warehouses, data lakes, real-time processing, integration, governance, and business intelligence.',
    href: '/services/data-analytics',
  },
  {
    id: 'strategy-consulting',
    number: '11',
    title: 'Strategy & Consulting',
    description:
      'Turn technical challenges into a clear plan. Align technology with your business goals, choose the right tools, and prioritize a practical roadmap for delivery.',
    href: '/services/strategy-consulting',
  },
  {
    id: 'it-maintenance-support',
    number: '12',
    title: 'IT Maintenance & Support',
    description:
      'Keep your systems running reliably with proactive monitoring, scheduled maintenance, continuous upgrades, and ongoing technical support as your business grows.',
    href: '/services/it-maintenance-support',
  },
]
