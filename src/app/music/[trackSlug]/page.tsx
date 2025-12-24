export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getPublishedSingleBySlug,
  listEditionsForTrack,
} from "@/lib/data/music";

type TrackPageProps = {
  params: { trackSlug: string };
};

function formatDuration(seconds?: number) {
  if (!seconds || Number.isNaN(seconds)) return null;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

function buildMetaLine({
  artist,
  year,
  durationSeconds,
}: {
  artist?: string;
  year?: number;
  durationSeconds?: number;
}) {
  const parts = [
    artist ? artist.toUpperCase() : null,
    year ? year.toString() : null,
    formatDuration(durationSeconds),
  ].filter(Boolean);

  return parts.join(" · ");
}

export async function generateMetadata({
  params,
}: TrackPageProps): Promise<Metadata> {
  const track = await getPublishedSingleBySlug(params.trackSlug);
  if (!track) return {};

  return {
    title: track.title,
    description: track.summary ?? track.context,
  };
}

export default async function TrackPage({ params }: TrackPageProps) {
  const track = await getPublishedSingleBySlug(params.trackSlug);

  if (!track) return notFound();

  const editions = await listEditionsForTrack(track.slug);
  const metaLine = buildMetaLine({
    artist: track.artist,
    year: track.year,
    durationSeconds: track.durationSeconds,
  });

  return (
    <article className="stack gap-large">
      <p className="meta">
        <Link href="/music/singles" className="text-link">
          ← Back to Singles
        </Link>
      </p>

      <h1>{track.title}</h1>
      {metaLine ? <p className="meta">{metaLine}</p> : null}

      <section className="stack gap-medium">
        <h2>Context</h2>
        {track.context ? (
          <p>{track.context}</p>
        ) : (
          <p className="muted">Context will appear here when available.</p>
        )}
      </section>

      <section className="stack gap-medium">
        <h2>Listen</h2>
        {track.audio?.url ? (
          <audio controls preload="none" src={track.audio.url}>
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p className="muted">Audio will appear here when available.</p>
        )}
      </section>

      {track.details ? (
        <section className="stack gap-small">
          <details>
            <summary>Details</summary>
            <p>{track.details}</p>
          </details>
        </section>
      ) : null}

      {track.lyrics?.text ? (
        <section className="stack gap-medium">
          <h2>Lyrics</h2>
          <p>{track.lyrics.text}</p>
        </section>
      ) : null}

      {editions.length > 0 ? (
        <section className="stack gap-medium">
          <h2>Editions</h2>
          <ul className="list">
            {editions.map((edition) => (
              <li key={edition.slug}>
                <Link
                  href={`/music/${track.slug}/editions/${edition.slug}`}
                  className="text-link"
                >
                  {edition.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {track.related?.journey_entry_slugs?.length ? (
        <section className="stack gap-medium">
          <h2>Related Journey</h2>
          <ul className="list">
            {track.related.journey_entry_slugs.map((slug) => (
              <li key={slug}>
                <Link href={`/journey/${slug}`} className="text-link">
                  {slug}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {track.links?.length ? (
        <section className="stack gap-medium">
          <h2>Elsewhere</h2>
          <ul className="list">
            {track.links.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link href={link.href || "#"} className="text-link">
                  {link.label}
                  {link.note ? ` — ${link.note}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
