import Image from "next/image";
import { CONTENT, STACK, type Lang } from "@/lib/content";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site";
import { buildHomeJsonLd } from "@/lib/structured-data";
import { ArrowIcon, ServiceIcon } from "./icons";

type HomePageProps = { lang: Lang };

const container = "mx-auto max-w-6xl px-4 sm:px-6";
const section = `${container} scroll-mt-20 py-20 sm:py-28`;

const Eyebrow = ({ children }: { children: string }) => (
  <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{children}</p>
);

export const HomePage = ({ lang }: HomePageProps) => {
  const { hero, services, products, process, stack, about, contact } = CONTENT[lang];

  // Escapa "<" para que ningún texto pueda cerrar la etiqueta <script>.
  const jsonLd = JSON.stringify(buildHomeJsonLd(lang)).replaceAll("<", "\\u003c");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section className="relative overflow-hidden">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div aria-hidden className="glow absolute top-10 right-[-10%] size-[520px]" />
        <div className={`${container} relative grid items-center gap-12 pt-20 pb-24 sm:pt-28 lg:grid-cols-[1.25fr_1fr]`}>
          <div>
            <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
              <span className="size-1.5 rounded-full bg-primary" />
              {hero.eyebrow}
            </div>
            <h1 className="fade-up mt-6 text-5xl font-bold tracking-tight [animation-delay:80ms] sm:text-7xl">
              {hero.titleStart}
              <span className="text-gradient">{hero.titleHighlight}</span>
              {hero.titleEnd}
            </h1>
            <p className="fade-up mt-6 max-w-xl text-lg text-muted [animation-delay:160ms]">{hero.subtitle}</p>
            <div className="fade-up mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-on-primary shadow-lg shadow-primary/30 transition-transform active:scale-[0.97]"
              >
                {hero.ctaPrimary}
                <ArrowIcon className="size-4" />
              </a>
              <a
                href="#products"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition-colors hover:bg-white/5 active:scale-[0.97]"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="fade-up relative hidden justify-center [animation-delay:200ms] lg:flex">
            <div aria-hidden className="glow-gold absolute inset-10" />
            <Image
              src="/brand/dsmart-d.webp"
              alt="DSmart"
              width={400}
              height={386}
              priority
              className="float relative w-80 drop-shadow-2xl"
            />
          </div>
        </div>
        <div className={`${container} relative pb-16`}>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="bg-background/90 p-6">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold tabular-nums">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="services" className={section}>
        <div className="max-w-2xl">
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{services.title}</h2>
          <p className="mt-4 text-lg text-muted">{services.subtitle}</p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <li key={service.title} className="card-hover rounded-2xl border border-white/10 bg-surface p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/25">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="products" className={section}>
        <div className="max-w-2xl">
          <Eyebrow>{products.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{products.title}</h2>
          <p className="mt-4 text-lg text-muted">{products.subtitle}</p>
        </div>
        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.items.map((product) => (
            <li
              key={product.name}
              className="card-hover relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface-2 to-surface p-8"
            >
              <div className="flex items-start gap-5">
                <Image
                  src={product.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="size-18 rounded-2xl outline outline-1 -outline-offset-1 outline-white/10"
                />
                <div className="min-w-0">
                  <p className="text-sm text-muted">{product.tagline}</p>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    {products.available}
                  </p>
                </div>
              </div>
              <p className="mt-6 flex-1 leading-relaxed text-muted">{product.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.platforms.map((platform) => (
                  <span key={platform} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                    {platform}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {product.links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className={
                      index === 0
                        ? "rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform active:scale-[0.97]"
                        : "rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5"
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="process" className={section}>
        <div className="max-w-2xl">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{process.title}</h2>
        </div>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-white/10 bg-surface p-7">
              <span className="text-gradient text-4xl font-bold tabular-nums">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16">
          <p className="text-sm text-muted">{stack.title}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <li key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className={section}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{about.title}</h2>
            <div className="mt-6 space-y-4 text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="grid gap-4">
            {about.pillars.map((pillar) => (
              <li key={pillar.title} className="flex gap-4 rounded-2xl border border-white/10 bg-surface p-5">
                <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <h3 className="font-semibold">{pillar.title}</h3>
                  <p className="mt-1 text-sm text-muted">{pillar.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className={`${container} scroll-mt-20 pb-24`}>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface-2 via-surface to-background p-8 sm:p-14">
          <div aria-hidden className="glow absolute -top-20 -right-20 size-96" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{contact.title}</h2>
            <p className="mt-4 text-lg text-muted">{contact.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.97]"
              >
                {contact.email}
                <ArrowIcon className="size-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition-colors hover:bg-white/5"
              >
                {contact.whatsapp}
              </a>
            </div>
            <p className="mt-6 text-sm break-all text-muted">{CONTACT_EMAIL}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
