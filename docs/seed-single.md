# Seed single checklist

Required fields for `music_tracks/{trackSlug}`:
- `schema_version`: `1`
- `slug`: `<trackSlug>`
- `title`: string
- `artist`: `"LYNN"` | `"LAGHU"`
- `type`: `"single"`
- `status`: `"published"`
- `year`: number
- `context`: string (required)
- `audio`: `{ source: "firebase_storage", url: "<storage download url>" }`
- `release_date`: Firestore Timestamp (required for ordering; recommended for display)

Quick reference JSON:
```json
{
  "schema_version": 1,
  "slug": "example-track",
  "title": "Example Track",
  "artist": "LYNN",
  "type": "single",
  "status": "published",
  "year": 2025,
  "context": "What to listen for or where this piece sits in the journey.",
  "audio": {
    "source": "firebase_storage",
    "url": "https://firebasestorage.googleapis.com/v0/b/.../o/example-track.mp3?alt=media"
  },
  "release_date": {
    "_seconds": 1735689600,
    "_nanoseconds": 0
  }
}
```
