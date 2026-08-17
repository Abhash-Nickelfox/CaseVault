import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-container-padding py-stack-lg text-center">
      <p className="font-mono-data text-mono-data font-semibold text-secondary">404</p>
      <h1 className="mt-4 font-display-lg text-display-lg text-on-surface">Page not found</h1>
      <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="mt-8 rounded bg-secondary px-stack-md py-stack-sm font-label-sm text-label-sm text-on-secondary shadow-sm transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  )
}
