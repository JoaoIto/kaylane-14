"use client"

export function StarTransition() {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${(i * 100) / 15}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
                fill="white"
                opacity="0.8"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-transparent" />
    </div>
  )
}
