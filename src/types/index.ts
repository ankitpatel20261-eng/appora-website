import type { ReactNode } from 'react'

export interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
  menuType?: 'dropdown' | 'mega'
  children?: NavItem[]
}

export interface PartnerItem {
  id: string
  name: string
}

export interface ReviewBadge {
  id: string
  platform: string
  score: string
  reviewCount: string
  href: string
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  href: string
}

export interface IndustryItem {
  id: string
  title: string
  description: string
  href: string
  featured?: boolean
}

export interface CaseStudyItem {
  id: string
  title: string
  description: string
  category: string
  href: string
  featured?: boolean
  image: string
  imageAlt: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export interface StatItem {
  id: string
  value: string
  label: string
  description?: string
}

export interface AwardItem {
  id: string
  name: string
  title: string
  href: string
}

export interface TechnologyItem {
  id: string
  name: string
  category: 'design' | 'frontend' | 'backend' | 'data' | 'cloud' | 'ai'
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}

export interface InsightItem {
  id: string
  category: string
  title: string
  description: string
  date: string
  readingTime: string
  href: string
}

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  showArrow?: boolean
}

export interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}
