import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { membership, org } from "@/content";

export const metadata: Metadata = { title: "Join & Give" };

export default function Join() {
  return (
    <>
      <PageHero image="/img/american-goldfinch.webp" kicker="Join, renew or donate" title="Support the birds of the High Country.">
        Every dollar stays local — in our parks, wetlands and schools.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl">Annual membership</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {membership.tiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 110}
              className="rounded-3xl bg-white p-8 text-center shadow-[0_20px_60px_-25px_rgba(29,58,42,0.3)] transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold tracking-widest text-moss uppercase">{t.name}</p>
              <p className="font-display mt-3 text-6xl text-forest">${t.price}</p>
              <p className="mt-1 text-sm text-stone">per year</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border-2 border-dashed border-moss/40 bg-parchment p-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Pay online</p>
            <h3 className="font-display mt-2 text-2xl">Card or PayPal</h3>
            <p className="mt-3 leading-relaxed text-stone">
              In the live site, this button goes to a hosted PayPal (or Stripe) checkout page — the payment form lives on
              their servers, not ours, so there is nothing on this site for anyone to hack.
            </p>
            <span className="mt-6 inline-block cursor-not-allowed rounded-full bg-ember/60 px-7 py-3.5 font-semibold text-white">
              Pay dues online (link coming)
            </span>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.25em] text-moss uppercase">Pay by mail</p>
            <h3 className="font-display mt-2 text-2xl">Send a check</h3>
            <p className="mt-3 leading-relaxed text-stone">Make checks payable to HCAS and mail to:</p>
            <p className="mt-3 font-medium">
              {org.mailing.map((l, i) => (
                <span key={l} className="block">
                  {i === 0 ? `${l}, Attn: Membership` : l}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl">Where your support goes</h2>
            <ul className="mt-6 space-y-3">
              {membership.uses.map((u) => (
                <li key={u} className="flex gap-3 text-white/85">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {u}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-4xl">Give to a fund</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {membership.funds.map((f) => (
                <span key={f} className="rounded-full border border-white/25 px-4 py-2 text-sm">
                  {f}
                </span>
              ))}
            </div>
            <p className="mt-6 text-white/70">HCAS is a 501(c)(3) nonprofit; donations are tax-deductible as allowed by law.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl">Join the conversation</h2>
          <p className="mt-4 text-lg text-stone">
            Walk updates, sightings and hawk reports go out on the HCBirders Google Group. To join without a Google account,
            send a blank email to{" "}
            <a href={`mailto:${org.googleGroupSubscribe}`} className="font-medium break-all text-moss underline underline-offset-4">
              {org.googleGroupSubscribe}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={org.googleGroup} className="rounded-full bg-forest px-6 py-3 font-semibold text-white transition hover:bg-moss">
              Open the Google Group
            </a>
            <a href={org.facebook} className="rounded-full border border-forest/30 px-6 py-3 font-semibold text-forest transition hover:bg-forest/5">
              Follow on Facebook
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
