import Link from "next/link";

type WordmarkProps = { href: string };

export const Wordmark = ({ href }: WordmarkProps) => (
  <Link href={href} className="flex items-center gap-2 font-semibold tracking-tight" aria-label="DSmart">
    <span
      aria-hidden
      className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-on-primary"
    >
      D
    </span>
    <span className="text-lg">DSmart</span>
  </Link>
);
