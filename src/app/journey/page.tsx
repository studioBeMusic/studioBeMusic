import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Record of the creative path for Studio Be Music across works and time.",
};

const entries = [
  {
    slug: "why-studio-be-music-exists",
    title: "Why Studio Be Music Exists",
    meta: "Milestone · March 2025",
  },
  {
    slug: "drafting-album-worlds-without-deadlines",
    title: "Drafting album-worlds without deadlines",
    meta: "Work Note · February 2025",
  },
  {
    slug: "listening-back-before-release",
    title: "Listening back before release",
    meta: "Reflection · January 2025",
  },
  {
    slug: "field-notes-from-the-studio",
    title: "Field notes from the studio",
    meta: "Observation · December 2024",
  },
];

export default function JourneyPage() {
  const pinned = entries[0];

  return (
    <div className="stack gap-large">
      <header className="stack gap-medium">
        <h1>Journey</h1>
        <p>
          The Journey records the creative path as it unfolds over time. It
          exists to preserve continuity, context, and presence across works,
          rather than to announce outcomes or maintain visibility. Entries may
          take the form of reflections, work notes, milestones, or field
          observations, and are shared as an open record of process rather than
          as commentary or promotion. The Journey is not maintained for
          frequency or engagement, but as a way of keeping the work
          intelligible—to others, and to the self—over time.
        </p>
      </header>

      <section className="stack gap-medium">
        <h2>Current Phase</h2>
        <article className="teaser">
          <div className="teaser-header">
            <p className="meta">{pinned.meta}</p>
            <h3>{pinned.title}</h3>
          </div>
          <Link
            href={`/journey/${pinned.slug}`}
            className="text-link"
            aria-label={`Read ${pinned.title}`}
          >
            Read entry
          </Link>
        </article>
      </section>

      <section className="stack gap-medium">
        <h2>All Entries</h2>
        <ul className="list">
          {entries.map((entry) => (
            <li key={entry.slug} className="list-item-inline">
              <Link href={`/journey/${entry.slug}`} className="text-link">
                {entry.title}
              </Link>
              <span className="meta">{entry.meta}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
