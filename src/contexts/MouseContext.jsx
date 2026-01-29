import { createContext, useContext } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'

const MouseContext = createContext({ x: 0, y: 0 })

export function MouseProvider({ children }) {
  const mouse = useMousePosition()
  return (
    <MouseContext.Provider value={mouse}>
      {children}
    </MouseContext.Provider>
  )
}

export function useMouse() {
  return useContext(MouseContext)
}
