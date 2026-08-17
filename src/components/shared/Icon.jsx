/**
 * Thin wrapper around Google's Material Symbols (Outlined) font, loaded via
 * the <link> tag in index.html.
 *
 * Usage: <Icon name="lock" className="text-xl text-sky-500" />
 */
export default function Icon({ name, className = '', filled = false, ...props }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}` }}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  )
}
