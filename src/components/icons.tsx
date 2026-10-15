import type { ServiceIcon as ServiceIconName } from "@/lib/content";

const PATHS: Record<ServiceIconName, string[]> = {
  mobile: ["M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z", "M11 18h2"],
  web: ["M3 5h18v14H3z", "M3 9h18", "M6 7h.01", "M8.5 7h.01", "M8 13l-2 2 2 2", "M16 13l2 2-2 2", "M13 12l-2 6"],
  desktop: ["M3 4h18v12H3z", "M8 20h8", "M12 16v4"],
  api: ["M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z", "M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6", "M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"],
  realtime: ["M3 12h2", "M7 8v8", "M11 4v16", "M15 7v10", "M19 10v4"],
  ai: ["M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8Z", "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9Z"],
};

type ServiceIconProps = { name: ServiceIconName; className?: string };

export const ServiceIcon = ({ name, className }: ServiceIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    {PATHS[name].map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

export const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
