import Image from "next/image";
import Link from "next/link";
import { FlyingBirds, Kettle } from "@/components/Birds";
import { Counter } from "@/components/Counter";
import { NextWalks } from "@/components/NextWalks";
import { Reveal } from "@/components/Reveal";
import { hawkWatch, membership, motus, org, pillars } from "@/content";

const GALLERY = [
  ["eastern-bluebird", "Eastern Bluebird"],
  ["scarlet-tanager", "Scarlet Tanager"],
  ["black-and-white-warbler", "Black-and-white Warbler"],
  ["cedar-waxwing", "Cedar Waxwing"],
  ["ruby-throated-hummingbird", "Ruby-throated Hummingbird"],
  ["barred-owl", "Barred Owl"],
  ["indigo-bunting", "Indigo Bunting"],
  ["golden-winged-warbler", "Golden-winged Warbler"],
  ["american-goldfinch", "American Goldfinch"],
  ["carolina-wren", "Carolina Wren"],
  ["blackburnian-warbler", "Blackburnian Warbler"],
  ["tree-swallow", "Tree Swallow"],
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-deep text-white">
        <Image
          src="/img/blue-ridge-parkway.webp"
          alt="The Linn Cove Viaduct on the Blue Ridge Parkway wrapping around Grandfather Mountain in fall color"
          fill
          priority
          sizes="100vw"
          className="ken-burns -z-10 object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-deep/85 via-forest-deep/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-forest-deep/70 to-transparent" />
        <FlyingBirds />

        <div className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6">
          <Reveal>
            <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Audubon in the North Carolina High Country
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display max-w-3xl text-5xl leading-[1.02] font-medium text-balance sm:text-7xl">
              Look up. <span className="text-gold italic">The mountains</span> are full of birds.
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Free guided bird walks every week, a Blue Ridge hawk watch every fall, and hands-on conservation across five mountain counties. Beginners very welcome — we&apos;ll lend you binoculars.
            </p>
          </Reveal>
          <Reveal delay={400} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/bird-walks"
              className="rounded-full bg-gold px-7 py-3.5 font-semibold text-forest-deep shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ecb752]"
            >
              Come on a bird walk
            </Link>
            <Link
              href="/join"
              className="rounded-full border border-white/50 px-7 py-3.5 font-semibold backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Become a member
            </Link>
          </Reveal>
        </div>

        <a
          href="#next"
          aria-label="Scroll down"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hover:text-white"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* Upcoming walks */}
      <section id="next" className="relative bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr] md:py-28">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Upcoming walks</p>
            <h2 className="font-display mt-3 text-4xl leading-tight text-balance sm:text-5xl">
              Every event is free and open to everyone.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              No membership, no sign-up, no experience needed. Just show up — rain or shine — and walk with people who
              love birds.
            </p>
            <Link href="/bird-walks" className="mt-6 inline-block font-semibold text-moss underline-offset-4 hover:underline">
              Where we meet &amp; what to bring →
            </Link>
          </Reveal>
          <Reveal delay={150} className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_-20px_rgba(29,58,42,0.25)] sm:p-8">
            <NextWalks />
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">What we do</p>
            <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
              Enjoy birds. Then help them.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">{org.mission}</p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <Link
                  href={p.href}
                  className="group block h-full overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone">{p.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hawk watch band */}
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Hawk Watch {hawkWatch.year}</p>
            <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
              Counting kettles on the Blue Ridge Parkway.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Every September our volunteers set up lawn chairs and spotting scopes at a Parkway overlook and count every
              raptor that rides the thermals south.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {[
                [hawkWatch.total, "raptors counted"],
                [hawkWatch.volunteerHours, "volunteer hours"],
                [hawkWatch.monarchs, "monarchs, too"],
              ].map(([n, label]) => (
                <div key={label as string}>
                  <dt className="font-display text-4xl text-gold sm:text-5xl">
                    <Counter to={n as number} />
                  </dt>
                  <dd className="mt-1 text-sm text-white/70">{label}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/hawk-watch"
              className="mt-10 inline-block rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              See the full count
            </Link>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/img/grandfather-mountain.webp"
                alt="Grandfather Mountain at sunset"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-bottom"
              />
              <div className="absolute inset-x-0 -top-[22%] [&_.kettle-bird]:text-forest-deep/90">
                <Kettle count={12} />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-white/60">A kettle of Broad-winged Hawks, circling up a thermal</p>
          </Reveal>
        </div>
      </section>

      {/* Motus */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <Reveal className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image src="/img/bobolink.webp" alt="A male Bobolink perched on a plant stem" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -right-3 -bottom-6 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-8">
              <p className="text-xs font-semibold tracking-widest text-moss uppercase">Detected overhead</p>
              <p className="font-display text-xl">Bobolink · Sept 20, 2024</p>
            </div>
          </Reveal>
          <Reveal delay={150} className="order-1 md:order-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">The HCAS Motus Tower</p>
            <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
              Our own antenna, listening for migrants.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Since {motus.online}, our tower at the {motus.location} has picked up tagged birds passing through on their
              way south — adding the High Country to an international map of migration.
            </p>
            <Link href="/motus" className="mt-6 inline-block font-semibold text-moss underline-offset-4 hover:underline">
              How Motus works →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Gallery marquee */}
      <section className="overflow-hidden bg-parchment py-16" aria-label="Birds of the High Country">
        <Reveal className="mx-auto mb-8 max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Who you might meet on a walk</h2>
        </Reveal>
        <div className="group flex w-max animate-[marquee_60s_linear_infinite] gap-5 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...GALLERY, ...GALLERY].map(([slug, name], i) => (
            <figure key={i} className="relative h-64 w-52 shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-64" aria-hidden={i >= GALLERY.length}>
              <Image src={`/img/${slug}.webp`} alt={name} fill sizes="256px" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-3 text-sm font-medium text-white">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Join */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-white">
        <Image src="/img/price-lake.webp" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-35" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 md:py-32">
          <Reveal>
            <h2 className="font-display mx-auto max-w-3xl text-4xl leading-tight text-balance sm:text-6xl">
              Membership starts at ${membership.tiers.at(-1)!.price} a year.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Dues and donations fund native gardens, wetland restoration, the Sue Wells Research Grant and our Young
              Birders Scholarship.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-10 flex flex-wrap justify-center gap-4">
            {membership.tiers.map((t) => (
              <div key={t.name} className="w-36 rounded-2xl border border-white/20 bg-white/5 px-5 py-5 backdrop-blur">
                <p className="font-display text-4xl text-gold">${t.price}</p>
                <p className="mt-1 text-sm text-white/80">{t.name}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={260}>
            <Link
              href="/join"
              className="mt-10 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-forest-deep shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ecb752]"
            >
              Join, renew or donate
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
