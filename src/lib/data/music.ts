import "server-only";

import type {
  DocumentData,
  DocumentSnapshot,
} from "firebase-admin/firestore";
import type {
  MusicTrackSingleDocV1,
  MusicTrackEditionDocV1,
} from "../types/music";
import { adminDb } from "../firebaseAdmin";

type RawDoc = DocumentSnapshot<DocumentData>;

const musicCollection = adminDb.collection("music_tracks");

function normalizeSingleDoc(doc: RawDoc): MusicTrackSingleDocV1 | null {
  const data = doc.data();
  if (!data) return null;
  if (data.type !== "single" || data.status !== "published") return null;

  const slug = data.slug ?? doc.id;

  return {
    slug,
    title: data.title ?? slug,
    artist: data.artist,
    type: data.type,
    status: data.status,
    summary: data.summary,
    description: data.description,
    year: data.year,
    releaseDate: data.release_date ?? data.releaseDate,
    publishedAt: data.published_at ?? data.publishedAt,
    updatedAt: data.updated_at ?? data.updatedAt,
    tags: data.tags,
    durationSeconds: data.duration_seconds ?? data.durationSeconds,
    isrc: data.isrc,
    context: data.context,
    details: data.details,
    lyrics: data.lyrics,
    audio: data.audio,
    related: data.related,
    links: data.links,
    credits: data.credits,
  };
}

function normalizeEditionDoc(
  doc: RawDoc,
  parentSlug: string
): MusicTrackEditionDocV1 | null {
  const data = doc.data();
  if (!data) return null;

  const slug = data.slug ?? doc.id;

  return {
    slug,
    parentTrackSlug: parentSlug,
    title: data.title ?? slug,
    summary: data.summary,
    description: data.description,
    status: data.status,
    publishedAt: data.published_at ?? data.publishedAt,
    updatedAt: data.updated_at ?? data.updatedAt,
    tags: data.tags,
    durationSeconds: data.duration_seconds ?? data.durationSeconds,
    editionName: data.edition_name ?? data.editionName ?? slug,
    notes: data.notes,
    links: data.links,
    credits: data.credits,
    type: data.type,
    artist: data.artist,
    year: data.year,
  };
}

function sortSingles(
  singles: MusicTrackSingleDocV1[]
): MusicTrackSingleDocV1[] {
  return singles.sort((a, b) => {
    const aDate = a.releaseDate ? new Date(a.releaseDate).getTime() : null;
    const bDate = b.releaseDate ? new Date(b.releaseDate).getTime() : null;

    if (aDate && bDate && aDate !== bDate) return bDate - aDate;
    if (aDate && !bDate) return -1;
    if (!aDate && bDate) return 1;

    const aYear = a.year ?? 0;
    const bYear = b.year ?? 0;

    if (aYear !== bYear) return bYear - aYear;

    return a.title.localeCompare(b.title);
  });
}

export async function listPublishedSingles(): Promise<MusicTrackSingleDocV1[]> {
  const snapshot = await musicCollection
    .where("type", "==", "single")
    .where("status", "==", "published")
    .get();

  const singles: MusicTrackSingleDocV1[] = [];

  snapshot.forEach((doc) => {
    const normalized = normalizeSingleDoc(doc);
    if (normalized) singles.push(normalized);
  });

  return sortSingles(singles);
}

export async function getPublishedSingleBySlug(
  slug: string
): Promise<MusicTrackSingleDocV1 | null> {
  const docRef = musicCollection.doc(slug);
  const snap = await docRef.get();
  if (!snap.exists) return null;

  const normalized = normalizeSingleDoc(snap);
  return normalized;
}

export async function listEditionsForTrack(
  trackSlug: string
): Promise<MusicTrackEditionDocV1[]> {
  const editionsRef = musicCollection.doc(trackSlug).collection("editions");
  const snapshot = await editionsRef.get();

  const editions: MusicTrackEditionDocV1[] = [];
  snapshot.forEach((doc) => {
    const normalized = normalizeEditionDoc(doc, trackSlug);
    if (normalized) editions.push(normalized);
  });

  return editions;
}
