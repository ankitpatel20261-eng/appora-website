import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { mainNavigation } from '../../data/navigation'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/utils'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

interface MobileMenuProps {
  id: string
  open: boolean
  onClose: () => void
}

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const reducedMotion = useReducedMotion()
  const location = useLocation()
  const [expandedLabel, setExpandedLabel] = useState<string | null>('Services')

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id={id}
          className="absolute inset-x-0 top-full z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden"
          initial={reducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <Container className="flex max-h-[calc(100dvh-4rem)] flex-col gap-2 overflow-y-auto py-6">
            <nav aria-label="Mobile primary" className="flex flex-col gap-1">
              {mainNavigation.map((item, index) => {
                const hasChildren = Boolean(item.children?.length)
                const isExpanded = expandedLabel === item.label

                return (
                  <motion.div
                    key={item.label}
                    initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reducedMotion ? 0 : 0.04 * index }}
                  >
                    {hasChildren ? (
                      <div>
                        <button
                          type="button"
                          className={cn(
                            'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-lg font-medium transition-colors',
                            isExpanded
                              ? 'bg-[var(--color-bg-soft)] text-[var(--color-text)]'
                              : 'text-[var(--color-muted-strong)] hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-text)]',
                          )}
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setExpandedLabel((current) => (current === item.label ? null : item.label))
                          }
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              isExpanded && 'rotate-180',
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        {isExpanded ? (
                          <div className="mt-1 space-y-1 border-l border-[var(--color-border)] ml-4 pl-3">
                            {item.children?.map((child) => (
                              <NavLink
                                key={child.href}
                                to={child.href}
                                onClick={onClose}
                                className={cn(
                                  'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                                  location.pathname === child.href
                                    ? 'bg-[var(--color-bg-soft)] text-[var(--color-text)]'
                                    : 'text-[var(--color-muted-strong)] hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-text)]',
                                )}
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <NavLink
                        to={item.href}
                        onClick={onClose}
                        className={({ isActive }) =>
                          cn(
                            'block rounded-xl px-4 py-3 text-lg font-medium transition-colors',
                            isActive
                              ? 'bg-[var(--color-bg-soft)] text-[var(--color-text)]'
                              : 'text-[var(--color-muted-strong)] hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-text)]',
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </motion.div>
                )
              })}
            </nav>

            <div className="mt-4 border-t border-[var(--color-border)] pt-6">
              <Button href="/contact" onClick={onClose} className="w-full" showArrow>
                Contact Us
              </Button>
            </div>
          </Container>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
