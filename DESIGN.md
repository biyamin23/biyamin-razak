# Design direction

Source of direction: the user's own reference image (hand-drawn portfolio mock),
plus two Dribbble references the user chose:
- Neubrutalism landing page (UrbCraft Studios): thick black outlines, hard offset
  shadows, flat saturated fills.
- Silly Doodles (Filip Greš): loose black line art with a single spot colour.

## Identity
A Malaysian MRSM teacher who builds things with AI. The page should feel like a
teacher's marked-up notebook page: confident, playful, a bit messy on purpose.

## Palette
| Token  | Hex     | Job |
|--------|---------|-----|
| paper  | #FFF8E8 | page background (exercise-book paper, from the reference) |
| ink    | #000000 | every outline, hard shadow and body text |
| brand  | #2F5BFF | logo, links, "Web Apps", primary contact button |
| sun    | #FFD43B | highlight marker: underline, stickers, main buttons |
| grape  | #C3B5FF | AI Videos |
| mint   | #8FE3A0 | AI Games |
| peach  | #FFC27A | eBooks |
| bubble | #FF9BD2 | eBooks sticker in hero |
| sky    | #BFD6FF | hero blob, AI Web Apps card |

The pastel colours are a code, not decoration: one colour per kind of creation,
repeated between the hero stickers and the creation cards.

## Type
- Bricolage Grotesque (variable, opsz/wdth/wght): name, headings, body.
  Chunky and slightly quirky at display sizes, calm at text sizes.
- Caveat Brush: handwritten marker voice for the tagline, stickers and notes.

## Shape
- Outlines: 3px black. Hard shadows: 5px 5px 0 black (3px on small items).
- Radius by hierarchy: buttons are pills, cards 18px, stickers 10px.
- Illustrations: black line art with the colour fill printed slightly off
  register (fill shifted a few px), like a cheap two-colour print.

## Motion
One moment only: on load the yellow underline draws itself and the hero
stickers pop in. Buttons press down on hover/active (shadow shrinks).
`prefers-reduced-motion` turns all of it off.

## Adjustments from the reference (approved by user: "You can adjust")
- Middle-dot pill above the name replaced by a handwritten note with an arrow.
- Arrows only where they say where you go (down arrow = scrolls the page).
- "Learn More" renamed to say what it does ("About me").
- Creation cards hold different content (real links, coming-soon lists), so
  they are not four copies of one template.
