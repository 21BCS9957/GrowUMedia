# Meta Pixel Integration Setup

## Overview
This implementation includes Facebook Meta Pixel tracking with the following events:

### Events Implemented:
1. **PageView** - Automatically tracked on all pages
2. **InitiateCheckout** - Tracked when users click any "Book Strategy Session" button
3. **Schedule** - Tracked when users complete booking (custom event)

## Configuration Details:
- **Pixel ID**: `690851557108015`
- **Access Token**: `EAAJ8G7uTtgoBP4RFlTfgZBZBAILGzBS14h3sxzV7wUFhLVJWvp1jW6Cv6ZCPRU4JKZBaCZAVDFlyZB0gsKhdKf5qskQZCym9gldGV1lHbrO4ueDjWsxKLaJTYe8xao9bI70OweJEmiVqvyi8wmNUKNj2f7mH9wEWlP6AiKcH0ZALnAy9nqAaxRYSWIN3J9xYCk8ziAZDZD`
- **Test Event Code**: `TEST47938`

## Files Modified:

### Core Files:
- `index.html` - Added Meta Pixel base code (script in head, noscript in body)
- `src/lib/metaPixel.ts` - Utility functions for tracking events
- `src/api/facebook-conversions.ts` - Server-side Conversions API example

### Components Updated (InitiateCheckout tracking):
- `src/components/CTA.tsx`
- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`
- `src/components/Process.tsx`
- `src/components/Services.tsx`
- `src/components/CaseStudies.tsx`
- `src/components/CoreServices.tsx`
- `src/components/FAQ.tsx`
- `src/components/Footer.tsx`

### Pages Updated:
- `src/pages/Booking.tsx` - Added Schedule event tracking

## Event Tracking:

### 1. PageView
- Automatically tracked on page load
- Implemented in `index.html`

### 2. InitiateCheckout
- Triggered when any booking button is clicked
- Tracks: content_name, content_category, value, currency
- All CTA buttons now include this tracking

### 3. Schedule (Custom Event)
- Triggered when booking is completed
- Listens for iframe messages from reclaim.ai
- Tracks successful booking completion

## Testing:
- All events include the test event code `TEST47938`
- Check Facebook Events Manager to verify events are firing
- Console logs show when events are tracked

## Server-Side Implementation (Optional):
For better tracking reliability, implement the Conversions API on your backend:

1. Create an API endpoint at `/api/facebook-conversions`
2. Use the example code in `src/api/facebook-conversions.ts`
3. Ensure proper IP address and user agent forwarding
4. Handle Facebook cookie values (_fbp, _fbc)

## Verification:
1. Open browser developer tools
2. Check console for "Meta Pixel: Tracked [EventName]" messages
3. Verify in Facebook Events Manager
4. Test with Facebook Pixel Helper browser extension

## Notes:
- Events are tracked both client-side (pixel) and prepared for server-side (Conversions API)
- All sensitive data (access tokens) should be moved to environment variables in production
- The Schedule event detection may need adjustment based on reclaim.ai's actual callback structure