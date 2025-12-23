import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LYNN",
  description:
    "LYNN — independent songwriting project published through Studio Be Music.",
};

export default function LynnPage() {
  return (
    <article className="stack gap-large">
      <h1>LYNN</h1>

      <section className="stack gap-medium">
        <h2>Orientation</h2>
        <p>
          LYNN is an independent music project focused on original songwriting
          shaped by Western popular forms, including pop, rock, folk, and
          Americana. The work is developed as a reflective practice, emphasizing
          coherence and intention over release frequency or platform
          optimization. Songs often begin as personal or philosophical inquiries
          and are allowed to mature across drafts, recordings, and arrangements
          before being shared. All works are published through Studio Be Music.
        </p>
      </section>

      <section className="stack gap-medium">
        <h2>Current Focus</h2>
        <ul className="list">
          <li>Writing and refining two album-length projects</li>
          <li>
            Recording and mixing selected works in parallel with ongoing
            composition
          </li>
          <li>
            Releasing standalone songs that do not belong to album-specific
            worlds
          </li>
        </ul>
      </section>

      <section className="stack gap-medium">
        <h2>Works</h2>
        <div className="stack gap-medium">
          <div>
            <h3>Standalone Songs</h3>
            <p>
              A growing body of individual songs released outside album
              frameworks, reflecting personal, philosophical, and observational
              themes.
            </p>
          </div>
          <div>
            <h3>Album Projects (In Progress)</h3>
            <p>
              Two distinct albums currently in development, each exploring a
              cohesive musical and thematic direction over extended timeframes.
            </p>
          </div>
        </div>
      </section>

      <section className="stack gap-medium">
        <h2>Process &amp; Context</h2>
        <p>
          The LYNN project treats songwriting as both craft and inquiry. Songs
          are written without predetermined stylistic targets and are allowed to
          settle into form through revision rather than urgency. Recording and
          production decisions are made in service of clarity and emotional
          honesty, favoring completeness over immediacy. The work is not
          structured around audience growth or algorithmic response, but around
          the internal coherence of each piece.
        </p>
      </section>

      <section className="stack gap-medium">
        <h2>Related Journey Entries</h2>
        <ul className="list">
          <li>
            <Link href="#" className="text-link">
              Writing albums at a slower tempo
            </Link>
          </li>
          <li>
            <Link href="#" className="text-link">
              Notes on narrative and arrangement
            </Link>
          </li>
          <li>
            <Link href="/journey/why-studio-be-music-exists" className="text-link">
              Why Studio Be Music Exists
            </Link>
          </li>
        </ul>
      </section>

      <section className="stack gap-medium">
        <h2>Elsewhere</h2>
        <Link href="#" className="text-link">
          YouTube — LYNN channel
        </Link>
      </section>

      <p className="muted">
        <em>Published and presented through Studio Be Music.</em>
      </p>
    </article>
  );
}
