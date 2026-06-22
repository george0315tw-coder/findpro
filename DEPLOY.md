# FindPro Open Deploy Guide

## GitHub

Recommended repository root: this folder (`expert-match-mvp`).

Files required at repository root:

- `index.html`
- `app.js`
- `styles.css`
- `admin.html`
- `admin.js`
- `privacy.html`
- `.replit`
- `robots.txt`
- `sitemap.xml`

## Replit

1. Create a new Replit project.
2. Choose `Import from GitHub` if the GitHub repository is ready, or upload this folder as a zip.
3. Replit will use `.replit`.
4. Click `Run`.
5. The site starts with:

```bash
node server.js
```

## Pages

- Frontend: `/index.html`
- Admin: `/admin.html`
- Privacy: `/privacy.html`

## Notes

This MVP stores data in browser `localStorage`. For production, connect the forms to a database and backend auth before collecting real user data.
