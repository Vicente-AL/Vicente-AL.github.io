import { useMouse } from '../contexts/MouseContext'
import { useState, useEffect, useRef } from 'react'

function MouseSpotlight() {
  const { x, y } = useMouse()
  const [position, setPosition] = useState(() => ({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  }))
  const rafRef = useRef(null)
  const current = useRef({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  })
  const mouseRef = useRef({ x, y })
  mouseRef.current = { x, y }

  useEffect(() => {
    function update() {
      const { x: mx, y: my } = mouseRef.current
      const targetX = mx * window.innerWidth * 0.5 + window.innerWidth / 2
      const targetY = my * window.innerHeight * 0.5 + window.innerHeight / 2
      const lerp = 0.12
      current.current.x += (targetX - current.current.x) * lerp
      current.current.y += (targetY - current.current.y) * lerp
      setPosition({ x: current.current.x, y: current.current.y })
      rafRef.current = requestAnimationFrame(update)
    }
    rafRef.current = requestAnimationFrame(update)
    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div
      className="mouse-spotlight"
      aria-hidden="true"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

export default MouseSpotlight
