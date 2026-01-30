import { useState, useEffect } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [useCustomCursor, setUseCustomCursor] = useState(false);

  useEffect(() => {
    setUseCustomCursor(
      typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
    );
  }, []);

  useEffect(() => {
    if (!useCustomCursor) return;
    function move(e) {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    }
    function leave() {
      setVisible(false);
    }
    function enter() {
      setVisible(true);
    }
    window.addEventListener("mousemove", move, { passive: true });
    document.body.addEventListener("mouseleave", leave);
    document.body.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseleave", leave);
      document.body.removeEventListener("mouseenter", enter);
    };
  }, [visible, useCustomCursor]);

  if (!useCustomCursor || !visible) return null;

  return (
    <div
      className="custom-cursor"
      aria-hidden="true"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        className="custom-cursor__ring"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="cursorGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <circle
          cx="14"
          cy="14"
          r="6"
          fill="none"
          stroke="url(#cursorGrad)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default CustomCursor;
