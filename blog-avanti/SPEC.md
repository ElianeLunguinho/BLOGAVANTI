# Blog Avanti - Knowledge Exchange Platform

## 1. Project Overview

- **Project Name**: Blog Avanti
- **Type**: Web Application (ReactJS SPA)
- **Core Functionality**: A knowledge exchange platform where people can share their skills/knowledge and connect with others to exchange learning opportunities
- **Target Users**: Individuals seeking to learn or teach skills

---

## 2. UI/UX Specification

### Layout Structure

**Pages:**
1. **Landing Page** - Hero section with platform proposal, features overview, CTA
2. **Knowledge List Page** - Display all available knowledge/skills
3. **Registration Forms** - People registration and Offer creation
4. **Offer Management** - Edit and remove offers

**Navigation:**
- Fixed top navbar with logo and navigation links
- Mobile-responsive hamburger menu

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary: `#2D3436` (Dark charcoal)
- Secondary: `#00B894` (Mint green)
- Accent: `#E17055` (Coral orange)
- Background: `#FAFAFA` (Off-white)
- Card Background: `#FFFFFF` (White)
- Text Primary: `#2D3436`
- Text Secondary: `#636E72`
- Border: `#DFE6E9`

**Typography:**
- Headings: 'Poppins', sans-serif
  - H1: 48px / bold
  - H2: 36px / semibold
  - H3: 24px / semibold
- Body: 'Open Sans', sans-serif
  - Regular: 16px
  - Small: 14px

**Spacing System:**
- Base unit: 8px
- Section padding: 80px vertical, 24px horizontal
- Card padding: 24px
- Component gap: 16px

**Visual Effects:**
- Card shadows: `0 4px 20px rgba(0,0,0,0.08)`
- Hover transitions: 0.3s ease
- Button hover: scale(1.02) with shadow increase
- Page transitions: fade-in 0.4s

### Components

**Navbar:**
- Logo (left)
- Navigation links: Home, Conhecimentos, Cadastrar
- Sticky on scroll with background blur

**Hero Section (Landing):**
- Full-width gradient background (Primary to dark)
- Headline + subheadline
- CTA button to registration

**Feature Cards:**
- Icon + title + description
- Hover lift effect

**Knowledge Card:**
- Skill title
- Provider name
- Description
- Category tag
- Edit/Delete buttons (for owner)

**Forms:**
- Floating labels
- Input validation
- Submit button with loading state
- Success/error toast notifications

**Buttons:**
- Primary: Filled with Secondary color
- Secondary: Outlined
- Danger: Filled with Accent color for delete

---

## 3. Functionality Specification

### Core Features

**1. Landing Page**
- Animated hero section with platform value proposition
- Features section highlighting key benefits
- Call-to-action buttons for registration

**2. Knowledge List**
- Grid display of all available knowledge offerings
- Filter by category (optional)
- Search functionality
- Empty state when no knowledge available

**3. Person Registration Form**
- Fields: Name, Email, Bio, Interests
- Form validation (required fields, email format)
- Success message on submission

**4. Offer Registration Form**
- Fields: Skill/Knowledge Title, Description, Category, Duration
- Link to registered person
- Form validation

**5. Offer Management**
- Edit existing offers (modal or inline)
- Delete offers with confirmation dialog
- Toast notifications for actions

### User Interactions
- Smooth page transitions
- Form validation feedback
- Loading states during submissions
- Confirmation dialogs for destructive actions

### Data Handling
- Local state management with React hooks
- Mock data for demonstration
- LocalStorage persistence for demo purposes

---

## 4. Acceptance Criteria

1. ✅ Landing page loads with hero, features, and CTA
2. ✅ Navigation between pages works correctly
3. ✅ Knowledge list displays all offerings in card grid
4. ✅ Person registration form validates and submits
5. ✅ Offer registration form validates and submits
6. ✅ Offers can be edited
7. ✅ Offers can be deleted with confirmation
8. ✅ Responsive design works on mobile/tablet/desktop
9. ✅ All animations and transitions are smooth
10. ✅ No console errors on page load

---

## 5. Technical Stack

- **Framework**: ReactJS (Vite)
- **Routing**: React Router v6
- **Styling**: CSS Modules / Styled Components
- **Icons**: React Icons (Feather Icons)
- **Animations**: CSS transitions + Framer Motion
- **State**: React Context + useState/useReducer

---

## 6. File Structure

```
/src
  /components
    /Navbar
    /Hero
    /FeatureCard
    /KnowledgeCard
    /Form
    /Button
    /Modal
    /Toast
  /pages
    /Home
    /KnowledgeList
    /Register
    /ManageOffers
  /context
    /AppContext
  /data
    /mockData
  /styles
    /global.css
    /variables.css
  App.jsx
  main.jsx
