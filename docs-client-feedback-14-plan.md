# Client Feedback 14 — Implementation Plan

Source: `client -feedback 14.docx` (Woodlands root folder).
Site root: `Woodlands Dentistry Design Proposal/` (all paths below are relative to this folder).

Note: the source doc also contains a mailbox email/password for `support@wc4d.co.uk` — not reproduced here, not required for any task below.

---

## 1. Content changes (copy/text edits within existing pages)

1. **`composite-bonding.html`** — add a closing point about teeth grinding: mention that where a dentist identifies grinding, a gum shield/nightguard may be recommended.
2. **`root-canal-treatment.html`** — remove the "Microscope-Assisted Endodontics for Greater Visibility" section entirely. Replace with new copy:
   - Heading: "High-End Magnification for Greater Precision"
   - Body: "For root canal treatments, we use high-end dental magnification to provide an enhanced, detailed view of the tooth and its intricate root canal anatomy. This allows us to identify and treat canals with greater precision and care, particularly when dealing with complex or challenging cases."
   - Replace every other mention of "dental microscope" on this page with "high-end magnification loupes."
3. **`hygiene-services.html`** — currently shows Composite Bonding content by mistake; replace with correct hygiene copy. Add the full AIR‑N‑GO® Airflow Hygiene section (what it is, what it helps with, gum health, implants, comfort, vs traditional polishing, FAQs) — full text is in the source doc, emphasize patient comfort and effective stain removal for SEO.
4. **`veneers.html`** — merge in E.max/All-Ceramic Veneers content alongside existing porcelain veneer copy (why choose E.max, strength/translucency claims with Ivoclar citation, who benefits, "your smile designed around you" close). Full text in source doc.
5. **`smile-makeovers.html`** — add a mention of E.max/All-Ceramic veneers alongside porcelain veneers as an available option.
6. **`preventive-dentistry.html`** — add full "Fissure Sealants" subsection (why fissures need protecting, who benefits, treatment steps, FAQs, children's section, closing CTA). Full text in source doc.
7. **`general-dentistry.html`** — add two new treatment write-ups:
   - "Restorative Dentistry" (composite / glass ionomer / resin-modified glass ionomer / amalgam fillings, which material is right for you). Full text in source doc.
   - Point this entry at the existing **`restorative-dentistry.html`** page (currently a stub) and populate that page with the same content.
8. **`dentures.html`** — populate with the full "Dentures & Tooth Replacement" copy (complete acrylic, partial acrylic, cobalt chrome, Valplast flexible, which type is right for you, getting used to dentures, care). Full text in source doc. Link from `general-dentistry.html`.
9. **`technology.html`** — add three device write-ups:
   - Dentsply Sirona Axano treatment chair ("A Modern Digital Treatment Centre", "Designed Around You")
   - Orthophos SL 3D CBCT scanner ("Digital 3D Imaging")
   - Acteon OPUS® air polisher / ultrasonic scaler
   Full text for all three is in the source doc.
10. **`laser-dentistry.html`** — populate the stub page with full "Laser Dentistry & Gum Treatments" content: overview, "What is laser dentistry?", Laser Crown Lengthening, Laser Gingivectomy, Laser Frenectomy, benefits, "Is it painful?", aftercare, "Is it right for me?". Full text in source doc.
11. **`referrals.html`** — add copy for two new referral types: CBCT Referral and OPG Referral (alongside existing referral options).
12. **`contact.html`** — extend the "Find Us" section already added (see 2026-09-14 work): rename/add sub-heading "Directions & Parking" above or alongside "Find Us", add closing line "New patients and families are warmly welcome," and Book an Appointment / Call Us CTAs beneath the section.

## 2. Image changes

1. **`technology.html`** — source/insert imagery for the three new device write-ups. Until the practice supplies its own photos, use the manufacturer reference material as placeholders (clearly marked as provisional so they're easy to swap later):
   - Axano chair: product photos from the Dentsply Sirona Axano page, brochure download
   - CBCT: product photos from the Orthophos S / Axeos pages
   - OPUS airflow: product photos from the Acteon OPUS page
2. **`periodontal-gum-treatments.html`** — the current hero/section image depicts dental trauma, not periodontal treatment. Replace with an accurate periodontal/gum-treatment image.
3. **`laser-dentistry.html`** — no client photos yet; use a provisional stock/reference image for now and flag the section for a photo swap once the client sends their own.
4. **Treatment pages (site-wide)** — source a small icon/illustration per treatment for the redesigned treatment menu (see Structure §3). Style must stay consistent, premium/elegant — not clinical or generic — across every treatment page's menu.

## 3. Structure changes

1. **`treatments.html`** (and nav) — add a new "Laser Treatments" category/tab with three sub-items: Laser Frenectomy, Laser Gingivectomy, Laser Crown Lengthening, each linking into the relevant anchor/section of `laser-dentistry.html`.
2. **Treatment menu layout (site-wide, all treatment listing pages)** — switch the treatment menu from plain text rows to an icon/illustration-led layout (client's preferred "version 2" of the two menu mockups). Apply consistently across every page that lists treatments.
3. **`facial-rejuvenation.html`** + nav/menu — remove the "Facial Rejuvenation" entry from the Facial Aesthetics section entirely (nav link, menu card, and cross-links from other pages).
4. **`smile-rehabilitation.html`** + `dental-implants.html` — remove the "Smile Rehabilitation" subsection from Dental Implants (duplicate of Cosmetic Dentistry → Smile Makeovers); redirect/remove its nav entry.
5. **`contact.html`** — add structural elements to the Find Us section: a "📍 Find Us on Google Maps" CTA button and an "Open in Waze" link (`https://www.waze.com/live-map/directions`), sitting below the existing map embed/cards.
6. **`referrals.html`** — add CBCT Referral and OPG Referral as new referral-type cards/options in the existing referral form structure.
