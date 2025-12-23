import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
};

export default function CollectionsPage() {
  return (
    <div className="stack gap-medium">
      <h1>Collections</h1>
      <p className="muted">Placeholder for collections.</p>
    </div>
  );
}
