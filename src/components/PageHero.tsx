import Image from "next/image";
import { FlyingBirds } from "./Birds";

export function PageHero({
  image,
  kicker,
  title,
  children,
  position = "center",
}: {
  image: string;
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  position?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-forest-deep text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="ken-burns -z-10 object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep via-forest-deep/45 to-forest-deep/20" />
      <FlyingBirds />
      <div className="mx-auto w-full max-w-6xl px-4 pt-32 pb-14 sm:px-6 sm:pb-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">{kicker}</p>
        <h1 className="font-display max-w-3xl text-4xl leading-[1.05] font-medium text-balance sm:text-6xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-white/85">{children}</div>}
      </div>
    </section>
  );
}
