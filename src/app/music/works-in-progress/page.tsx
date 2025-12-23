import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works in Progress",
};

export default function WorksInProgressPage() {
  return (
    <div className="stack gap-medium">
      <h1>Works in Progress</h1>
      <p className="muted">Placeholder for works currently in development.</p>
    </div>
  );
}
