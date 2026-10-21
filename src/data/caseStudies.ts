import amaGradsImage from '../assets/images/case-studies/ama-grads.jpg'
import decoristImage from '../assets/images/case-studies/decorist.jpg'
import mawedImage from '../assets/images/case-studies/mawed.jpg'
import thirdEyeImage from '../assets/images/case-studies/third-eye.jpg'
import type { CaseStudyItem } from '../types'

export const caseStudies: CaseStudyItem[] = [
  {
    id: 'ama-grads',
    title: 'AMA Grads Application',
    description:
      'Ecommerce, mobile application, and website experience built for graduates and institutions.',
    category: 'Ecommerce · Mobile · Web',
    href: '/clients/ama-grads',
    featured: true,
    image: amaGradsImage,
    imageAlt: 'AMA Grads ecommerce web and mobile application on laptop and phone',
  },
  {
    id: 'decorist',
    title: 'Decorist',
    description: 'Brand identity and website delivery for a design-led digital presence.',
    category: 'Branding · Website',
    href: '/clients/decorist',
    image: decoristImage,
    imageAlt: 'Decorist brand website shown on a laptop beside design materials',
  },
  {
    id: 'third-eye',
    title: 'Third Eye',
    description: 'CRM and website platform supporting day-to-day business operations.',
    category: 'CRM · Website',
    href: '/clients/third-eye',
    image: thirdEyeImage,
    imageAlt: 'Third Eye CRM dashboard with pipeline and contacts on a laptop',
  },
  {
    id: 'mawed',
    title: 'Mawed Application',
    description: 'Ecommerce mobile application built for a seamless shopping experience.',
    category: 'Ecommerce · Mobile',
    href: '/clients/mawed',
    image: mawedImage,
    imageAlt: 'Mawed ecommerce shopping app on smartphone and tablet',
  },
]
