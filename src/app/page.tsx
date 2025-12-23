import Link from "next/link";

export default function Home() {
  return (
    <div className="stack gap-large">
      <section className="hero">
        <h1 className="hero-title">
          A studio and publishing space for music created with intention,
          presence, and continuity.
        </h1>
        <p className="hero-subtitle">
          Original works by LYNN and LAGHU, released outside algorithmic cycles.
        </p>
      </section>

      <section className="grid-teasers" aria-label="Site sections">
        <article className="teaser">
          <div className="teaser-header">
            <h2>Artists</h2>
            <p>
              Two distinct artistic voices, presented without compression into a
              single identity.
            </p>
          </div>
          <Link href="/artists" className="text-link">
            Visit Artists
          </Link>
        </article>

        <article className="teaser">
          <div className="teaser-header">
            <h2>Music</h2>
            <p>
              Original works released with intention, context, and continuity
              beyond streaming cycles.
            </p>
          </div>
          <Link href="/music" className="text-link">
            Explore Music
          </Link>
        </article>

        <article className="teaser">
          <div className="teaser-header">
            <h2>Journey</h2>
            <p>
              An open record of the creative path as it unfolds over time.
            </p>
          </div>
          <Link href="/journey" className="text-link">
            Read Journey
          </Link>
        </article>
      </section>
    </div>
  );
}
