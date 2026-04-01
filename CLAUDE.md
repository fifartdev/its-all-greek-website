# CLAUDE.md — Its All Greek To Me Website

## Project overview

Next.js 16 (App Router) website for **It's All Greek To Me** — a Greek tour company by XIKE Travel. The site features tour listings, a contact form, and a private transfer booking form.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend (`resend` package)
- **Icons:** `lucide-react`
- **Utilities:** `clsx`

## Project structure

```
src/
  app/
    api/
      contact/route.ts    # Contact form API endpoint
      transfer/route.ts   # Transfer booking API endpoint
    contact/page.tsx      # Contact page
    layout.tsx
    page.tsx              # Home page
  components/
    ContactContent.tsx    # Contact page form + info
    TransferForm.tsx      # Transfer booking form
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    AboutSection.tsx
    ToursSection.tsx
    BokunModal.tsx
    SocialIcons.tsx
  data/
    tours.ts              # Tour data + transferLocations array
  lib/
    rate-limit.ts         # In-memory IP-based rate limiter
```

## Environment variables

```
RESEND_API_KEY          # Resend API key
RESEND_FROM_EMAIL       # Sender address (e.g. noreply@itsallgreek2me.tours)
RESEND_CONTACT_TO       # Recipient for contact form emails
RESEND_TRANSFER_TO      # Recipient for transfer request emails
```

## Anti-spam

Both API routes implement three layers:
1. **Rate limiting** — `src/lib/rate-limit.ts`, 3 requests per IP per 15 minutes
2. **Honeypot** — hidden `_hp` field; non-empty value silently discards the submission
3. **Timing check** — `_t` timestamp sent from client on mount; submissions < 3s after load are silently discarded

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```
