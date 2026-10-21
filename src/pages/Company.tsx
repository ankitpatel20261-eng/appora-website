import { companyAbout, companyValues, offerings, whatWeDoIntro } from '../data/company'
import { AnimatedElement } from '../components/common/AnimatedElement'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Section } from '../components/common/Section'
import { SectionHeading } from '../components/common/SectionHeading'

export function Company() {
  return (
    <>
      <Section className="pb-10 md:pb-12">
        <Container>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {companyAbout.eyebrow}
          </p>
          <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
            {companyAbout.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {companyAbout.description}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {companyAbout.positioning}
          </p>
          <p className="mt-6 max-w-2xl font-display text-xl font-semibold text-[var(--color-text)] md:text-2xl">
            {companyAbout.principle}
          </p>
          <div className="mt-8">
            <Button href="/contact">Talk to us</Button>
          </div>
        </Container>
      </Section>

      <Section
        className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
        ariaLabelledBy="what-we-do-heading"
      >
        <Container>
          <SectionHeading
            id="what-we-do-heading"
            eyebrow={whatWeDoIntro.eyebrow}
            title={whatWeDoIntro.title}
            description={whatWeDoIntro.description}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {offerings.map((item, index) => (
              <AnimatedElement key={item.id} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 md:p-7">
                  <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                    {item.description}
                  </p>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-border)]" ariaLabelledBy="values-heading">
        <Container>
          <SectionHeading
            id="values-heading"
            eyebrow="Our values"
            title="How we work with every client"
            description="Integrity, innovation, quality, and measurable results — with transparent process, reliable delivery, and long-term support."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value, index) => (
              <AnimatedElement key={value.id} delay={index * 0.04}>
                <article className="h-full border-t border-[var(--color-border)] pt-5">
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {value.description}
                  </p>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
