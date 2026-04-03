# Email Templates Example

Reference responsive email templates built with the Aiotize brand palette and typography.

## Templates included

| File | Description |
|------|-------------|
| `transactional.html` | Transactional email (e.g. account confirmation, password reset) |
| `newsletter.html` | Marketing newsletter with feature highlights |
| `announcement.html` | Product announcement / launch email |

## Design constraints

Email HTML has significant rendering constraints. These templates follow best practices:

- Table-based layout for maximum client compatibility
- Inline CSS — no external stylesheets
- Brand colors referenced by hex value (no CSS custom properties)
- System font stacks (Inter not reliably available in email clients)
- Images hosted externally with `alt` text provided
- Tested in Gmail, Outlook, Apple Mail, and Yahoo Mail

## Brand values used

| Property | Value |
|---------|-------|
| Primary color | `#1A6BFF` |
| Navy | `#0D1B2A` |
| Cyan | `#00D4FF` |
| White | `#FFFFFF` |
| Light gray | `#F5F7FA` |
| Body font | `Arial, Helvetica, sans-serif` (email-safe) |

## Previewing

Open any `.html` file directly in your browser or use a tool like [Litmus](https://litmus.com/) or [Email on Acid](https://www.emailonacid.com/) for cross-client testing.

## Customising

Replace the placeholder text and image `src` attributes with real content. Do not change colors, fonts, or layout — use the templates as-is to maintain brand consistency.
