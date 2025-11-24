# Qorvia.ai Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from modern AI/tech leaders—Linear's sophisticated minimalism, Stripe's clean professionalism, and Vercel's cutting-edge aesthetic. This creates a premium, forward-thinking impression essential for an AI consultancy.

**Core Principle**: Blend technical credibility with human approachability. The design should feel intelligent and precise while remaining warm and accessible.

---

## Typography System

**Primary Font**: Inter or DM Sans (Google Fonts) - Clean, modern sans-serif for tech sophistication
**Accent Font**: Space Grotesk or Outfit - For headlines requiring extra impact

**Hierarchy**:
- Hero Headlines: text-5xl to text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl to text-4xl, font-semibold
- Subsections: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, leading-relaxed (optimal readability)
- Captions: text-sm, font-medium
- Navigation: text-sm, font-medium, tracking-wide

---

## Layout System

**Spacing Scale**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl for readability

**Vertical Spacing**: py-16 md:py-24 lg:py-32 for major sections

---

## Page Structure & Sections

### 1. Hero Section (100vh initial view)
- Large background image showcasing AI/technology workspace or abstract digital visualization
- Centered content overlay with headline + subheadline + dual CTAs
- Primary CTA: "Request Consultation" (prominent, blurred background)
- Secondary CTA: "Explore Services" (outline style)
- Trust indicator below CTAs: "Trusted by 50+ enterprises" with micro logos

### 2. Services Overview (Multi-column)
- 2-column grid (lg:grid-cols-2) for two main services
- Each service card: Icon, bold title, detailed description (3-4 sentences), "Learn More" link
- Digital Cloning card: Emphasize personalization, scalability
- AI Consultancy card: Highlight strategy, implementation
- Generous padding within cards (p-8), subtle borders

### 3. How We Work / Process
- Horizontal timeline or 4-column grid showing process steps
- Step numbers, titles, brief descriptions
- Use connectors or arrows between steps for flow

### 4. Case Studies / Portfolio (Masonry or Featured Grid)
- 3-column grid (lg:grid-cols-3) with featured case at 2-column width
- Each case: Project image, client name, category tag, brief outcome
- Hover state shows "View Case Study" overlay
- Include 5-6 diverse examples

### 5. About Qorvia.ai
- Side-by-side layout: Image (team photo or office) + Content
- Mission statement, expertise areas, years of experience
- Stats counter: Projects completed, clients served, satisfaction rate
- 2-column grid below for core values (4 items)

### 6. Team Section
- 3-column grid (md:grid-cols-2 lg:grid-cols-3) for team members
- Circular or rounded-square headshots
- Name, role, 2-sentence bio
- LinkedIn icons for professional connection
- Include 6-9 team members

### 7. Consultation Request Form
- 2-column layout: Form (left, 60%) + Info sidebar (right, 40%)
- Form fields: Name, Email, Company, Service Interest (dropdown), Project Description (textarea), Budget Range
- Info sidebar: Response time, office hours, alternative contact methods
- Large submit button with arrow icon

### 8. Footer
- 3-column layout: Company info + Quick links + Newsletter signup
- Social media icons, trust badges (certifications)
- Copyright and legal links

---

## Component Specifications

**Navigation**: Fixed header, logo left, menu center/right, "Get Started" CTA button right
**Buttons**: Rounded-lg, px-8 py-3, font-medium. Hero buttons use backdrop-blur-md bg-opacity-90
**Cards**: Rounded-xl, border-2, p-6 to p-8, hover:shadow-2xl transition
**Input Fields**: Rounded-lg, border-2, px-4 py-3, focus:ring-4 effect
**Icons**: Heroicons (outline for navigation, solid for features), size-6 to size-8

---

## Images Strategy

**Hero Image**: Full-width, high-quality photograph of modern tech workspace, digital interfaces, or abstract AI visualization. Must convey innovation and professionalism.

**Case Study Images**: Screenshots of AI implementations, before/after visualizations, or client workspace transformations (6 images needed)

**About Section Image**: Team collaboration photo or modern office environment (1 image)

**Team Photos**: Professional headshots with consistent lighting/background (6-9 images)

**Service Section**: Consider abstract tech icons or minimal illustrations (not photographic)

---

## Animation & Interactions

**Minimal, purposeful motion only**:
- Fade-up on scroll for section reveals (subtle, 20px translate)
- Hover scale on cards (scale-105)
- Smooth page scrolling for anchor links
- Button hover states (built into component, no custom animations)

**No**: Parallax effects, auto-playing carousels, excessive scroll animations

---

## Responsive Strategy

**Mobile (base)**: Single column, stack all grids, py-12 spacing, text-4xl heroes
**Tablet (md)**: 2-column grids, py-16 spacing, increased font sizes
**Desktop (lg+)**: Full multi-column layouts, py-24-32 spacing, text-6xl+ heroes

---

## Accessibility

- All images have descriptive alt text
- Form labels explicitly linked to inputs
- Focus states visible on all interactive elements (ring-2 ring-offset-2)
- Minimum contrast ratios maintained through spacing and typography weight
- Skip-to-content link for keyboard navigation

---

This design creates a premium, trustworthy presence that positions Qorvia.ai as a leader in AI consultancy while maintaining approachability for potential clients exploring innovative digital solutions.