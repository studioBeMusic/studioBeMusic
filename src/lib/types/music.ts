export type PublicationStatus =
  | "draft"
  | "in_progress"
  | "published"
  | "archived";

export interface MusicLink {
  label: string;
  href: string;
  note?: string;
}

export interface MusicCredit {
  role: string;
  name: string;
}

export interface BaseMusicDoc {
  slug: string;
  title: string;
  artist?: string;
  type?: string;
  summary?: string;
  description?: string;
  status?: PublicationStatus;
  year?: number;
  releaseDate?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
}

export interface MusicAudioAsset {
  url: string;
  format?: string;
  bitrateKbps?: number;
}

export interface MusicLyrics {
  text: string;
  format?: "plain" | "markdown";
}

export interface MusicRelated {
  journey_entry_slugs?: string[];
}

export interface MusicTrackSingleDocV1 extends BaseMusicDoc {
  durationSeconds?: number;
  isrc?: string;
  context?: string;
  details?: string;
  lyrics?: MusicLyrics;
  audio?: MusicAudioAsset;
  related?: MusicRelated;
  links?: MusicLink[];
  credits?: MusicCredit[];
}

export interface MusicTrackEditionDocV1 extends BaseMusicDoc {
  parentTrackSlug: string;
  editionName: string;
  notes?: string;
  durationSeconds?: number;
  links?: MusicLink[];
  credits?: MusicCredit[];
}

export interface MusicCollectionDocV1 extends BaseMusicDoc {
  trackSlugs: string[];
  links?: MusicLink[];
}

export interface MusicWorkInProgressDocV1 extends BaseMusicDoc {
  intent?: string;
  milestones?: string[];
  relatedTrackSlugs?: string[];
}

export interface MusicEditionSetDocV1 extends BaseMusicDoc {
  baseTrackSlug: string;
  editionSlugs: string[];
  notes?: string;
}

export interface MusicAlbumWorldDocV1 extends BaseMusicDoc {
  siteUrl?: string;
  focus?: string;
  works?: string[];
  links?: MusicLink[];
}
