import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { board, history, org, projects } from "@/content";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero image="/img/barred-owl.webp" position="center 35%" kicker="About HCAS" title="A chapter of neighbors who love birds.">
        {org.mission}
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Our history</p>
          <h2 className="font-display mt-3 text-4xl">From Grandfather Mountain to five counties</h2>
        </Reveal>
        <ol className="relative mt-12 border-l-2 border-sage/60 pl-8 sm:ml-4">
          {history.map((h, i) => (
            <Reveal as="li" key={h.year} delay={i * 90} className="relative pb-10 last:pb-0">
              <span className="absolute top-1.5 -left-[41px] h-4 w-4 rounded-full border-4 border-cream bg-moss" />
              <p className="font-display text-2xl text-ember">{h.year}</p>
              <p className="mt-1 max-w-2xl leading-relaxed text-stone">{h.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="what-we-do" className="scroll-mt-24 bg-parchment">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Helping birds</p>
            <h2 className="font-display mt-3 text-4xl">Habitat projects</h2>
            <p className="mt-4 max-w-2xl text-stone">
              The High Country is rich in forest but short on wetlands — and wetlands filter our water and support far more
              kinds of wildlife. Much of our conservation work is about bringing them back.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-2 leading-relaxed text-stone">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="grants" className="scroll-mt-24 mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
          <Image src="/img/bw-warbler-mullaney.webp" alt="Black-and-white Warbler, photographed by HCAS member Don Mullaney" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          <span className="absolute right-3 bottom-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">Photo: Don Mullaney</span>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Grants &amp; scholarships</p>
          <h2 className="font-display mt-3 text-4xl leading-tight">Investing in the next generation of birders</h2>
          <p className="mt-4 leading-relaxed text-stone">
            The <strong className="text-ink">Sue Wells Research Grant</strong> awards up to $500 to undergraduate or graduate
            students researching birds of the North Carolina High Country — for travel to field sites and project-specific
            equipment. Recipients share their findings at a chapter meeting.
          </p>
          <p className="mt-4 leading-relaxed text-stone">
            The <strong className="text-ink">HCAS Young Birders Scholarship</strong> helps young people get into birding,
            and we loan binoculars and field guides to new birders on walks and at local festivals.
          </p>
        </Reveal>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl">Board of Directors</h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.map(([name, role], i) => (
              <Reveal as="li" key={name} delay={i * 50} className="border-t border-white/15 pt-4">
                <p className="font-display text-xl">{name}</p>
                <p className="text-sm text-white/65">{role}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-sm text-white/50">Chapter meetings: a spring bird-walk kickoff and the annual meeting in July.</p>
        </div>
      </section>
    </>
  );
}
