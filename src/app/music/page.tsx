import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Central catalog for music published through Studio Be Music, organized by intent.",
};

const categories = [
  {
    title: "Singles",
    copy:
      "Standalone works released as complete expressions, each with its own context.",
    href: "/music/singles",
  },
  {
    title: "Collections",
    copy: "Curated groupings of works gathered around a shared throughline.",
    href: "/music/collections",
  },
  {
    title: "Works in Progress",
    copy:
      "Music shared during its formation, documenting movement toward completion.",
    href: "/music/works-in-progress",
  },
  {
    title: "Editions",
    copy: "Intentional variations or alternate renderings of existing pieces.",
    href: "/music/editions",
  },
  {
    title: "Album Worlds",
    copy:
      "Album-length works presented as complete environments, often with dedicated sites.",
    href: "/music/album-worlds",
  },
];

export default function MusicPage() {
  return (
    <div className="stack gap-large">
      <header className="stack gap-medium">
        <h1>Music</h1>
        <p>
          Music published through Studio Be Music is organized by intent rather
          than by format or popularity. This space serves as the central catalog
          for works that do not belong to dedicated album-worlds, while also
          providing clear paths outward to albums that live in their own
          environments. Each category reflects a different mode of creation and
          sharing, allowing music to be encountered with context and continuity
          rather than urgency.
        </p>
      </header>

      <section className="stack gap-medium" aria-label="Music categories">
        {categories.map((category) => (
          <article key={category.title} className="teaser">
            <div className="teaser-header">
              <h2>{category.title}</h2>
              <p>{category.copy}</p>
            </div>
            <Link href={category.href} className="text-link">
              View {category.title}
            </Link>
          </article>
        ))}
      </section>

      <section className="stack gap-medium">
        <h2>Ordering and Presentation Rules</h2>
        <ul className="list">
          <li>Categories appear in the order listed above.</li>
          <li>No category is visually emphasized over another.</li>
          <li>No counts are shown.</li>
          <li>No “latest” or “featured” indicators appear here.</li>
        </ul>
      </section>
    </div>
  );
}
