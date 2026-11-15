import type { NavItem } from '../types'
import { services } from './services'
import { buildingServices } from './buildingServices'

export const companyNavLinks: NavItem[] = [
  { label: 'About Us', href: '/company' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export const servicesMenuGroups: { label: string; href: string; links: NavItem[] }[] = [
  {
    label: 'IT Services',
    href: '/services#it-services',
    links: services.map((service) => ({ label: service.title, href: service.href })),
  },
  {
    label: 'ELV Services',
    href: '/services#building-systems',
    links: buildingServices.map((service) => ({
      label: service.title,
      href: `/services#${service.id}`,
    })),
  },
]

export const servicesNavLinks: NavItem[] = servicesMenuGroups.flatMap((group) => [
  { label: group.label, href: group.href },
  ...group.links,
])

export const servicesMegaMenu = {
  title: 'Services',
  description: 'Technology-driven solutions, built around your commercial challenges:',
  highlights: [
    'Building management, fire safety & access control',
    'CCTV surveillance, audio & video systems',
    'Strategy & consulting',
    'AI, robotics & intelligent automation',
    'Software, cloud & long-term support',
  ],
  watermark: 'intelligence in engineering automating opportunities',
  linksLabel: 'What we do',
  links: servicesNavLinks,
  groups: servicesMenuGroups,
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    menuType: 'mega',
    children: servicesNavLinks,
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Our Clients', href: '/clients' },
  {
    label: 'Company',
    href: '/company',
    hasDropdown: true,
    menuType: 'dropdown',
    children: companyNavLinks,
  },
  { label: 'Insights', href: '/insights' },
]

export const footerServices: NavItem[] = [
  { label: 'IT Services', href: '/services#it-services' },
  { label: 'ELV Services', href: '/services#building-systems' },
]

export const footerCompany: NavItem[] = [
  { label: 'About Us', href: '/company' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'Industries', href: '/industries' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export const footerResources: NavItem[] = [
  { label: 'Insights', href: '/insights' },
  { label: 'Case Studies', href: '/clients' },
  { label: 'Privacy Policy', href: '/company' },
  { label: 'Terms of Service', href: '/company' },
]

export const socialLinks: NavItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
]
