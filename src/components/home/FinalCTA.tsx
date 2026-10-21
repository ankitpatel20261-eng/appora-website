import { AnimatedElement } from '../common/AnimatedElement'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Section } from '../common/Section'

export function FinalCTA() {
  return (
    <Section className="border-t border-[var(--color-border)] pb-20 md:pb-24 lg:pb-28">
      <Container>
        <AnimatedElement>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16 lg:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,188,232,0.16),transparent_65%)]"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
                  Let&apos;s create the future together
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:mt-5 md:text-lg">
                  Bring us the commercial challenge. We&apos;ll help you shape AI, software,
                  automation, and cloud solutions that learn, adapt, and deliver measurable results.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
                <Button href="mailto:info@appora.net" variant="secondary">
                  Write to us
                </Button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </Container>
    </Section>
  )
}
