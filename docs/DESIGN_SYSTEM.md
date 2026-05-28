# Smart Data Hub — Design System Documentation

> This document covers all 3 layers of the Design System for the **Smart Data Hub** project, built on the [Next.js Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) with **Tailwind CSS v4**.

---

## Layer 1 — Design Tokens

Tokens are the single source of truth for every visual decision. They are defined in `src/styles/global.css` using Tailwind v4's `@theme` directive and mapped to CSS variables so they are accessible everywhere.

### Colors

| Token | CSS Variable | Usage |
|---|---|---|
| `--color-brand-primary` | `hsl(221 83% 53%)` | Primary blue — CTAs, active states, links |
| `--color-brand-primary-hover` | `hsl(221 83% 45%)` | Hover state of primary |
| `--color-status-success` | `hsl(142 71% 45%)` | Success badges, positive indicators |
| `--color-status-warning` | `hsl(38 92% 50%)` | Pending/warning states |
| `--color-status-danger` | `hsl(0 84% 60%)` | Errors, destructive actions |
| `--color-neutral-50` | `hsl(210 40% 98%)` | Page background |
| `--color-neutral-100` | `hsl(210 40% 96%)` | Card surface, muted backgrounds |
| `--color-neutral-500` | `hsl(215 16% 47%)` | Secondary text, muted foreground |
| `--color-neutral-900` | `hsl(222 47% 11%)` | Primary text |

### Typography

| Token | Value | Usage |
|---|---|---|
| `--font-sans` | `'Inter', sans-serif` | All body and UI text |
| `--font-size-xs` | `0.75rem / 12px` | Labels, captions, badges |
| `--font-size-sm` | `0.875rem / 14px` | Body text, table cells |
| `--font-size-base` | `1rem / 16px` | Default body |
| `--font-size-lg` | `1.125rem / 18px` | Section headings |
| `--font-size-xl` | `1.25rem / 20px` | Card titles |
| `--font-size-2xl` | `1.5rem / 24px` | Page headings |
| `--font-size-3xl` | `1.875rem / 30px` | Metric numbers (KPIs) |

### Spacing (4px grid)

All spacing follows a **4px base grid**. Use Tailwind's built-in scale: `1 = 4px`, `2 = 8px`, `4 = 16px`, `6 = 24px`, `8 = 32px`.

### Elevation & Shadows

| Token | Usage |
|---|---|
| `shadow-sm` | Cards at rest |
| `shadow-md` | Dropdown menus, popovers |
| `shadow-xl` | Modals, context menus |

### Border Radius

| Token | Usage |
|---|---|
| `rounded-md` (6px) | Inputs, small buttons |
| `rounded-lg` (8px) | Cards, inner sections |
| `rounded-xl` (12px) | Feature cards, metric panels |
| `rounded-2xl` (16px) | Modals, large containers |
| `rounded-full` | Avatars, progress bars |

---

## Layer 2 — Component Library

All components live in `src/components/ui/`. They are **stateless/presentational** — they receive props and render UI. No business logic.

### Atoms

#### `<Button>`
File: [`button.tsx`](./button.tsx)

```tsx
import { Button } from '@/components/ui/button';

// Variants
<Button variant="default">Primary Action</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link Style</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><PlusIcon /></Button>
```

**Guidelines:**
- Use `default` (blue) for the **one primary CTA** per section (e.g., "NEW TICKET", "Create Folder").
- Use `outline` for secondary actions alongside a primary button (e.g., "Filter").
- Use `ghost` for icon-only toolbar actions.
- Use `destructive` only for **irreversible** operations (delete, archive).
- Never place two `default` buttons side-by-side — one must be `outline`.

---

#### `<Badge>`
File: [`badge.tsx`](./badge.tsx)

```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="default">Label</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Completed</Badge>
```

**Guidelines:**
- Use `success` for `COMPLETED`, `APPROVED` statuses.
- Use `outline` with custom color classes for `PENDING` (amber), `IN PROGRESS` (blue).
- Use `destructive` for `OVERDUE`, `DECLINED`.
- Keep badge text in `UPPERCASE` for status labels, `sentence case` for tag labels.

---

#### `<Input>`
File: [`input.tsx`](./input.tsx)

```tsx
import { Input } from '@/components/ui/input';

<Input type="text" placeholder="Search documents..." />
<Input type="email" placeholder="email@example.com" />
```

---

#### `<Textarea>`
File: [`textarea.tsx`](./textarea.tsx)

```tsx
import { Textarea } from '@/components/ui/textarea';

<Textarea placeholder="Enter notes..." rows={4} />
```

---

### Molecules & Organisms

#### `<Card>`
File: [`card.tsx`](./card.tsx)

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Section Title</CardTitle>
  </CardHeader>
  <CardContent>
    {/* content */}
  </CardContent>
</Card>
```

**Guidelines:**
- Always use `<Card>` as the container for any content panel on the dashboard.
- Add `hover:border-primary transition-colors` for clickable cards.
- Use `shadow-sm` on Cards at rest — don't add extra shadow.
- Metric/KPI cards use `p-6` padding inside `<CardContent>`.

---

#### `<Table>`
File: [`table.tsx`](./table.tsx)

```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Document A</TableCell>
      <TableCell><Badge variant="success">Approved</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Guidelines:**
- `TableHead` text should always be `UPPERCASE` with `text-xs font-semibold tracking-wider`.
- Clickable rows should have `cursor-pointer hover:bg-muted/50`.
- Always wrap table in a `rounded-2xl border bg-card shadow-sm` container div.

---

#### `<Tabs>`
File: [`tabs.tsx`](./tabs.tsx)

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

<Tabs defaultValue="grid">
  <TabsList>
    <TabsTrigger value="grid">Grid View</TabsTrigger>
    <TabsTrigger value="list">List View</TabsTrigger>
  </TabsList>
  <TabsContent value="grid">{/* grid content */}</TabsContent>
  <TabsContent value="list">{/* list content */}</TabsContent>
</Tabs>
```

---

#### `<TicketDetailModal>`
File: [`../tickets/TicketDetailModal.tsx`](../tickets/TicketDetailModal.tsx)

```tsx
import { TicketDetailModal } from '@/components/tickets/TicketDetailModal';

<TicketDetailModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  ticketId="MT20.000036"
  ticketTitle="Dịch thuật văn bản pháp lý"
/>
```

---

## Layer 3 — Design Guidelines

### Layout Principles

- The dashboard uses a **fixed sidebar (240px) + flexible main content** layout.
- Main content has `p-8` padding.
- Use `space-y-8` between major sections on a page.
- Use `gap-6` inside grid layouts for card groups.

### When to Use Which Component

| Scenario | Component |
|---|---|
| Main page action (e.g., "NEW TICKET") | `<Button variant="default">` |
| Secondary action (e.g., "Filter") | `<Button variant="outline">` |
| Showing document/ticket status | `<Badge>` with appropriate variant |
| Displaying tabular data | `<Table>` inside `rounded-2xl border bg-card` |
| Grouping related content | `<Card>` with `<CardContent>` |
| Switching between views | `<Tabs>` |
| Full-screen overlay detail | `<TicketDetailModal>` |

### Spacing Rules

- **Within a card**: `p-4` (small) or `p-6` (normal).
- **Between cards in a grid**: `gap-4` (dense) or `gap-6` (standard).
- **Between page sections**: `space-y-8`.
- **Between a label and its value**: `mb-1` on the label.
- **Icon + text inline**: `gap-2` or `gap-3`.

### Safe Distances & Minimum Touch Targets

- All interactive elements (buttons, icon buttons) must be at least **32×32px**.
- Use `p-2` (8px padding) minimum on icon buttons.
- Status badges in tables: minimum `px-3 py-1`.

### Typography Hierarchy

| Usage | Classes |
|---|---|
| Page title (H1) | `text-3xl font-bold` |
| Section heading (H2/H3) | `text-lg font-bold` or `text-xl font-bold` |
| Card title | `text-sm font-semibold` |
| Body text | `text-sm` |
| Muted / secondary text | `text-xs text-muted-foreground` |
| UPPERCASE labels | `text-xs font-semibold tracking-wider uppercase` |
| KPI numbers | `text-3xl font-bold` |

### Color Usage Rules

- **Blue** (`blue-600`): Primary actions, active nav items, links.
- **Amber/Orange**: Warnings, PENDING status.
- **Green**: Success, COMPLETED status, positive trends.
- **Red**: Errors, destructive actions, OVERDUE status.
- **Slate/Gray**: Neutral text, secondary info, muted backgrounds.

### Do's and Don'ts

✅ **Do:**
- Always use `<Button>` from the component library — never a raw `<button>` for primary actions.
- Always add `aria-label` to icon-only buttons.
- Always add `role="button"` + `onKeyDown` to interactive `<div>` elements.
- Use `<Image />` from `next/image` instead of `<img>` for all user-facing images.

❌ **Don't:**
- Hard-code user-visible strings — use `next-intl` translations.
- Mix padding inside cards (always use `p-4` or `p-6`, never custom values).
- Use `import React from 'react'` — React 18 JSX transform is automatic.
- Place two primary (blue) buttons next to each other.

---

## Engineering Setup

### Installation

```bash
npm install
npm run dev
```

### Adding a New Component

1. Create `src/components/ui/your-component.tsx`.
2. Use `class-variance-authority` (cva) for variants.
3. Use `cn()` from `@/utils/cn` to merge classes.
4. Export a named export (no default exports for components).
5. Add a Storybook story in `.storybook/`.

### Utility: `cn()`

```ts
import { cn } from '@/utils/cn';

// Merges Tailwind classes safely
const classes = cn('px-4 py-2', isActive && 'bg-blue-600', className);
```

### Running Checks

```bash
npm run lint        # ESLint + formatting check
npm run check:types # TypeScript type check
npm run check:deps  # Check for unused dependencies
npm run test        # Run unit tests
```
