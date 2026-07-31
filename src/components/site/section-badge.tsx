import { cn } from "@/lib/utils";

export function SectionBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full", className)}
      style={{
        padding: "6px 16px",
        fontSize: 13,
        fontWeight: 600,
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(124,58,237,0.4)",
        color: "rgb(196,181,253)",
      }}
    >
      {children}
    </span>
  );
}
