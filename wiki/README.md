# Wiki Pages

This directory contains the source files for the GitHub Wiki of the Aiotize Brand System.

## 📋 Pages Overview

| Page | Description |
|------|-------------|
| `Home.md` | Wiki landing page with navigation and quick start |
| `Brand-Principles.md` | Core brand values and attributes |
| `Logo-Usage.md` | Logo variants, sizing, and placement guidelines |
| `Color-Guidelines.md` | Color palette and accessibility guidance |
| `Typography.md` | Type system and font specifications |
| `Motion-Guidelines.md` | Animation principles and tokens |
| `Voice-and-Tone.md` | Writing style and copy guidelines |
| `Getting-Started-for-Designers.md` | Quick start guide for designers |
| `Getting-Started-for-Developers.md` | Integration guide for developers |
| `_Sidebar.md` | Navigation sidebar (auto-loaded by GitHub Wiki) |
| `_Footer.md` | Page footer (auto-loaded by GitHub Wiki) |

## 🚀 Deploying to GitHub Wiki

### Option 1: Manual Setup

1. Navigate to your repository on GitHub
2. Click on the **Wiki** tab
3. Click **Create the first page** (or edit existing)
4. Copy content from each `.md` file in this directory

### Option 2: Git-based Sync

GitHub Wikis are backed by a separate Git repository. You can clone and push directly:

```bash
# Clone the wiki repository
git clone https://github.com/Aioverse-HQ/Brand-System-Aiotize-Inc.wiki.git

# Copy wiki files
cp wiki/*.md Brand-System-Aiotize-Inc.wiki/

# Commit and push
cd Brand-System-Aiotize-Inc.wiki
git add .
git commit -m "Update wiki pages"
git push
```

### Option 3: GitHub Action (Automated)

You can create a GitHub Action to automatically sync this `wiki/` directory to the GitHub Wiki whenever changes are pushed to `main`.

## 📐 Design Guidelines

These wiki pages follow the Aiotize brand guidelines:

- **Structure**: Clear hierarchy with tables and headings
- **Navigation**: Cross-linked pages with `[[Page Name]]` syntax
- **Visual elements**: Emoji icons for quick scanning
- **Code examples**: Practical implementation snippets
- **Accessibility**: Clear contrast and readable formatting

## 📝 Editing Wiki Pages

When editing wiki pages:

1. Use GitHub Wiki link syntax: `[[Page Name]]` or `[[Page Name|Display Text]]`
2. Keep emoji icons consistent for visual scanning
3. Include "Related Pages" sections for navigation
4. Update the `_Sidebar.md` if adding new pages
5. Test links after making changes

## 📧 Questions?

Contact **brand@aiotize.com** for wiki content questions.
