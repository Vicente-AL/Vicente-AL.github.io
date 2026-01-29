import { useState, useRef, useCallback } from 'react'

const MAX_TILT = 8
const PERSPECTIVE = 1000

export function useMouseTilt() {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    setTransform({
      rotateX: -y * MAX_TILT,
      rotateY: x * MAX_TILT,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 })
  }, [])

  const style = {
    transform: `perspective(${PERSPECTIVE}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
    transition: 'transform 0.1s ease-out',
  }

  return { ref, style, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}
