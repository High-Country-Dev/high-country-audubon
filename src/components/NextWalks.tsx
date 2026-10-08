"use client";

import { useEffect, useState } from "react";
import { walks } from "@/content";

// Works out the next date of each recurring walk, in Eastern time, so the
// "upcoming" list never goes stale and nobody has to update a calendar.

function easternToday() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  return { date: new Date(get("year"), get("month") - 1, get("day")), hour: get("hour") };
}

function nextWednesday(from: Date, hour: number) {
  const d = new Date(from);
  const endHour = d.getMonth() >= 3 && d.getMonth() <= 9 ? 11 : 12;
  let add = (3 - d.getDay() + 7) % 7;
  if (add === 0 && hour >= endHour) add = 7;
  d.setDate(d.getDate() + add);
  return d;
}

function firstSaturday(year: number, month: number) {
  const d = new Date(year, month, 1);
  d.setDate(1 + ((6 - d.getDay() + 7) % 7));
  return d;
}

function nextFirstSaturday(from: Date, hour: number) {
  let d = firstSaturday(from.getFullYear(), from.getMonth());
  const sameDayOver = d.toDateString() === from.toDateString() && hour >= 10;
  if (d < from || sameDayOver) d = firstSaturday(from.getFullYear(), from.getMonth() + 1);
  return d;
}

function vcTime(d: Date) {
  return d.getMonth() >= 3 && d.getMonth() <= 9 ? "9–11 am" : "10 am–noon";
}

type Upcoming = { id: string; date: Date; time: string; name: string; place: string; mapUrl: string };

export function NextWalks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [items, setItems] = useState<Upcoming[] | null>(null);

  useEffect(() => {
    const { date, hour } = easternToday();
    const vc = walks.find((w) => w.id === "valle-crucis")!;
    const bp = walks.find((w) => w.id === "brookshire")!;
    const list: Upcoming[] = [];
    let w = nextWednesday(date, hour);
    for (let i = 0; i < 3; i++) {
      list.push({ id: `vc${i}`, date: new Date(w), time: vcTime(w), name: vc.name, place: vc.place, mapUrl: vc.mapUrl });
      w.setDate(w.getDate() + 7);
      w = new Date(w);
    }
    const s = nextFirstSaturday(date, hour);
    list.push({ id: "bp", date: s, time: "8–10 am", name: bp.name, place: bp.place, mapUrl: bp.mapUrl });
    list.sort((a, b) => +a.date - +b.date);
    setItems(list);
  }, []);

  const dark = tone === "dark";
  return (
    <ul className="divide-y divide-current/10">
      {(items ?? Array.from({ length: 4 }, () => null)).map((it, i) => (
        <li key={it?.id ?? i} className="flex items-center gap-5 py-4">
          <div
            className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl ${
              dark ? "bg-white/10 text-white" : "bg-forest text-white"
            }`}
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase opacity-80">
              {it ? it.date.toLocaleDateString("en-US", { month: "short" }) : "—"}
            </span>
            <span className="font-display text-2xl leading-none">{it ? it.date.getDate() : ""}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{it?.name ?? " "}</p>
            <p className={`text-sm ${dark ? "text-white/70" : "text-stone"}`}>
              {it ? `${it.date.toLocaleDateString("en-US", { weekday: "long" })} · ${it.time} · ${it.place}` : " "}
            </p>
          </div>
          {it && (
            <a
              href={it.mapUrl}
              className={`hidden shrink-0 text-sm font-medium underline-offset-4 hover:underline sm:block ${
                dark ? "text-gold" : "text-moss"
              }`}
            >
              Directions →
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
