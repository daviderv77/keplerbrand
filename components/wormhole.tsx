"use client"

export function Wormhole() {
  const planets = [
    { orbit: 800, size: 16, speed: 25, delay: 0, color: "bg-white" },
    { orbit: 700, size: 12, speed: 30, delay: 2, color: "bg-white/80" },
    { orbit: 600, size: 20, speed: 35, delay: 5, color: "bg-white/90" },
    { orbit: 500, size: 14, speed: 28, delay: 8, color: "bg-white/70" },
    { orbit: 400, size: 10, speed: 32, delay: 3, color: "bg-white/60" },
    { orbit: 300, size: 18, speed: 26, delay: 6, color: "bg-white" },
  ]

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Wormhole rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer rings */}
        <div className="absolute w-[800px] h-[800px] rounded-full border border-white/20 animate-rotate" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-white/30 animate-rotate-reverse" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/20 animate-rotate" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-white/40 animate-rotate-reverse" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/30 animate-rotate" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-white/50 animate-rotate-reverse" />

        {planets.map((planet, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              width: `${planet.orbit}px`,
              height: `${planet.orbit}px`,
              animation: `rotate ${planet.speed}s linear infinite`,
              animationDelay: `${planet.delay}s`,
            }}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full ${planet.color} shadow-lg shadow-white/30`}
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
              }}
            />
          </div>
        ))}

        {/* Inner core glow */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-white/5 animate-pulse-slow" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-white/10 animate-pulse-slow" />
        <div className="absolute w-[100px] h-[100px] rounded-full bg-white/20 animate-pulse-slow" />
      </div>

      {/* Center text */}
      <div className="relative z-10 text-center animate-float">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-balance">keplerbrand</h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 font-light tracking-wide">Marketing Digital Minimalista</p>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
    </div>
  )
}
