import type { ServiceItem } from '../types'
import bms from '../assets/images/services/bms.jpg'
import fapa from '../assets/images/services/fapa.jpg'
import access from '../assets/images/services/access-control.jpg'
import cctv from '../assets/images/services/cctv.jpg'
import audio from '../assets/images/services/audio.jpg'
import video from '../assets/images/services/video.jpg'

export const buildingServices: ServiceItem[] = [
  {
    id: 'bms', number: '01', title: 'BMS – Building Management System',
    description: 'Bring building operations together with configured controls, reliable monitoring, and ongoing support for connected facilities.',
    href: '/contact', image: { src: bms, alt: 'Technician inspecting an industrial control panel' },
    highlights: ['BMS system installation & configuration', 'BMS monitoring and maintenance', 'BMS system updates & troubleshooting'],
  },
  {
    id: 'fapa', number: '02', title: 'FAPA – Fire Alarm & Public Address System',
    description: 'Keep fire detection and building announcements working together through installation, routine testing, and dependable maintenance.',
    href: '/contact', image: { src: fapa, alt: 'Red fire alarm device mounted on a wall' },
    highlights: ['Fire alarm system installation & maintenance', 'Public address (PA) system updates', 'Fire safety system monitoring & testing'],
  },
  {
    id: 'door-access-control', number: '03', title: 'Door Access Control System',
    description: 'Manage entry to your premises with electronic access systems configured around your people, spaces, and operational requirements.',
    href: '/contact', image: { src: access, alt: 'Person using a key card to unlock an electronic door lock' },
    highlights: ['Access control system installation & configuration', 'Door access system updates', 'Access control monitoring & maintenance'],
  },
  {
    id: 'cctv', number: '04', title: 'CCTV Camera & Surveillance',
    description: 'Improve visibility across your premises with professionally installed cameras, configured recording systems, and responsive technical support.',
    href: '/contact', image: { src: cctv, alt: 'Professional surveillance camera mounted on an exterior wall' },
    highlights: ['CCTV camera installation & configuration', 'Camera system updates & maintenance', 'Video surveillance monitoring & troubleshooting'],
  },
  {
    id: 'audio-systems', number: '05', title: 'Audio System',
    description: 'Deliver clear announcements and balanced sound for workplaces, commercial venues, and shared spaces with integrated audio systems.',
    href: '/contact', image: { src: audio, alt: 'Sound engineer adjusting a professional audio mixing console' },
    highlights: ['Public address & background music systems', 'Microphones and amplifiers', 'Audio distribution systems', 'Audio system installation, integration & configuration'],
  },
  {
    id: 'video-systems', number: '06', title: 'Video System',
    description: 'Connect teams and present content clearly with visual systems tailored to meeting rooms, presentation spaces, and commercial environments.',
    href: '/contact', image: { src: video, alt: 'Modern conference room equipped with professional presentation displays' },
    highlights: ['Video conferencing systems', 'Professional displays & projectors', 'Video walls', 'Multimedia integration'],
  },
]

export const technicalSupport = [
  'System Installation & Configuration',
  'Software Updates & System Upgrades',
  'Testing, Commissioning & Troubleshooting',
  'Preventive Maintenance & Technical Support',
  'System Integration & Performance Optimization',
]
