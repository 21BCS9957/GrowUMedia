# GrowUMedia Web App

## Project Info

This is a React application built with Vite, TypeScript, and Tailwind CSS.

## Local Development

Requirements:
- Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

Run locally:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

## Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

Build the project with:

```sh
npm run build
```

Then deploy the `dist` folder to Vercel, Netlify, GitHub Pages, or any static host.

## Meta Pixel Tracking

Implemented events:
- `PageView` (automatic on load)
- `InitiateCheckout` (CTA/book session button clicks)
- `Schedule` (booking completion event)

Main files:
- `index.html` (base pixel snippet)
- `src/lib/metaPixel.ts` (tracking helpers)
- `src/api/facebook-conversions.ts` (Conversions API example)
- `src/pages/Booking.tsx` (schedule/booking completion tracking)

Notes:
- Keep all Pixel IDs/tokens/event codes in environment variables.
- Do not commit production secrets or access tokens to markdown/docs.

## Marquee Logo Notes

Fixes applied for logo visibility and smooth animation:
- URL-safe image paths for files/folders with spaces
- Consistent responsive logo container sizes
- SVG-specific filter tweaks for contrast
- Overflow/flex structure fixes to avoid clipping
- Stable marquee keyframes and smooth looping
- Image load error handling to hide broken assets

Recommended production cleanup:
- Rename `public/Company Logo/` to a URL-safe folder like `public/company-logos/`.
- Prefer lowercase, hyphenated file names.

## Mobile Marquee Layout

Target behavior:
- Show about 3 logos on mobile devices with smooth infinite scrolling.

Responsive approach:
- Smaller logo widths/heights on narrow screens
- Reduced horizontal gaps/margins for 320px-375px devices
- Slightly slower animation on mobile for readability

## Image Optimization

Case study image optimization completed:
- Reduced total image weight from about 66MB to about 1MB
- Converted large PNG assets to optimized JPEG where appropriate
- Resized to web-friendly dimensions (for example max width around 800px)
- Applied quality compression (around 80%)
- Added lazy loading and resilient image rendering behavior

Related component updates:
- `src/components/CaseStudies.tsx`
- `src/components/OptimizedImage.tsx`

Example optimization command:

```sh
sips -Z 800 -s format jpeg -s formatOptions 80 "input.png" --out "output.jpg"
```

## Production Cleanup Checklist

Before deleting original backups:
- Verify optimized images render correctly across the site
- Run a full QA pass
- Ensure backups exist externally if needed

Optional cleanup examples:
- Remove old backup assets once verified
- Audit other `public/` folders for oversized images
- Monitor bandwidth usage and Core Web Vitals after deployment
