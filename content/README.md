# Marketing Hub: AI Upgrade Programs

Q1 2025 Marketing Asset Library for The Upgrade AI Training Programs.

## Overview

This hub contains all marketing content for 7 AI Upgrade program verticals:

| Program | Target Audience | Status |
|---------|----------------|--------|
| Creative Professionals | Designers, photographers, videographers, creative directors | Ready |
| PR & Communications | PR professionals, communications managers, media relations | Ready |
| Sales Leaders | Sales managers, SDRs, revenue teams | Ready |
| Journalists | Journalists, editors, media professionals | Ready |
| Healthcare Professionals | Doctors, nurses, healthcare administrators, medical researchers | Ready |
| HR Professionals | HR managers, recruiters, talent acquisition, people ops | Ready |
| Legal Professionals | Lawyers, paralegals, legal ops, compliance officers | Ready |

## Content Structure

Each program contains 5 content types:

```
{program}/
├── quotes/quotable-library.md       # 50+ marketing-ready quotes
├── stories/transformation-stories.md # 10 detailed student journeys
├── social/linkedin-posts.md         # 50+ ready-to-publish posts
├── playbook/lead-magnet-playbook.md # Downloadable guide for email capture
└── emails/6-email-launch-sequence.md # Complete nurture funnel
```

## Accessing Content

### Browser UI (Recommended)

Navigate to `/marketing` in the Knowledge Explorer app to:
- Browse all programs and content types
- Read content directly in the browser
- Copy individual items or sections
- Search across all content
- Export for Buffer (CSV) and Beehive (JSON)

### Direct File Access

All content lives in:
```
content/projects/05-marketing-and-outreach/upgrade-marketing-hub/
```

## Using the Content

### For Social Media (LinkedIn)

1. Go to `/marketing/{program}` in the browser
2. Click "LinkedIn Posts" section
3. Copy individual posts or use "Copy All"
4. Or click "Export for Buffer" to download CSV
5. Upload to Buffer for scheduling

**Target:** 11+ posts per month per program

### For Email Campaigns

1. Go to `/marketing/{program}` in the browser
2. Click "6-Email Launch Sequence" section
3. Copy individual emails
4. Or click "Export for Beehive" for JSON format
5. Configure timing per the sequence notes

**Sequence Timing:**
- Email 1: Immediate (playbook delivery)
- Email 2: +2 days
- Email 3: +2 days
- Email 4: +3 days
- Email 5: +3 days
- Email 6: +4 days

### For Lead Magnets

1. Access playbook content via browser
2. Copy and format in preferred design tool
3. Export as PDF
4. Gate behind email capture form

## Content Stats

| Metric | Count |
|--------|-------|
| Total Programs | 7 |
| Quotes per Program | 50+ |
| Transformation Stories | 10 per program (70 total) |
| LinkedIn Posts | 50+ per program (350+ total) |
| Lead Magnet Playbooks | 7 |
| Email Sequences | 42 emails (6 per program) |

## Adding New Content

### Adding Quotes

Edit `{program}/quotes/quotable-library.md`:
```markdown
> "Your quote text here."
> — **Attribution Name**
> **Context:** Where/how to use this quote
```

### Adding LinkedIn Posts

Edit `{program}/social/linkedin-posts.md`:
```markdown
### Post [NUMBER]: Title Here

Your post content here.

150-250 words optimal.
Keep the hook → insight → proof → CTA structure.

---
```

### Adding Stories

Edit `{program}/stories/transformation-stories.md`:
```markdown
## STORY [NUMBER]: THE TITLE

### Name — Role, Organization

**The Challenge:**
What problem did they face?

**The Discovery:**
What did they learn in the program?

**The Transformation:**
How did their workflow change?

**The Results:**
- Bullet points of outcomes

**Their Quote:**
> "Direct quote from the student."
```

## Export Formats

### Buffer CSV Export

Exports LinkedIn posts as CSV with columns:
- `Text` — Post content
- `Category` — Post category

Upload directly to Buffer for scheduling.

### Beehive JSON Export

Exports email sequences as JSON with:
- `emailNumber` — Sequence position
- `subject` — Subject line
- `timing` — Send timing
- `bodyHtml` — HTML formatted body
- `bodyPlainText` — Plain text body

Import into Beehive for automation setup.

## Maintenance Schedule

| Task | Frequency |
|------|-----------|
| Add new graduate testimonials | After each cohort |
| Refresh quotes library | Quarterly |
| Update transformation stories | After each cohort |
| Review and update CTAs | Monthly |
| Check links and pricing | Before each launch |

## Questions?

Contact the marketing team or check the Knowledge Explorer at `/marketing`.
