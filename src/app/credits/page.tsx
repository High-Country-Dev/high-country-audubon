import type { Metadata } from "next";
import credits from "@/credits.json";

export const metadata: Metadata = { title: "Photo credits" };

export default function Credits() {
  const rows = Object.entries(credits as Record<string, { title: string; artist: string; license: string; page: string }>);
  return (
    <section className="mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6">
      <h1 className="font-display text-5xl">Photo credits</h1>
      <p className="mt-4 text-stone">
        Black-and-white Warbler by HCAS member Don Mullaney. All other photographs are from Wikimedia Commons, used under the
        licenses below. Click a photo name for the original and full license.
      </p>
      <ul className="mt-10 divide-y divide-black/10">
        {rows.map(([slug, c]) => (
          <li key={slug} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3 text-sm">
            <a href={c.page} className="font-medium text-moss underline-offset-4 hover:underline">
              {c.title}
            </a>
            <span className="text-stone">
              {c.artist.replace(/^Original uploader was\s*/i, "").replace(/ at en\.wikipedia.*/i, "")} · {c.license}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
