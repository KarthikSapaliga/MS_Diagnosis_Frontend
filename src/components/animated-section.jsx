"use client"

import { useEffect, useRef, useState } from "react"

// eslint-disable-next-line no-unused-vars
export default function AnimatedSection({ as: Tag = "section", className = "", children, threshold = 0.16 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Tag ref={ref} className={`${className} ${visible ? "animate-fade-in-up" : "opacity-0 translate-y-3"}`}>
      {children}
    </Tag>
  )
}
