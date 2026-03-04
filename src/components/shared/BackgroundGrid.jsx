export default function BackgroundGrid({ size = 40, opacity = 0.04 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,${opacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}
