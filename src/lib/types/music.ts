export type PublicationStatus = "draft" | "in_progress" | "released" | "archived";

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
  summary?: string;
  description?: string;
  status?: PublicationStatus;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
}

export interface MusicTrackSingleDocV1 extends BaseMusicDoc {
  durationSeconds?: number;
  isrc?: string;
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
