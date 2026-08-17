import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element (adds `isVisible = true`) once it scrolls into view.
 * Usage: const [ref, isVisible] = useReveal()
 */
export default function useReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isVisible]
}
