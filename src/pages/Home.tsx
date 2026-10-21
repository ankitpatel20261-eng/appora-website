import { Hero } from '../components/home/Hero'
import { AiNetwork } from '../components/home/AiNetwork'
import { TrustedPartners } from '../components/home/TrustedPartners'
import { Services } from '../components/home/Services'
import { Industries } from '../components/home/Industries'
import { CaseStudies } from '../components/home/CaseStudies'
import { Testimonials } from '../components/home/Testimonials'
import { Metrics } from '../components/home/Metrics'
import { Awards } from '../components/home/Awards'
import { TechStack } from '../components/home/TechStack'
import { Process } from '../components/home/Process'
import { Insights } from '../components/home/Insights'
import { FinalCTA } from '../components/home/FinalCTA'

export function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <Services />
      <AiNetwork />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <Metrics />
      <Awards />
      <TechStack />
      <Process />
      <Insights />
      <FinalCTA />
    </>
  )
}
