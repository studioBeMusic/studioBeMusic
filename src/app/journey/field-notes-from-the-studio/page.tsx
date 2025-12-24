import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field notes from the studio",
};

export default function FieldNotesFromTheStudioPage() {
  return (
    <article className="stack gap-medium">
      <p className="meta">Field Note · December 2024</p>
      <h1>Field notes from the studio</h1>
      <p className="muted">Placeholder entry.</p>
    </article>
  );
}
