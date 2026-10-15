import { CONTENT, type Lang } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/site";

type PrivacyPageProps = { lang: Lang };

export const PrivacyPage = ({ lang }: PrivacyPageProps) => {
  const { privacy, contact } = CONTENT[lang];

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-4xl font-semibold tracking-tight">{privacy.title}</h1>
      <p className="mt-3 text-sm text-muted">{privacy.updated}</p>
      <p className="mt-8 text-muted">{privacy.intro}</p>
      {privacy.sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <div className="mt-3 space-y-3 text-muted">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">{contact.title}</h2>
        <p className="mt-3 text-muted">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
};
