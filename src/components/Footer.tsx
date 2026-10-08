import Link from "next/link";
import { org } from "@/content";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-white">High Country Audubon Society</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            The Audubon North Carolina chapter for {org.counties.slice(0, -1).join(", ")} and {org.counties.at(-1)}{" "}
            counties. A 501(c)(3) nonprofit run entirely by volunteers.
          </p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">Get in touch</p>
          <a href={`mailto:${org.email}`} className="block hover:text-white">
            {org.email}
          </a>
          <p className="mt-2">
            {org.mailing.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">Stay in the loop</p>
          <a href={org.googleGroup} className="block hover:text-white">
            HCBirders Google Group
          </a>
          <a href={org.facebook} className="block hover:text-white">
            Facebook
          </a>
          <Link href="/join" className="block hover:text-white">
            Membership &amp; donations
          </Link>
          <Link href="/credits" className="block hover:text-white">
            Photo credits
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/50 sm:px-6">
          Preview site built by{" "}
          <a href="https://mountaindev.com" className="underline hover:text-white">
            Mountain Dev
          </a>{" "}
          in Boone, NC. No plugins, no database, nothing to patch.
        </p>
      </div>
    </footer>
  );
}
