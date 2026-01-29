import { useMouse } from '../contexts/MouseContext'

const ORB_STRENGTH = 24

function BackgroundEffects() {
  const { x, y } = useMouse()

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div
        className="glow-orb glow-orb--1"
        aria-hidden="true"
        style={{
          transform: `translate(${x * ORB_STRENGTH}px, ${y * ORB_STRENGTH}px)`,
        }}
      >
        <div className="glow-orb__inner glow-orb__inner--1" />
      </div>
      <div
        className="glow-orb glow-orb--2"
        aria-hidden="true"
        style={{
          transform: `translate(${-x * ORB_STRENGTH * 0.8}px, ${-y * ORB_STRENGTH * 0.8}px)`,
        }}
      >
        <div className="glow-orb__inner glow-orb__inner--2" />
      </div>
      <div
        className="glow-orb glow-orb--3"
        aria-hidden="true"
        style={{
          transform: `translate(${x * ORB_STRENGTH * 0.6}px, ${-y * ORB_STRENGTH * 0.6}px)`,
        }}
      >
        <div className="glow-orb__inner glow-orb__inner--3" />
      </div>
    </>
  )
}

export default BackgroundEffects
