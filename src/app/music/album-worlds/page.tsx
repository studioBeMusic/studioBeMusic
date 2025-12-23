import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Album Worlds",
};

export default function AlbumWorldsPage() {
  return (
    <div className="stack gap-medium">
      <h1>Album Worlds</h1>
      <p className="muted">Placeholder for album-world overviews.</p>
    </div>
  );
}
