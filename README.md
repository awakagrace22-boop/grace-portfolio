# Grace Awaka: portfolio website

A hand-coded, no-build static site: plain HTML, CSS and JavaScript. No framework and nothing to install. Vercel serves it as-is.

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| All work, with filters | `work.html` |
| Case study (one template for every project) | `project.html?p=<slug>` |
| About | `about.html` |
| Contact, with a working form | `contact.html` |
| Not found | `404.html` |

## Editing content and images
**Almost everything lives in `js/data.js`.** That covers projects, text, stats, services, experience, tools, socials, email and your booking link.

- **Change an image:** put your file in `assets/images/` (create the folder) and swap the URL in `data.js` for the path, e.g. `"assets/images/ace-bleach-1.jpg"`. In each project, the first image in `images` is the cover and the rest become the gallery.
- **Projects with no images yet** (Amara Deodorant, ACE Air Freshener, TuQio Magazine, Melto) show a character placeholder until you add some.
- **Add a project:** copy one block inside `PROJECTS`, give it a new `slug`, and it shows up on the Work page automatically. Set `featured: true` to put it on the homepage too (the first 6 featured ones show).
- **Booking link:** set `bookingUrl` to your real Cal.com or Calendly link.
- **Homepage photo:** `images.heroSticker`. **About photo:** `images.portrait`.
- **CV:** replace `assets/Grace_Awaka_Resume.pdf`, keeping the same file name.

## Contact form
The form sends to `otsimigrace@gmail.com` through FormSubmit, which is free and needs no account. **The first time** someone submits the form, FormSubmit emails you an activation link. Click it once and every message after that arrives in your inbox. If sending ever fails, the form offers the visitor a pre-filled email link instead.

## Deploy to Vercel
1. Make a new GitHub repo and upload everything in this folder, with `index.html` at the top level.
2. Go to vercel.com → **Add New → Project** → import the repo.
3. Framework preset: **Other**. Leave the build command and output directory empty. Click **Deploy**.

`vercel.json` turns on clean URLs (`/work` instead of `/work.html`). `404.html` is picked up automatically.

## Preview on your computer
Run `npx serve .` in this folder, or just double-click `index.html`.

## Fun bits
- Click or tap any character to make it bounce. Their eyes follow your cursor.
- The speaker button in the nav turns on little sound effects. It's off by default and the setting is remembered.
- The intro animation that stocks the shelves only plays on the first visit in a session.
- Everything respects the "reduce motion" accessibility setting.
