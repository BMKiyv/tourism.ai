# Plan - Synchronize Media Filenames with Disk

## Objective
Update the `media` table in the database to match the shortened filenames currently on disk in the `public/media/` directory.

## Strategy: Suffix Matching
Filenames on disk were shortened by removing characters from the beginning. We will match database filenames with disk filenames by:
1. Normalizing both sets of names (URL decoding, replacing spaces with underscores/dashes, lowercasing).
2. Finding the disk filename that is a suffix of the database filename (after removing the Payload hash prefix if present).
3. Selecting the longest matching suffix if multiple matches exist.

## Implementation Steps

### 1. Data Collection
- Fetch the complete list of records (id, filename) from the `public.media` table.
- List all actual files in the `public/media/` directory.

### 2. Matching Logic
- Create a Python script `reconcile_media.py` to perform the suffix matching.
- The script will handle URL encoding and various common naming variations.

### 3. Verification
- Generate a report showing `[ID] Current Filename -> New Filename`.
- Present the report for final user approval before applying changes.

### 4. Database Update
- Generate and execute `UPDATE public.media SET filename = '...' WHERE id = ...;` statements for all confirmed matches.

## Verification & Testing
- Verify all 512 media items have filenames that exist on disk.
- Confirm Payload CMS can correctly resolve and serve the assets.
