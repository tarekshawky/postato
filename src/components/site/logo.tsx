import { CampaignPinIcon } from "@/components/site/campaign-pin-icon";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)} style={{ gap: 10 }}>
      <CampaignPinIcon size={36} gradientId="navPinGrad" />
      <span style={{ fontWeight: 800, fontSize: 20, color: "white", letterSpacing: "-0.5px" }}>
        POSTATO
      </span>
    </div>
  );
}
