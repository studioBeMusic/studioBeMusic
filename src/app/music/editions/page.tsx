import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editions",
};

export default function EditionsPage() {
  return (
    <div className="stack gap-medium">
      <h1>Editions</h1>
      <p className="muted">Placeholder for edition listings.</p>
    </div>
  );
}
