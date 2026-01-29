import { useRef, useEffect } from 'react'

const COLORS = [
  'rgba(0, 212, 255, ',   // cyan
  'rgba(0, 102, 255, ',   // blue
  'rgba(156, 229, 244, ', // soft cyan
  'rgba(99, 102, 241, ',  // purple
]
const PARTICLE_COUNT = 10
const MAX_PARTICLES = 280
const THROTTLE_MS = 45
const SPREAD_SPEED_MIN = 1.2
const SPREAD_SPEED_MAX = 3.5
const PARTICLE_LIFE = 50
const SIZE_MIN = 1
const SIZE_MAX = 3

function CursorParticles() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const lastSpawnRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    function spawnParticles(x, y) {
      const now = Date.now()
      if (now - lastSpawnRef.current < THROTTLE_MS) return
      lastSpawnRef.current = now

      const current = particlesRef.current
      if (current.length >= MAX_PARTICLES) return

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const angle = (Math.PI * 2 * i) / PARTICLE_COUNT + Math.random() * 0.8
        const speed = SPREAD_SPEED_MIN + Math.random() * (SPREAD_SPEED_MAX - SPREAD_SPEED_MIN)
        const vx = Math.cos(angle) * speed
        const vy = Math.sin(angle) * speed
        current.push({
          x,
          y,
          vx,
          vy,
          life: PARTICLE_LIFE,
          maxLife: PARTICLE_LIFE,
          size: SIZE_MIN + Math.random() * (SIZE_MAX - SIZE_MIN),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }

    function handleMove(e) {
      spawnParticles(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })

    function tick() {
      ctx.clearRect(0, 0, width, height)
      const particles = particlesRef.current

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98
        p.vy += 0.015 // slight gravity for firework curve
        p.life--

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        const t = 1 - p.life / p.maxLife
        const alpha = 1 - t
        const size = p.size * (1 - t * 0.7)
        // Glow (larger, softer)
        ctx.beginPath()
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2)
        ctx.fillStyle = p.color + (alpha * 0.2).toFixed(2) + ')'
        ctx.fill()
        // Core particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + alpha.toFixed(2) + ')'
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="cursor-particles"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  )
}

export default CursorParticles
