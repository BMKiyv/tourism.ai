# Track: Migrate Images from Webflow to Payload CMS

## Problem Statement
The current import process (`src/import-webflow.ts`) only handles text data. Fields like `img` (Blogs), `logo` (Orders), and `image` (Team) are not being populated with media. The source images are likely linked via URLs in the Webflow CSV exports.

## Objectives
- Extract image URLs/filenames from Webflow CSV files.
- Ensure images are downloaded (if missing) or matched to existing files in `webflow/images`.
- Upload images to Payload CMS `media` collection.
- Link the created media records to corresponding items in `blogs`, `orders`, and `team` collections.

## Success Criteria
- Media items are created in Payload with correct metadata (alt text).
- Blog, Order, and Team items have their image/logo fields correctly linked to the new media IDs.
- No duplicate media items for the same source file.
