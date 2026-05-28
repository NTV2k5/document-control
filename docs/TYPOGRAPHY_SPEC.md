# Typography Specification

Reference: `.playwright-mcp/capture/size_typography.png`

## Breakpoints

| View                | Breakpoint  | Range          |
| ------------------- | ----------- | -------------- |
| **Mobile**          | default     | < 768px        |
| **Middle (Tablet)** | md -> < 2xl | 768px - 1535px |
| **Desktop**         | 2xl         | >= 1536px      |

---

## CSS Classes (defined in `src/styles/global.css`)

### Typography Classes

Ordered from larger to smaller font size, based on the desktop (`2xl`) spec.

| Class                    | Mobile (<768px)          | Middle (768-1535px)      | Desktop (>=1536px)        |
| ------------------------ | ------------------------ | ------------------------ | ------------------------- |
| `.year-number`           | 28px / fw-400 / lh-1.1 + mb-unit | 28px / fw-400 / lh-1.1 + mb-unit | 28px / fw-400 / lh-1.1 + mb-unit |
| `.statistic-number`      | 64px / fw-400 / lh-1.1 + mb-unit | 64px / fw-400 / lh-1.1 + mb-unit | 64px / fw-400 / lh-1.1 + mb-unit |
| `.typo-headline`         | 32px / lh-1.1 + mb-40px | 32px / lh-1.1 + mb-40px | 32px / lh-1.1 + mb-40px  |
| `.typo-testimonial`      | 28px / lh-1.1 + mb-28px | 24px / lh-1.1 + mb-28px | 28px / lh-1.1 + mb-28px  |
| `.typo-article-title`    | 30px / fw-300 / lh-1.1 + mb-28px | 44px / fw-300 / lh-1.1 + mb-28px | 50px / fw-300 / lh-1.1 + mb-28px |
| `.typo-content-title`    | 32px / fw-500 / lh-1.1 medium | 36px medium         | 48px medium               |
| `.typo-hero-quote`       | 20px                     | 28px                     | 40px                      |
| `.typo-tile-label`       | 28px + mb-28px           | 28px + mb-28px           | 28px + mb-28px            |
| `.typo-label-icon`       | 20px fw-300 + mb-28px    | 20px fw-300 + mb-28px    | 20px fw-300 + mb-28px     |
| `.typo-section-tagline`  | 22px + mb-28px           | 26px + mb-28px           | 28px + mb-28px            |
| `.typo-h3`               | 24px                     | 28px                     | 28px                      |
| `.typo-event-title`      | 26px medium + mb-28px    | 26px medium + mb-28px    | 26px medium + mb-28px     |
| `.typo-text-overlay`     | 20px bold + mb-28px      | 20px bold + mb-28px      | 24px bold + mb-28px       |
| `.typo-person-name`      | 20px fw-400 + mb-unit    | 20px fw-400 + mb-unit    | 20px fw-400 + mb-unit     |
| `.typo-navigation`       | 18px                     | 22px                     | 24px                      |
| `.typo-content-subtitle` | 20px / lh-1.5 + mb-28px | 20px / lh-1.5 + mb-28px | 20px / lh-1.5 + mb-28px   |
| `.typo-content-description` | 15px / lh-1.5 + mb-28px | 15px / lh-1.5 + mb-28px | 15px / lh-1.5 + mb-28px |
| `.typo-event-subtitle`   | 18px / lh-1.5 + mb-28px | 15px / lh-1.5 + mb-28px | 20px / lh-1.5 + mb-28px   |
| `.typo-hero-subtitle`    | 20px                     | 20px                     | 20px                      |
| `.typo-prefix-suffix`    | 16px                     | 18px                     | 18px                      |
| `.typo-button`           | 14px / lh-1              | 14px / lh-1              | 14px / lh-1               |

> **`.statistic-number`** — dùng cho con số lớn độc lập trong stat blocks (`#1`, `25%`, `96.2%`).
> Components: `ExcellenceInAction.tsx`, `StatsSection.tsx`, `MetricGrid.tsx`.
> Không dùng `typo-headline` hay `typo-content-title` cho số liệu stat.

### Layout Classes

| Class          | Value                                          |
| -------------- | ---------------------------------------------- |
| `.section-py`  | padding-top/bottom: 16px (mobile), 32px (md+) |
| `.headline-mb` | margin-bottom: 28px                            |

---

## Generic (All Views Same)

| Element                    | Desktop (2xl) | Middle (md) | Mobile |
| -------------------------- | ------------- | ----------- | ------ |
| **Button Height**          | 44px (`h-11`) | Same        | Same   |
| **Button Font**            | 14px / lh-1   | 14px / lh-1 | 14px / lh-1 |
| **Block Section Padding**  | 32px (`py-8`) | Same        | Same   |
| **Headline Margin Bottom** | 28px | Same | Same |

## Hero Banner

| Element       | Desktop (2xl) | Middle (md) | Mobile |
| ------------- | ------------- | ----------- | ------ |
| **Sub title** | 20px          | 20px        | 20px   |

## Standard Banner

| Element                  | Desktop (2xl)  | Middle (md)     | Mobile |
| ------------------------ | -------------- | --------------- | ------ |
| **Headline**             | 56px           | 42px            | 32px   |
| **Content Title (bold)** | 56px           | 36px            | 32px   |
| **Content Subtitle**     | 18px + mb-24px | 18px + mb-24px  | 18px + mb-24px |
| **Prefix/Suffix**        | 18px           | 18px            | 16px   |
| **H3**                   | 28px           | 28px            | 24px   |
| **Text Overlay**         | 24px Bold      | 20px Bold       | 20px Bold |

---

## SectionIntro Pattern

**Pattern name**: `SectionIntro` - any block with a section heading + description (+ optional CTA button).

### When to Apply

> **Trigger**: Any new or modified component that renders an `h2` heading immediately followed by body text **must** use this pattern. Do not write font-size or margin classes before checking this rule.

Common signals:

- A block "introduces" a section (title + 1-3 sentences of context)
- The heading and description sit together without other elements between them

### Element -> Class Mapping

| Element      | Class                                | Notes                                                  |
| ------------ | ------------------------------------ | ------------------------------------------------------ |
| Title (`h2`) | `.typo-headline`                     | Includes `mb-40px` built-in - do NOT add extra `mb-*` |
| Tagline      | `.typo-section-tagline`              | Optional - lead phrase between title and description   |
| Description  | `.typo-content-subtitle`             | Includes `mb-28px` built-in. Optional                  |
| CTA button   | `variant="king-primary" size="king"` | Optional                                           |

### Reference Implementation

```tsx
{ /* SectionIntro pattern - copy this, adjust colors only */ }
<h2 className="typo-headline  text-brand uppercase">
  {title}
</h2>;

{ tagline && (
  <p className="typo-section-tagline text-brand">
    {tagline}
  </p>
); }

{ description && (
  <p className="typo-content-subtitle text-gray-600">
    {description}
  </p>
); }

{ cta && (
  <a href={cta.url} target="_blank" rel="noopener noreferrer">
    <Button variant="king-primary" size="king">
      {cta.label}
      <ArrowRight className="size-5" />
    </Button>
  </a>
); }
```

Full standalone implementation: `src/components/sections/TitleDescLink.tsx`

### Anti-patterns

- Do NOT add `mb-*` or `mt-*` between title and description - spacing is owned by the typo classes
- Do NOT use `space-y-*` on the wrapper div - causes double gap (class mb + space-y mt)
- Do NOT hardcode font sizes like `text-[36px]` or `text-4xl` - always use `typo-headline`
- Do NOT add a separate `mb-*` after removing `space-y-*`

### Components Using This Pattern

> Keep this list updated when adding new components.

- `TitleDescLink.tsx` - standalone centered block (reference)
- `OverlaySplitSection.tsx` - split text + image layout

**Note on `TitleDescLink`:** `space-y-*` was removed from wrapper. All spacing is now owned by typo classes.

---

## Button Component

- `src/components/ui/button.tsx`
  - Base font: `text-[14px]`
  - Default height: `h-11` (44px)

### King Variants

| Variant          | Styles |
| ---------------- | ------ |
| `king-primary`   | `inline-flex flex-row flex-nowrap items-center gap-3 rounded-full border-2 border-white bg-brand/70 px-8 text-white hover:bg-brand/90` |
| `king-secondary` | `inline-flex flex-row flex-nowrap items-center gap-3 rounded-full border-2 border-white bg-[#7F8D9B] px-8 text-white hover:bg-[#6a7683]` |

**Usage Notes:**

- Do NOT add redundant classes when using king variants: `flex`, `gap-*`, `rounded-full`, `bg-*`, `text-*`
- Only add extra classes for: `min-w-*`, `justify-center`, custom hover colors

---

Last updated: 2026-04-08
