import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Section } from '../components/common/Section'

interface PlaceholderPageProps {
  title: string
  description: string
  eyebrow: string
}

export function PlaceholderPage({ title, description, eyebrow }: PlaceholderPageProps) {
  return (
    <Section className="min-h-[60vh]">
      <Container>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-semibold text-[var(--color-text)] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Talk to us</Button>
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] px-6 text-sm font-medium text-[var(--color-muted-strong)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </Section>
  )
}
