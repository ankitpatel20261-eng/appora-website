import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, ArrowRight } from 'lucide-react'
import { getDetail } from '../data/details'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'

export function DetailPage({ section }: { section: string }) {
  const { slug = '' } = useParams()
  const detail = getDetail(section, slug)
  const pageTitle = detail ? `${detail.title} | Appora Technologies` : 'Page not found | Appora Technologies'
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const previousTitle = document.title
    document.title = pageTitle
    return () => { document.title = previousTitle }
  }, [section, slug, pageTitle])
  if (!detail) return <Container className="py-24"><h1 className="font-display text-4xl font-semibold">Page not found</h1><p className="mt-4 text-[var(--color-muted)]">This topic is not available. Explore our services or return to the homepage.</p><Link to="/" className="mt-6 inline-block text-blue-600 underline">Back to homepage</Link></Container>
  const parent = section === 'recognition' || section === 'technologies' ? '/' : `/${section}`
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-gradient-to-br from-blue-50 via-white to-sky-50 py-12 md:py-20">
        <Container>
          <Link to={parent} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-blue-600"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{parent === '/' ? 'Back to home' : `All ${section}`}</Link>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{detail.category}</p>
          <h1 className="max-w-4xl font-display text-balance text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text)] md:text-5xl lg:text-6xl">{detail.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">{detail.summary}</p>
        </Container>
      </section>
      <Container className="grid items-start gap-10 py-12 md:py-16 lg:grid-cols-[1fr_300px] lg:gap-16">
        <article className="min-w-0">
          {detail.image && <img src={detail.image} alt={detail.imageAlt ?? detail.title} className="mb-10 aspect-[16/10] w-full rounded-3xl object-cover" width={1280} height={800} />}
          <div className="space-y-10">
            {detail.sections.map((block, index) => <section key={block.title} id={`section-${index + 1}`} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-[var(--color-text)] md:text-3xl">{block.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{block.body}</p>
              {block.points && <ul className="mt-5 space-y-3">{block.points.map((point) => <li key={point} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm leading-6 text-[var(--color-muted-strong)]"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />{point}</li>)}</ul>}
            </section>)}
          </div>
          {detail.external && <a href={detail.external} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">Visit {detail.title}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
        </article>
        <aside className="space-y-5 lg:sticky lg:top-28">
          <nav aria-label="On this page" className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">On this page</h2>
            <ul className="mt-4 space-y-3">{detail.sections.map((block, index) => <li key={block.title}><a href={`#section-${index + 1}`} className="text-sm leading-6 text-[var(--color-muted-strong)] hover:text-blue-600">{block.title}</a></li>)}</ul>
          </nav>
          <div className="rounded-2xl bg-gradient-to-br from-[#09294e] to-[#086cc6] p-6 text-white"><h2 className="font-display text-2xl font-semibold">Let's build around your business.</h2><p className="mt-3 text-sm leading-7 text-blue-100">Share your goals, current systems, and biggest challenge. We can help define a practical next step.</p><div className="mt-5"><Button href="/contact">Talk to our team</Button></div></div>
          {detail.related && <div className="rounded-2xl border border-[var(--color-border)] p-6"><h2 className="text-sm font-semibold">Related topics</h2><ul className="mt-4 space-y-4">{detail.related.map((item) => <li key={item.href}><Link to={item.href} className="flex items-center justify-between gap-3 text-sm text-blue-700 hover:underline">{item.label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link></li>)}</ul></div>}
        </aside>
      </Container>
    </>
  )
}