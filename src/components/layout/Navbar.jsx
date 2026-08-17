import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../shared/Icon.jsx'
import useActiveSection from '../../hooks/useActiveSection.js'
import { SITE } from '../../lib/constants.js'

const SECTION_IDS = SITE.nav.map((link) => link.id)

export default function Navbar() {
  const activeId = useActiveSection(SECTION_IDS)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)
  // While hovering a link, show only that link as highlighted instead of
  // layering it on top of the scrollspy active link — hovering away
  // reveals the true active section again.
  const highlightedId = hoveredId ?? activeId

  const clearHover = (id) => setHoveredId((current) => (current === id ? null : current))

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 shadow-sm backdrop-blur-xl transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link
          to="/"
          className="text-headline-lg-mobile font-headline-lg-mobile font-bold tracking-tight text-primary md:text-headline-lg md:font-headline-lg"
        >
          {SITE.name}
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {SITE.nav.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => clearHover(link.id)}
              className={
                highlightedId === link.id
                  ? 'border-b-2 border-secondary pb-1 text-body-md font-body-md font-bold text-on-surface transition-colors'
                  : 'border-b-2 border-transparent pb-1 text-body-md font-body-md text-on-surface-variant transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/discuss"
            className="rounded-lg bg-secondary px-6 py-2 font-body-md text-on-secondary shadow-sm transition-colors hover:opacity-80"
          >
            Let's Discuss
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-primary md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} className="text-2xl" filled />
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-outline-variant/30 bg-background px-margin-mobile pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {SITE.nav.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => clearHover(link.id)}
                className={
                  highlightedId === link.id
                    ? 'rounded-md border-l-2 border-secondary bg-surface-container px-3 py-2 text-body-md font-body-md font-bold text-on-surface transition-colors'
                    : 'rounded-md border-l-2 border-transparent px-3 py-2 text-body-md font-body-md text-on-surface-variant transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/discuss"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-3 font-body-md text-on-secondary hover:opacity-80"
            >
              Let's Discuss
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
