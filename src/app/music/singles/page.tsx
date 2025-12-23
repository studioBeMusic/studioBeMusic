import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Singles",
};

export default function SinglesPage() {
  return (
    <div className="stack gap-medium">
      <h1>Singles</h1>
      <p className="muted">Placeholder for singles catalog.</p>
    </div>
  );
}
