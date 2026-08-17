import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in view, for scrollspy-style nav
 * highlighting. Pass the list of section ids to observe.
 */
export default function useActiveSection(sectionIds = [], { rootMargin = '-40% 0px -55% 0px' } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    if (sectionIds.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin },
    )

    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [sectionIds, rootMargin])

  return activeId
}
