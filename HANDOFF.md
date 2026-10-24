# Handoff — Chhutkan Beawar

**Updated:** 24 Oct 2026 (Asia/Calcutta)

## Who does what

- Agent: builds the Chhutkan Beawar clothing brand website.
- User: reviews the site and PR for their friend.

## Working style

- Static site (HTML / CSS / JS). Keep it simple — no heavy framework.
- Brand: Chhutkan Beawar — baby & kids clothing + toys.
- Preserve contact facts from the live site: WhatsApp/phone `+91 98870 07788`, email `chhutkanbeawar@gmail.com`.
- Store: Jain General, 35–36 First Floor, Laxmi Market, Pali Bazar, Beawar, Rajasthan 305901. Map opens Google Maps on click.
- Design: teal + soft sky palette, Fraunces + Outfit; full-bleed hero; category chips + filter/sort on shop.
- Sample product catalog in `app.js` (placeholder Unsplash photos + WhatsApp “Ask” links).

## Where we are

- Feature branch `cursor/chhutkan-beawar-site-e95d` replaces the old p5.js game with the Chhutkan site.
- Working: hero, shop with category / filter / sort, visit map → Google Maps, WhatsApp/call/email contact.
- Verified with Puppeteer: category, filter, sort, and map hrefs behave correctly.

## Plan

1. ~~Scaffold landing + shop + visit/map + contact.~~
2. ~~Wire category / filter / sort on the product grid.~~
3. ~~Make the map open Google Maps.~~
4. ~~Polish visuals; commit, push, open PR.~~
5. Later (if asked): swap sample products for real catalog photos/prices, deploy (GitHub Pages / Netlify).

## Files that matter

- `index.html` — page structure
- `styles.css` — brand look
- `app.js` — products, filter/sort/category, map URL
- `AGENTS.md` / `HANDOFF.md` — agent notes

## Do not

- Do not restore the old p5 game as the homepage.
- Do not invent a different phone/email than the live brand site.
- Do not put cards/stats clutter in the hero.

## Next

Wait for user feedback on look, products, or deploy target. Optionally replace sample Unsplash images with real Chhutkan product photos.
