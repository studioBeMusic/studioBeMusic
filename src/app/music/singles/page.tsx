export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Link from "next/link";
import { listPublishedSingles } from "@/lib/data/music";

export const metadata: Metadata = {
  title: "Singles",
  description:
    "Standalone works released as complete expressions, independent of album frameworks.",
};

function formatDuration(seconds?: number) {
  if (!seconds || Number.isNaN(seconds)) return null;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

function getFirstSentence(text?: string) {
  if (!text) return null;
  const match = text.match(/[^.?!]*[.?!]/);
  return match ? match[0].trim() : text.trim();
}

export default async function SinglesPage() {
  const singles = await listPublishedSingles();

  return (
    <div className="stack gap-large">
      <header className="stack gap-medium">
        <h1>Singles</h1>
        <p>
          Singles are standalone works released as complete expressions,
          independent of album frameworks or long-form projects. Each piece is
          developed and shared on its own terms, with context provided where it
          informs listening rather than directing it.
        </p>
      </header>

      {singles.length === 0 ? (
        <p className="muted">No singles have been published here yet.</p>
      ) : (
        <section className="stack gap-large" aria-label="Singles list">
          {singles.map((single) => {
            const duration = formatDuration(single.durationSeconds);
            const metaParts = [
              single.artist?.toUpperCase(),
              single.year,
              duration ? duration : null,
            ].filter(Boolean);

            const contextLine = getFirstSentence(single.context);

            return (
              <article key={single.slug} className="teaser">
                <div className="teaser-header">
                  <h2>
                    <Link href={`/music/${single.slug}`} className="text-link">
                      {single.title}
                    </Link>
                  </h2>
                  {contextLine ? <p>{contextLine}</p> : null}
                  {metaParts.length > 0 ? (
                    <p className="meta">{metaParts.join(" · ")}</p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}
