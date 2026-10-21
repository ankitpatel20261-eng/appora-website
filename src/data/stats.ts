import type { AwardItem, PartnerItem, ReviewBadge, StatItem } from '../types'

export const metrics: StatItem[] = [
  {
    id: 'experience',
    value: 'Years',
    label: 'Years of experience',
    description: 'Delivering AI, software, and automation that work in the real world.',
  },
  {
    id: 'stories',
    value: 'Success',
    label: 'Success stories',
    description: 'Projects shipped across AI, software, web, mobile, cloud, and robotics.',
  },
  {
    id: 'companies',
    value: '150+',
    label: 'Companies trust us',
    description: 'Clients worldwide who rely on Appora for intelligent, scalable technology.',
  },
]

export const awards: AwardItem[] = [
  {
    id: 'clutch',
    name: 'Clutch',
    title: 'Trusted Delivery Partner',
    href: 'https://clutch.co/',
  },
  {
    id: 'upwork',
    name: 'Upwork',
    title: 'Technology Partner',
    href: 'https://www.upwork.com/',
  },
  {
    id: 'designrush',
    name: 'DesignRush',
    title: 'Featured Agency',
    href: 'https://www.designrush.com/',
  },
  {
    id: 'google',
    name: 'Google',
    title: 'Client Reviews',
    href: 'https://www.google.com/',
  },
  {
    id: 'results',
    name: 'Appora',
    title: 'Results Guaranteed',
    href: '/company',
  },
]

export const partners: PartnerItem[] = [
  { id: 'ama', name: 'AMA Grads' },
  { id: 'decorist', name: 'Decorist' },
  { id: 'third-eye', name: 'Third Eye' },
  { id: 'mawed', name: 'Mawed' },
  { id: 'partner-5', name: 'Nova Soft' },
  { id: 'partner-6', name: 'Bright Path' },
  { id: 'partner-7', name: 'Core Link' },
  { id: 'partner-8', name: 'Pulse Digital' },
]

export const reviewBadges: ReviewBadge[] = [
  {
    id: 'clutch',
    platform: 'Clutch',
    score: '5.0',
    reviewCount: 'Client Reviews',
    href: 'https://clutch.co/',
  },
  {
    id: 'google',
    platform: 'Google',
    score: '5.0',
    reviewCount: 'Google Reviews',
    href: 'https://www.google.com/',
  },
]
