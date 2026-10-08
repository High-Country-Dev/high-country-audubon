import type { Metadata } from "next";
import Image from "next/image";
import { NextWalks } from "@/components/NextWalks";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { christmasCounts, org, walks } from "@/content";

export const metadata: Metadata = { title: "Bird Walks" };

export default function BirdWalks() {
  return (
    <>
      <PageHero image="/img/price-lake.webp" kicker="Get outdoors" title="Free guided bird walks, every week of the year.">
        Great for people just getting into birding, all the way up to the experts. Bring binoculars if you have them — we
        have extras if you don&apos;t.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {walks.map((w, i) => (
            <Reveal key={w.id} delay={i * 140}>
              <article className="h-full overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-25px_rgba(29,58,42,0.3)]">
                <div className="relative aspect-[16/10]">
                  <Image src={w.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute top-4 left-4 rounded-full bg-cream/95 px-4 py-1.5 text-sm font-semibold text-forest">
                    {w.when}
                  </span>
                </div>
                <div className="p-7 sm:p-9">
                  <h2 className="font-display text-3xl">{w.name}</h2>
                  <p className="mt-1 font-medium text-ember">{w.times}</p>
                  <p className="mt-4 leading-relaxed text-stone">{w.blurb}</p>
                  <ul className="mt-5 space-y-2">
                    {w.details.map((d) => (
                      <li key={d} className="flex gap-3 text-[15px]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/5 pt-6">
                    <div className="text-sm">
                      <p className="font-semibold">{w.place}</p>
                      <p className="text-stone">{w.address}</p>
                    </div>
                    <a
                      href={w.mapUrl}
                      className="ml-auto rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-moss"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Coming up</p>
            <h2 className="font-display mt-3 text-4xl leading-tight">The next few walks</h2>
            <p className="mt-4 text-white/75">
              Dates update themselves. Weather or schedule changes go out on the{" "}
              <a href={org.googleGroup} className="underline underline-offset-4">
                HCBirders Google Group
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={150}>
            <NextWalks tone="dark" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Christmas Bird Count</p>
            <h2 className="font-display mt-3 text-4xl leading-tight">Five count circles in the High Country</h2>
            <p className="mt-4 leading-relaxed text-stone">{christmasCounts.blurb}</p>
            <p className="mt-4 font-medium">{christmasCounts.window}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {christmasCounts.circles.map((c) => (
                <span key={c} className="rounded-full bg-parchment px-4 py-1.5 text-sm">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Field trips</p>
            <h2 className="font-display mt-3 text-4xl leading-tight">Leave no birder inside!</h2>
            <p className="mt-4 leading-relaxed text-stone">
              Some trips are a morning, some are overnight, and at least once a year we head out of the area for a few
              nights — the Outer Banks, Lake Mattamuskeet, even Florida. Trips are often timed for school breaks so
              families can come.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              <strong className="text-ink">Be a considerate birder:</strong> on HCAS walks we never use playback during
              breeding season — it pulls birds away from raising their young.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Bird on your own</p>
            <h2 className="font-display mt-3 text-4xl leading-tight">Local birding hotspots</h2>
            <p className="mt-4 max-w-2xl text-stone">
              Our members mapped the best birding sites in all five counties — from Price Lake and Beacon Heights to Kerr
              Scott Reservoir and Stone Mountain. Tap a marker for species, access and parking.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-8 overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src={org.hotspotsMap}
              title="Map of birding hotspots in the HCAS five-county area"
              className="h-[480px] w-full border-0"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
