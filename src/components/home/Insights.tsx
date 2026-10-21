import { Link } from 'react-router-dom'
import { insights } from '../../data/insights'
import { AnimatedElement } from '../common/AnimatedElement'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { SectionHeading } from '../common/SectionHeading'
import { InsightCard } from './InsightCard'

export function Insights() {
  return (
    <Section className="border-t border-[var(--color-border)]" ariaLabelledBy="insights-heading">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="insights-heading"
            eyebrow="Insights"
            title="Notes on building digital products that last"
            className="mb-0"
          />
          <Link
            to="/insights"
            className="shrink-0 text-sm font-medium text-[var(--color-muted-strong)] transition-colors hover:text-[var(--color-text)]"
          >
            View all insights
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {insights.map((insight, index) => (
            <AnimatedElement
              key={insight.id}
              delay={index * 0.08}
              className={index === 2 ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
              <InsightCard insight={insight} />
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </Section>
  )
}
