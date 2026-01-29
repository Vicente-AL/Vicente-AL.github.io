import { useState, useEffect, useRef } from 'react'

const LERP = 0.08
const PARALLAX_STRENGTH = 1

function lerp(a, b, t) {
  return a + (b - a) * t
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    function handleMove(e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      target.current = { x: x * PARALLAX_STRENGTH, y: y * PARALLAX_STRENGTH }
    }

    const THRESHOLD = 0.002
    function update() {
      const prevX = current.current.x
      const prevY = current.current.y
      current.current.x = lerp(prevX, target.current.x, LERP)
      current.current.y = lerp(prevY, target.current.y, LERP)
      if (
        Math.abs(current.current.x - prevX) > THRESHOLD ||
        Math.abs(current.current.y - prevY) > THRESHOLD
      ) {
        setPosition({ x: current.current.x, y: current.current.y })
      }
      rafId.current = requestAnimationFrame(update)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    rafId.current = requestAnimationFrame(update)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return position
}
