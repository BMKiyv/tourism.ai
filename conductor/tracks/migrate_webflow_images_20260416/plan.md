# Implementation Plan - Webflow Image Migration

## Phase 1: Research & Discovery
- [x] Read Blogs CSV to identify image columns (`img`).
- [x] Read Orders CSV to identify logo columns (`logo of order`).
- [x] Find Team data (found in `webflow/our-team.html` instead of CSV).
- [x] Check `public/webflow/images` for existing assets.
- [x] Verify if images are accessible via URLs from CSV.

## Phase 2: Tooling & Utilities
- [x] Create `src/lib/media-utils.ts`:
    - `getOrCreateMediaFromUrl`: Downloads image and uploads to Payload.
    - `getOrCreateMediaFromLocalPath`: Uploads local file to Payload.

## Phase 3: Migration Execution
- [x] Update `importOrders` in `src/import-webflow.ts` to migrate logos.
- [x] Update `importBlogs` in `src/import-webflow.ts` to migrate images.
- [x] Implement `importTeamFromHtml` in `src/import-webflow.ts`.

## Phase 4: Validation
- [x] Run the migration script and verify media presence (512 items created).
- [x] Check relationships in Blogs/Orders/Team in Payload Admin.

## Phase 5: English Content Localization (Next Step)
- [ ] Implement `importEngBlogs` to update existing blogs with English titles, announcements, and content.
- [ ] Implement `importEngDepartments` to update existing departments with English descriptions.
