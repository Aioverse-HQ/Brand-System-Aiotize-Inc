# Motion Guidelines

Motion communicates state, guides attention, and gives the Aiotize interface a sense of life and responsiveness. Use it purposefully — every animation should serve the user, not perform for them.

---

## 🎯 Principles

| # | Principle | Description |
|---|-----------|-------------|
| 1 | **Purposeful** | Animate to communicate meaning (state change, hierarchy, direction), not to decorate |
| 2 | **Responsive** | Keep durations short so the UI feels fast and in control |
| 3 | **Consistent** | Reuse the same easing and duration tokens throughout the product |
| 4 | **Inclusive** | Always respect the `prefers-reduced-motion` media query |

---

## ⏱️ Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `motion.duration.instant` | 0 ms | No-transition states (e.g. keyboard focus ring) |
| `motion.duration.fast` | 100 ms | Micro-interactions: button press, checkbox toggle |
| `motion.duration.normal` | 200 ms | Default: panel open/close, tooltip, dropdown |
| `motion.duration.slow` | 350 ms | Page transitions, modal entrance |
| `motion.duration.slower` | 500 ms | Complex reveals, loading skeletons |

---

## 🎢 Easing Tokens

| Token | CSS Value | Character | Usage |
|-------|-----------|-----------|-------|
| `motion.easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth in-out | Most transitions |
| `motion.easing.enter` | `cubic-bezier(0, 0, 0.2, 1)` | Decelerates to rest | Elements entering the screen |
| `motion.easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Accelerates out | Elements leaving the screen |
| `motion.easing.spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Slight overshoot | Playful, tactile interactions |

---

## ♿ Reduced Motion

Always provide a no-animation fallback for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎬 Common Patterns

| Pattern | Duration | Easing |
|---------|----------|--------|
| Button hover | `fast` | `standard` |
| Dropdown / popover open | `normal` | `enter` |
| Dropdown / popover close | `fast` | `exit` |
| Modal backdrop fade in | `normal` | `enter` |
| Modal panel slide up | `slow` | `enter` |
| Toast notification enter | `normal` | `spring` |
| Page route transition | `slow` | `standard` |
| Skeleton loading shimmer | `slower` (loop) | `standard` |

---

## ✅ Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Use duration and easing tokens | Hard-code `0.3s ease` everywhere |
| Respect `prefers-reduced-motion` | Ignore accessibility motion preferences |
| Use motion to signal state changes | Animate purely for aesthetics |
| Keep animations short (≤ 350 ms for most UI) | Use slow, dramatic animations on interactive controls |

---

## 💻 Code Example

### CSS Implementation

```css
@import "@aiotize/brand-tokens/build/css/tokens.css";

.button {
  transition: 
    background-color var(--motion-duration-fast) var(--motion-easing-standard),
    transform var(--motion-duration-fast) var(--motion-easing-standard);
}

.button:hover {
  background-color: var(--color-brand-blue);
}

.button:active {
  transform: scale(0.98);
}

.modal {
  animation: slideUp var(--motion-duration-slow) var(--motion-easing-enter);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### JavaScript/React Example

```jsx
import { motion } from 'framer-motion';
import tokens from '@aiotize/brand-tokens';

const Modal = ({ children, isOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
    transition={{ 
      duration: tokens.motion.duration.slow / 1000,
      ease: [0, 0, 0.2, 1] // enter easing
    }}
  >
    {children}
  </motion.div>
);
```

---

## 📚 Related Pages

- [[Home]] — Return to the main wiki page
- [[Brand Principles]] — Design principles that inform motion
- [[Color Guidelines]] — Color transitions and states
- [[Getting Started for Developers]] — Integrate motion tokens

---

<p align="center">
  <sub><a href="Home">← Back to Home</a></sub>
</p>
