import { Link } from 'react-router-dom'
import { SITE } from '../../lib/constants.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-outline-variant/10 w-full py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-stack-md">
          <div className="flex flex-col gap-1">
            <span className="text-headline-md font-headline-md font-bold text-on-surface">
              {SITE.name}
            </span>
            <span className="text-body-md font-body-md text-on-surface-variant opacity-80">
              &copy; {year} {SITE.name}. All rights reserved.
            </span>
          </div>
          <nav className="flex flex-wrap gap-stack-md mt-4 md:mt-0">
            <Link to="/" className="text-body-md text-on-surface-variant hover:text-secondary transition-colors">
              Home
            </Link>
            {SITE.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/discuss"
              className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
