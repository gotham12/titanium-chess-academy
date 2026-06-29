# Titanium Chess Academy

Premium marketing website for [Titanium Chess Academy](https://www.titaniumchessacademy.com) — year-round chess lessons and Summer Camp 2026 in Shrewsbury, MA.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, split text, spotlight cards)
- Lenis smooth scroll

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish to GitHub

From this folder:

```bash
gh auth login
gh repo create titanium-chess-academy --public --source=. --remote=origin --push --description "Premium website for Titanium Chess Academy"
```

If the repo name is taken, pick another name and update the remote:

```bash
gh repo create YOUR-USERNAME/titanium-chess-academy --public --source=. --remote=origin --push
```

## Deploy to Vercel (recommended)

```bash
npx vercel login
npx vercel --prod
```

Vercel will print a live production URL such as `https://titanium-chess-academy.vercel.app`.

You can also import the GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deploys on every push.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, programs, camp preview, founder, reviews |
| `/summer-camp` | Summer Camp 2026 sessions, levels, tuition |
| `/register` | Enrollment form |

## Content sources

- [Titanium Chess Academy](https://www.titaniumchessacademy.com)
- [Summer Camp 2026](https://www.titaniumchessacademy.com/smc.html)
- Academy flyers (Shrewsbury, MA · 3 days/week · 2 hours/day)

## Contact

- **Email:** titaniumchessacademy@gmail.com
- **Location:** Shrewsbury, MA · Worcester County
- **Promo:** `CHESS` for 10% off by June 27th
