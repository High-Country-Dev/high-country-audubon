// Silhouettes of birds drifting across a hero image. Pure CSS animation.

function BirdShape({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 40 20" fill="currentColor" aria-hidden>
      <path className="wing" d="M20 12 C15 4, 8 2, 0 6 C8 6, 14 9, 20 14 C26 9, 32 6, 40 6 C32 2, 25 4, 20 12 Z" />
    </svg>
  );
}

const FLOCK = [
  { y0: "18vh", y1: "8vh", s: 1, dur: "26s", delay: "0s", flap: "0.65s", size: 38 },
  { y0: "22vh", y1: "12vh", s: 0.7, dur: "26s", delay: "0.6s", flap: "0.55s", size: 38 },
  { y0: "15vh", y1: "6vh", s: 0.55, dur: "26s", delay: "1.1s", flap: "0.6s", size: 38 },
  { y0: "34vh", y1: "20vh", s: 0.45, dur: "34s", delay: "7s", flap: "0.5s", size: 38 },
  { y0: "38vh", y1: "25vh", s: 0.35, dur: "34s", delay: "7.7s", flap: "0.45s", size: 38 },
  { y0: "10vh", y1: "16vh", s: 0.8, dur: "30s", delay: "15s", flap: "0.75s", size: 38 },
];

export function FlyingBirds({ className = "text-white/80" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {FLOCK.map((b, i) => (
        <div
          key={i}
          className="bird"
          style={
            {
              "--y0": b.y0,
              "--y1": b.y1,
              "--s": b.s,
              "--dur": b.dur,
              "--delay": b.delay,
              "--flap": b.flap,
            } as React.CSSProperties
          }
        >
          <BirdShape size={b.size} />
        </div>
      ))}
    </div>
  );
}

/** A kettle of hawks circling on a thermal. */
export function Kettle({ count = 9 }: { count?: number }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]" aria-hidden>
      
      {Array.from({ length: count }).map((_, i) => {
        const r = 40 + ((i * 37) % 110);
        const dur = 9 + ((i * 5) % 7);
        return (
          <div
            key={i}
            className="kettle-bird text-forest"
            style={
              {
                "--r": `${r}px`,
                "--dur": `${dur}s`,
                "--delay": `-${(i * 1.7) % dur}s`,
              } as React.CSSProperties
            }
          >
            <svg width={36 - (i % 3) * 7} height="17" viewBox="0 0 40 20" fill="currentColor" className="-translate-1/2">
              <path d="M20 11 C14 7, 7 6, 0 9 C7 8, 14 10, 20 14 C26 10, 33 8, 40 9 C33 6, 26 7, 20 11 Z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
