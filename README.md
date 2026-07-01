# Dhyanendra Singh — Portfolio Site

A single-page interactive portfolio hosted on GitHub Pages.

## How to deploy

1. Create a new GitHub repo named `DhyanendraSinghSikarwar.github.io`
2. Push all files from this folder to that repo's `main` branch
3. Go to repo **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save
4. Your site will be live at: `https://DhyanendraSinghSikarwar.github.io`

## Add your profile photo

- Save a square/portrait photo as `assets/profile.jpg`
- The site will display it in the header

## Customize content

All content is in `data/*.js` files — edit those to update the site:

| File | What to edit |
|---|---|
| `data/personal.js` | Name, title, contact links |
| `data/overview.js` | Bio, quick facts, competency cards |
| `data/trajectory.js` | Career timeline (work + education) |
| `data/faqs.js` | FAQ accordion questions & answers |
| `data/recommendations.js` | Testimonials and references |

## Add recommendations

When you collect LinkedIn recommendations, add them to `data/recommendations.js`:

```js
const RECOMMENDATIONS_DATA = [
  {
    author: "Colleague Name",
    title: "Their Title at Company",
    relationship: "We worked together at ...",
    avatarImage: "assets/colleague.jpg",
    text: "Their recommendation text.",
    linkedin: "https://www.linkedin.com/in/their-profile"
  }
];
```

Place avatar images in `assets/` and reference by filename.

## Highlight syntax (in data files)

Inside text fields:
- `*number*` → colored bold figure
- `^skill^` → highlighted background
- `` `software` `` → pill badge
