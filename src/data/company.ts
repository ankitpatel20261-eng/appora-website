export interface OfferingItem {
  id: string
  title: string
  description: string
}

export interface ValueItem {
  id: string
  title: string
  description: string
}

export const companyAbout = {
  eyebrow: 'About us',
  title: 'Technology that helps your company move forward',
  description:
    'Appora Technologies is an IT services and technology company that assists businesses in overcoming challenges with clever, dependable, and scalable technological solutions. We merge technical knowledge with a thorough grasp of business requirements to deliver solutions that are practical, safe, and built for long-term success.',
  positioning:
    'We combine expertise in Artificial Intelligence, Machine Learning, Generative AI, Robotics, Computer Vision, Intelligent Automation, Data Engineering, Cloud Computing, Internet of Things, and Software Engineering to develop technology that can learn, adapt, predict, and improve — beyond just performing tasks.',
  principle: 'We do not start with technology. Let\'s begin with the question.',
}

export const whatWeDoIntro = {
  eyebrow: 'What we do',
  title: 'Real result-focused technology solutions',
  description:
    'We help businesses utilize technology to increase productivity, improve operations, and grow confidently. Our services include software development, cloud services, digital transformation, and continuing IT support.',
}

export const offerings: OfferingItem[] = [
  {
    id: 'strategy',
    title: 'Strategy & consulting',
    description:
      'Turn technical issues into a tangible plan. We establish a plan that supports your business objectives, identify suitable technology, and choose priorities.',
  },
  {
    id: 'software',
    title: 'Software solutions',
    description:
      'Develop dependable, flexible software tailored to your demands — from customized apps to large solutions that solve real commercial concerns.',
  },
  {
    id: 'digital-transformation',
    title: 'Digital transformation',
    description:
      'Modernize your company with the right digital methods and tools. Improve customer interactions, optimize workflows, and stay competitive in a digital-centric environment.',
  },
  {
    id: 'infrastructure-cloud',
    title: 'Infrastructure & cloud',
    description:
      'Build a scalable, adaptable technology framework using cloud and modern IT solutions tailored to your company.',
  },
  {
    id: 'it-support',
    title: 'IT maintenance & support',
    description:
      'Keep systems running effectively with monitoring, maintenance, continuing upgrades, and ongoing improvements.',
  },
  {
    id: 'optimization',
    title: 'Optimization & growth',
    description:
      'Increase the productivity of your technology. We regularly assess, improve, and elevate your systems to encourage long-term expansion.',
  },
]

export const companyValues: ValueItem[] = [
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'Open communication, transparency, and trust-based connections.',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Always searching for novel technology and more efficient ways to solve business issues.',
  },
  {
    id: 'quality',
    title: 'Quality',
    description: 'Secure, dependable, scalable, and high-quality technological solutions.',
  },
  {
    id: 'customer-focus',
    title: 'Customer focus',
    description: 'We listen, understand needs, and create solutions based on your objectives.',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We work closely with customers and teams to develop better solutions.',
  },
  {
    id: 'results',
    title: 'Results',
    description: 'We prioritize measurable business outcomes over technology for its own sake.',
  },
  {
    id: 'transparent-process',
    title: 'Transparent process',
    description: 'Clear communication, established goals, and frequent updates throughout the project.',
  },
  {
    id: 'reliable-delivery',
    title: 'Reliable delivery',
    description: 'Quality, performance, timeliness, and dependable execution.',
  },
  {
    id: 'long-term-support',
    title: 'Long-term support',
    description: 'After implementation, we support, upgrade, and scale your technology.',
  },
]
