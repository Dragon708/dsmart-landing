import Image from "next/image";
import Link from "next/link";

type WordmarkProps = { href: string };

export const Wordmark = ({ href }: WordmarkProps) => (
  <Link href={href} className="flex items-center gap-2.5" aria-label="DSmart">
    <Image src="/brand/dsmart-d.webp" alt="" width={34} height={33} className="h-8 w-auto" />
    <span className="text-lg font-bold tracking-tight">
      D<span className="text-gradient">SMART</span>
    </span>
  </Link>
);
