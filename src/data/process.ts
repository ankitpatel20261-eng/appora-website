import type { ProcessStep } from '../types'

export const processIntro = {
  eyebrow: 'Our process',
  title: 'From idea to digital solution',
  description:
    'We use a systematic method to transform your business requirements into robust technical solutions.',
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description:
      'We recognize your company, users, issues, technological environment, and goals before anything is scoped.',
  },
  {
    id: 'plan',
    number: '02',
    title: 'Plan',
    description:
      'We create technology strategies, project scope, architecture, timelines, and implementation roadmaps.',
  },
  {
    id: 'design-develop',
    number: '03',
    title: 'Design & development',
    description:
      'Our team creates and develops a secure, scalable, and user-friendly solution tailored to your specifications.',
  },
  {
    id: 'test-implement',
    number: '04',
    title: 'Testing & implementation',
    description:
      'Before deploying, we extensively test functionality, performance, security, and user experience.',
  },
  {
    id: 'support',
    number: '05',
    title: 'Support & improve',
    description:
      'After launch, we analyze performance, offer technical assistance, and update your system as your company changes.',
  },
]
