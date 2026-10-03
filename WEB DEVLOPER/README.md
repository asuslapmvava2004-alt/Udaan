# UDAAN Education Portal

A polished, mobile-first educational portal prototype built from the supplied K–12 NCERT/CBSE requirements.

## Included

- UDAAN branding and supplied coaching banner
- Home page with Classes 1–12, latest resources, accessibility highlights
- Browse by class and board
- Search + filters by board, class, subject, resource type
- Chapter/resource reading pages
- YouTube video embed support
- Interactive MCQ quizzes with instant explanations
- Bookmarks and local progress tracking
- Accessibility controls: font size, high contrast, reading font, text-to-speech
- Print-friendly lesson pages
- Admin login and dashboard
- Admin content CRUD: create, edit, delete, draft/review/published states
- Admin role descriptions and settings screen
- Local demo file upload for small documents
- SEO title/description, canonical tag and basic EducationalOrganization schema
- Responsive layout for phones, tablets and desktop

## Demo admin login

Email: `admin@udaan.local`  
Password: `Udaan@123`

This is intentionally a browser-only prototype. The login and content database are stored in localStorage, so changes are not shared with other visitors.

## Turn this into a production website

Recommended production build:

1. Frontend: Next.js/React or the existing UI moved into a framework.
2. API: Node.js/NestJS or Python/Django.
3. Database: PostgreSQL.
4. Auth: Auth.js, Keycloak, Auth0 or another server-side identity provider.
5. Media: S3-compatible object storage + CloudFront/Cloudflare CDN.
6. Search: PostgreSQL full-text search initially; add Elasticsearch/Algolia when needed.
7. Admin roles: Super Admin, Content Editor, QA Reviewer, Webmaster.
8. Background jobs: OCR, metadata extraction, syllabus mapping and AI-generated practice questions with human review.
9. Deployment: Vercel/Cloudflare Pages for frontend + managed backend/database, or a full AWS/GCP deployment.
10. Monitoring: error tracking, uptime checks, backups, audit logs and security alerts.

## Suggested production data model

- `users`
- `roles`
- `permissions`
- `content`
- `boards`
- `classes`
- `subjects`
- `chapters`
- `resources`
- `videos`
- `files`
- `quizzes`
- `quiz_questions`
- `quiz_attempts`
- `bookmarks`
- `progress`
- `comments`
- `audit_logs`
- `site_settings`

## Content rights

Use official NCERT/CBSE material only according to the licence, website terms and applicable law. Keep source attribution where required. Do not upload third-party answer keys, books, scans or videos merely because they are available online.

## Deployment note

This folder is a static web app. It can be opened directly in a browser for preview. A public multi-user site with shared admin updates requires a backend/database and secure server-side authentication.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `udaan-banner.jpg`
- `README.md`
