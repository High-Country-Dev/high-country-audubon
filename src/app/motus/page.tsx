import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { motus } from "@/content";

export const metadata: Metadata = { title: "Motus Tower" };

// Stylised eastern North America: migration paths sweeping from the north
// through the tower in Ashe County and on toward the Gulf and the tropics.
const PATHS = [
  { d: "M120 40 C 210 120, 300 170, 300 248 S 330 400, 250 470", len: 560, delay: 0 },
  { d: "M260 30 C 300 110, 345 170, 300 248 S 400 380, 420 470", len: 470, delay: 500 },
  { d: "M40 120 C 170 170, 290 210, 300 248 S 300 360, 140 450", len: 540, delay: 1000 },
];

export default function Motus() {
  return (
    <>
      <PageHero image="/img/wood-thrush.webp" kicker="The HCAS Motus Tower" title="A tower in Ashe County, listening to the sky.">
        {motus.intro}
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 md:grid-cols-2">
        <Reveal>
          <svg viewBox="0 0 460 500" className="w-full" role="img" aria-label="Illustration of migration routes passing the HCAS Motus tower">
            <defs>
              <linearGradient id="trail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#548235" />
                <stop offset="1" stopColor="#c4602b" />
              </linearGradient>
            </defs>
            <rect width="460" height="500" rx="32" fill="#f7f2e8" />
            {/* ridgelines */}
            {[300, 320, 340].map((y, i) => (
              <path
                key={y}
                d={`M0 ${y} Q 80 ${y - 40 + i * 6} 160 ${y - 10} T 320 ${y - 20} T 460 ${y - 30}`}
                fill="none"
                stroke="#a9bf8e"
                strokeOpacity={0.5 - i * 0.12}
                strokeWidth="2"
              />
            ))}
            {PATHS.map((p, i) => (
              <path
                key={i}
                d={p.d}
                fill="none"
                stroke="url(#trail)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="2 0"
                className="draw-path"
                style={{ "--len": p.len, "--delay": `${p.delay}ms` } as React.CSSProperties}
              />
            ))}
            <circle cx="300" cy="248" r="10" fill="#c4602b" className="ping" />
            <circle cx="300" cy="248" r="7" fill="#c4602b" />
            <text x="318" y="244" fontSize="15" fontWeight="600" fill="#1d3a2a">
              HCAS tower
            </text>
            <text x="318" y="262" fontSize="12" fill="#5d655f">
              Ashe County, NC
            </text>
            <text x="24" y="36" fontSize="12" fill="#5d655f">
              breeding grounds ↓
            </text>
            <text x="300" y="486" fontSize="12" fill="#5d655f">
              wintering grounds ↓
            </text>
          </svg>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Online since {motus.online}</p>
          <h2 className="font-display mt-3 text-4xl leading-tight">Birds our tower has heard</h2>
          <ol className="mt-8 space-y-0">
            {motus.detections.map((d, i) => (
              <li key={i} className="relative flex gap-5 pb-7 last:pb-0">
                <span className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-4 border-cream bg-ember ring-2 ring-ember/30" />
                {i < motus.detections.length - 1 && <span className="absolute top-5 left-[7px] h-full w-0.5 bg-ember/20" />}
                <div>
                  <p className="font-display text-2xl">{d.bird}</p>
                  <p className="text-sm text-stone">{d.date}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 leading-relaxed text-stone">{motus.why}</p>
        </Reveal>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.2fr]">
          <Reveal className="relative aspect-square overflow-hidden rounded-[2rem] shadow-xl">
            <Image src="/img/bobolink.webp" alt="A male Bobolink — the first bird our tower detected" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-4xl leading-tight">How a 0.2-gram tag tells a story</h2>
            <p className="mt-4 leading-relaxed text-stone">
              Researchers fit birds with nano-tags — a tiny transmitter and a 12–15 cm whisker of antenna weighing between
              0.2 and 1 gram. Each tag pulses a unique signal. When a tagged bird flies within range of a Motus receiver
              like ours, the detection is logged and shared with researchers across the network.
            </p>
            <p className="mt-4 leading-relaxed text-stone">{motus.thanks}</p>
            <a href={motus.dataUrl} className="mt-6 inline-block font-semibold text-moss underline-offset-4 hover:underline">
              Explore Motus.org →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
