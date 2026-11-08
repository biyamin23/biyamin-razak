import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TelegramButton } from "@/components/TelegramButton";
import { BookIcon, BrowserIcon, ClapperIcon, GamepadIcon, Mosque, Sparks } from "@/components/doodles";
import { site, type Creation } from "@/content/site";

const look: Record<Creation["id"], { bg: string; Icon: (p: { className?: string }) => React.JSX.Element }> = {
  "web-apps": { bg: "bg-sky", Icon: BrowserIcon },
  videos: { bg: "bg-grape", Icon: ClapperIcon },
  games: { bg: "bg-mint", Icon: GamepadIcon },
  ebooks: { bg: "bg-peach", Icon: BookIcon },
};

function CreationCard({ c }: { c: Creation }) {
  const { bg, Icon } = look[c.id];
  return (
    <article className={`flex flex-col rounded-[18px] border-[3px] border-ink p-5 shadow-hard ${bg}`}>
      <Icon className="h-20 w-auto self-start" />
      <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{c.title}</h3>
      <p className="mt-1 leading-snug">{c.blurb}</p>

      {c.items.length === 0 ? (
        <p className="mt-auto pt-5 font-hand text-xl">Projects coming soon</p>
      ) : (
        <ul className="mt-auto space-y-2 pt-5">
          {c.items.map((it) => (
            <li key={it.title} className="rounded-[10px] border-[2.5px] border-ink bg-paper px-3 py-2">
              {it.href ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="block font-bold underline decoration-2 underline-offset-4 hover:decoration-brand">
                  {it.title}
                </a>
              ) : (
                <span className="block font-bold">{it.title}</span>
              )}
              <span className="text-sm">
                {it.note}
                {!it.href && <span className="font-hand text-base"> (coming soon)</span>}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-10">
          <section id="about" aria-labelledby="about-title" className="scroll-mt-6 lg:col-span-4">
            <span className="sticker -rotate-3 bg-sun text-3xl">About me</span>
            <h2 id="about-title" className="display mt-6 text-[clamp(2.2rem,5vw,3rem)] leading-[1.02] font-extrabold tracking-tight">
              A teacher with a builder&apos;s mindset.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed">{site.about}</p>
            <Mosque className="mt-10 w-full max-w-xs" />
          </section>

          <section id="creations" aria-labelledby="creations-title" className="scroll-mt-6 lg:col-span-8">
            <div className="relative inline-block">
              <h2 id="creations-title" className="sticker rotate-[-2deg] bg-sun text-[clamp(2rem,5vw,2.8rem)]">
                What I create
              </h2>
              <Sparks className="absolute -top-5 -right-12 w-10 rotate-90" />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {site.creations.map((c) => (
                <CreationCard key={c.id} c={c} />
              ))}
            </div>
          </section>
        </div>

        <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl scroll-mt-6 px-4 pb-20 sm:px-6">
          <div className="grid gap-8 rounded-[18px] border-[3px] border-ink bg-paper p-6 shadow-hard md:grid-cols-[1fr_2fr] md:p-10">
            <div>
              <span className="sticker rotate-2 bg-mint text-3xl">Services</span>
              <h2 id="services-title" className="mt-5 text-3xl leading-tight font-extrabold tracking-tight">
                Things I can make for you
              </h2>
            </div>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {site.services.map((s) => (
                <li key={s.title} className="border-t-[3px] border-dashed border-ink pt-3">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 leading-snug">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-6 px-4 pb-16 sm:px-6">
          <div className="flex flex-col items-start gap-6 rounded-[28px] border-[3px] border-ink bg-paper p-6 shadow-hard md:flex-row md:items-center md:justify-between md:p-8">
            <h2 id="contact-title" className="sticker -rotate-3 bg-sun text-[2.4rem]">
              Let&apos;s work together!
            </h2>
            <p className="max-w-sm text-lg leading-snug">
              Interested in my eBooks, digital products, AI projects or custom development?
            </p>
            <TelegramButton label="DM me on Telegram" className="bg-brand text-white" />
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t-[3px] border-ink px-4 py-6 text-sm sm:px-6">
        <p>© 2026 Biyamin Razak</p>
        <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">
          TikTok @biyaminrazak
        </a>
      </footer>
    </>
  );
}
