import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LAGHU",
  description:
    "LAGHU — devotional and place-based works published through Studio Be Music.",
};

export default function LaghuPage() {
  return (
    <article className="stack gap-large">
      <h1>LAGHU</h1>

      <section className="stack gap-medium">
        <h2>Orientation</h2>
        <p>
          LAGHU is an independent music project centered on devotional and
          place-based works rooted in Indian musical and spiritual traditions.
          The project emphasizes long-form compositions and album-length cycles
          developed as immersive environments rather than isolated releases.
          Music is created as an offering and a practice, shaped by reflection,
          continuity, and surrender rather than by contemporary release
          conventions. All works are published through Studio Be Music.
        </p>
      </section>

      <section className="stack gap-medium">
        <h2>Current Focus</h2>
        <ul className="list">
          <li>Developing and completing multi-album devotional projects</li>
          <li>
            Composing music tied to specific places, narratives, and inner
            states
          </li>
          <li>
            Refining album-worlds presented through dedicated sites
          </li>
        </ul>
      </section>

      <section className="stack gap-medium">
        <h2>Works</h2>
        <div className="stack gap-medium">
          <div>
            <h3>Album Worlds</h3>
            <p>
              A series of album-length works designed as complete devotional
              environments, each with its own dedicated site and internal
              journey.
            </p>
          </div>
          <div>
            <h3>Related Compositions</h3>
            <p>
              Selected works and compositions that inform or extend album
              projects, including transitional pieces and thematic studies.
            </p>
          </div>
        </div>
      </section>

      <section className="stack gap-medium">
        <h2>Process &amp; Context</h2>
        <p>
          The LAGHU project approaches music as a devotional discipline rather
          than a performance-driven output. Compositions are developed slowly,
          allowing meaning, form, and atmosphere to settle together. Albums are
          conceived as places to enter, not products to consume, and are
          presented with supporting context that invites contemplation rather
          than reaction. The work privileges depth, repetition, and presence
          over novelty or scale.
        </p>
      </section>

      <section className="stack gap-medium">
        <h2>Related Journey Entries</h2>
        <ul className="list">
          <li>
            <Link href="#" className="text-link">
              Building devotional album-worlds
            </Link>
          </li>
          <li>
            <Link href="#" className="text-link">
              Notes on place-based composition
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
          YouTube — LAGHU channel
        </Link>
      </section>

      <p className="muted">
        <em>Published and presented through Studio Be Music.</em>
      </p>
    </article>
  );
}
