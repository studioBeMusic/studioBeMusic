import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "LYNN and LAGHU presented as distinct artist projects within Studio Be Music.",
};

export default function ArtistsPage() {
  return (
    <div className="stack gap-large">
      <header className="stack gap-medium">
        <h1>Artists</h1>
        <p>
          Studio Be Music supports two independent artist projects—LYNN and
          LAGHU—each maintaining a distinct musical language, body of work, and
          creative trajectory. They are presented here as parallel practices
          rather than as variations of a single identity.
        </p>
      </header>

      <div className="grid-teasers">
        <article className="teaser">
          <h2>LYNN</h2>
          <p>
            Original songs shaped by Western popular forms, written as personal
            and philosophical reflections.
          </p>
          <div>
            <span className="label">Current focus</span>
            <p>Writing and recording new album-length works.</p>
          </div>
          <Link href="/artists/lynn" className="text-link">
            Enter
          </Link>
        </article>

        <article className="teaser">
          <h2>LAGHU</h2>
          <p>
            Devotional and place-based works rooted in Indian musical and
            spiritual traditions.
          </p>
          <div>
            <span className="label">Current focus</span>
            <p>Developing long-form devotional albums with dedicated sites.</p>
          </div>
          <Link href="/artists/laghu" className="text-link">
            Enter
          </Link>
        </article>
      </div>

      <p className="muted">
        Both artists are published and presented through Studio Be Music.
      </p>
    </div>
  );
}
