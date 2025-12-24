import type { Metadata } from "next";

type EditionPageProps = {
  params: { trackSlug: string; editionSlug: string };
};

export const metadata: Metadata = {
  title: "Edition",
};

export default function EditionPage({ params }: EditionPageProps) {
  return (
    <article className="stack gap-medium">
      <p className="meta">{params.trackSlug} · {params.editionSlug}</p>
      <h1>Edition placeholder</h1>
      <p className="muted">
        This edition page will be expanded in a future phase.
      </p>
    </article>
  );
}
