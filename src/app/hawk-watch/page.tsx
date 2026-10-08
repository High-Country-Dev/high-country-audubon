import type { Metadata } from "next";
import { Kettle } from "@/components/Birds";
import { Counter } from "@/components/Counter";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { hawkWatch } from "@/content";

export const metadata: Metadata = { title: "Hawk Watch" };

export default function HawkWatch() {
  const max = hawkWatch.species[0].count;
  const histMax = Math.max(...hawkWatch.history.map((h) => h.total));
  return (
    <>
      <PageHero
        image="/img/grandfather-mountain.webp"
        kicker={`Hawk Watch ${hawkWatch.year}`}
        title="Thousands of hawks ride these ridges south every September."
        position="center 70%"
      >
        {hawkWatch.intro}
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <Reveal>
          <blockquote className="font-display text-2xl leading-snug text-forest sm:text-3xl">“{hawkWatch.scene}”</blockquote>
          <p className="mt-4 text-sm text-stone">— {hawkWatch.sceneCredit}</p>
        </Reveal>
        <Reveal delay={150}>
          <Kettle count={13} />
        </Reveal>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="grid gap-8 sm:grid-cols-3">
            {[
              [hawkWatch.total, `raptors counted in ${hawkWatch.year}`],
              [hawkWatch.volunteerHours, "HCAS volunteer hours"],
              [hawkWatch.monarchs, "Monarch butterflies"],
            ].map(([n, label]) => (
              <div key={label as string} className="border-l-2 border-gold pl-5">
                <p className="font-display text-5xl text-gold sm:text-6xl">
                  <Counter to={n as number} />
                </p>
                <p className="mt-2 text-white/75">{label}</p>
              </div>
            ))}
          </Reveal>

          <div className="mt-20 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <h2 className="font-display text-3xl">The {hawkWatch.year} tally</h2>
              <ul className="mt-6 space-y-2.5">
                {hawkWatch.species.map((s, i) => (
                  <li key={s.code} className="grid grid-cols-[9.5rem_1fr_3.5rem] items-center gap-3 text-sm sm:grid-cols-[12rem_1fr_4rem]">
                    <span className="truncate text-white/85">{s.name}</span>
                    <span className="h-3 overflow-hidden rounded-full bg-white/10">
                      <span
                        className="bar block h-full rounded-full bg-gold"
                        style={
                          {
                            width: `${Math.max(1.5, (Math.sqrt(s.count) / Math.sqrt(max)) * 100)}%`,
                            "--delay": `${i * 70}ms`,
                          } as React.CSSProperties
                        }
                      />
                    </span>
                    <span className="text-right font-semibold tabular-nums">{s.count.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/50">Bars use a square-root scale so the rarer raptors stay visible.</p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="font-display text-3xl">Season by season</h2>
              <div className="mt-6 flex h-64 items-end gap-4">
                {hawkWatch.history.map((h, i) => (
                  <div key={h.year} className="flex h-full flex-1 flex-col justify-end text-center">
                    <span className="mb-2 text-sm font-semibold tabular-nums">{h.total.toLocaleString()}</span>
                    <div
                      className="bar-v rounded-t-xl bg-sage"
                      style={{ height: `${(h.total / histMax) * 100}%`, "--delay": `${300 + i * 150}ms` } as React.CSSProperties}
                    />
                    <span className="mt-2 text-sm text-white/70">{h.year}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 leading-relaxed text-white/75">{hawkWatch.season2026}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl">Volunteer next September</h2>
          <p className="mt-4 text-lg text-stone">
            No experience required — experienced spotters teach you to pick out a Broad-wing by its silhouette. Come for an
            hour or come every day. Watch the Google Group in late summer for dates and the overlook.
          </p>
        </Reveal>
      </section>
    </>
  );
}
