# اسکالپ یاسمین · Scalp Yasamin

A single responsive, Persian-first “Coming Soon” banner for Scalp Yasamin. It is a statically exported Next.js page with visible service and location details, app-friendly contact links, crawlable metadata, and local-business structured data. It has no scrolling sections, booking form, database, or server-side features on desktop.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create the static export with `npm run build`; the deployable files are written to `out/`.

## Business details

Edit [`src/config.ts`](src/config.ts) to update the name, services, email, business hours, address, map link, and social handles. The supplied brief and printed business cards contain no verified phone number, so the page does not invent one. WhatsApp is shown as an identifier without a fabricated `wa.me` link.

The exact Scalp Yasamin logo is used from `public/brand/scalp-yasamin.svg`; the provided PNG is used for image metadata and platform icons. The page is a compact, paper-style announcement with a green contact panel and no background photography. Desktop content fits in one view at standard laptop sizes; smaller screens and enlarged text can scroll naturally without clipping.

## Search and deployment

The static page outputs its Persian content in HTML, canonical URL, Open Graph tags, `robots.txt`, `sitemap.xml`, and `HealthAndBeautyBusiness` JSON-LD. Set `NEXT_PUBLIC_SITE_URL` to the public canonical origin before building if it differs from `https://scalpyasamin.com`. Set `NEXT_PUBLIC_INDEXING=false` only when you intentionally want to block crawlers; its default is indexable.

The generated `out/` folder can be deployed to a static host. Search engines can crawl it only after the public deployment and domain DNS are working. Submit `https://scalpyasamin.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools after launch to request discovery; indexing and ranking timing are controlled by those search engines.
