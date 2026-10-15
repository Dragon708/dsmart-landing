import Image from "next/image";
import { CONTENT, type Lang } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/site";

type HomePageProps = { lang: Lang };

const sectionClass = "mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20";

export const HomePage = ({ lang }: HomePageProps) => {
  const { hero, about, products, contact } = CONTENT[lang];

  return (
    <main>
      <section className="mx-auto max-w-5xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28">
        <p className="text-sm font-medium text-primary">{hero.eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">{hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{hero.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#products"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-on-primary transition-transform active:scale-[0.97]"
          >
            {hero.ctaProducts}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium transition-transform hover:bg-surface active:scale-[0.97]"
          >
            {hero.ctaContact}
          </a>
        </div>
      </section>

      <section id="about" className={sectionClass}>
        <h2 className="text-3xl font-semibold tracking-tight">{about.title}</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {about.pillars.map((pillar) => (
            <li key={pillar.title} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-medium">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="products" className={sectionClass}>
        <h2 className="text-3xl font-semibold tracking-tight">{products.title}</h2>
        <p className="mt-3 text-muted">{products.subtitle}</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {products.items.map((product) => (
            <li key={product.name} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-4">
                {product.icon ? (
                  <Image
                    src={product.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="size-14 rounded-xl outline outline-1 -outline-offset-1 outline-black/10"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="grid size-14 place-items-center rounded-xl bg-primary-soft text-xl font-semibold text-primary"
                  >
                    {product.name.charAt(0)}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted">{product.status}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-muted">{product.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="rounded-lg bg-primary-soft px-3 py-2 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className={sectionClass}>
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">{contact.title}</h2>
          <p className="mt-3 max-w-2xl text-muted">{contact.subtitle}</p>
          <p className="mt-6 text-sm text-muted">{contact.emailLabel}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-1 inline-block text-lg font-medium break-all text-primary hover:underline sm:text-xl"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
};
