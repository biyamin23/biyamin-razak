import { site } from "@/content/site";
import { PaperPlane } from "./doodles";

// Renders a real link only when a Telegram URL is set in content/site.ts.
export function TelegramButton({ label, className = "" }: { label: string; className?: string }) {
  if (!site.telegram) {
    return (
      <span className={`btn cursor-not-allowed opacity-60 ${className}`} title="Telegram link not set yet">
        <PaperPlane className="size-5" />
        Telegram link coming soon
      </span>
    );
  }
  return (
    <a href={site.telegram} target="_blank" rel="noopener noreferrer" className={`btn ${className}`}>
      <PaperPlane className="size-5" />
      {label}
    </a>
  );
}
