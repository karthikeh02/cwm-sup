export default function SectionHeading({ badge, title, description, center = true }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <span className="inline-block mb-4 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyber-purple shadow-[0_0_10px_rgba(189,82,235,0.3)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
