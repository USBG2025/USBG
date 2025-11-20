# UI3 - Corporate/Enterprise Style Multi-Step Form

Blue-themed corporate design with structured layouts and breadcrumb navigation.

## 🎨 Design Features

- **Blue theme** (#3B82F6) - Professional/corporate
- **Arrow stepper** - Chevron/skeuomorphic design
- **Breadcrumb navigation** - Form context at top of each step
- **Tabbed interface** - Professional tab styling
- **Card-based steps** - Each step in bordered card
- **Icon integration** - Icons in inputs (User, Phone, Globe)
- **Structured layout** - Enterprise-grade appearance

## 📦 Installation

1. **Drop this folder** into `apps/ui3` in your monorepo
2. **Run from root**:
   ```bash
   npm install
   npm run dev:ui3
   ```
3. **Visit** http://localhost:3002

## 🎯 Differences from UI1 & UI2

| Feature | UI1 | UI2 | UI3 |
|---------|-----|-----|-----|
| **Theme** | Purple gradient | Orange industrial | Blue corporate |
| **Stepper** | Vertical circles | Horizontal line | Arrow chevrons |
| **Layout** | Center cards | Grid inputs | Structured cards |
| **Navigation** | Minimal breadcrumb | None | Full breadcrumb |
| **Style** | Modern/playful | Industrial | Enterprise |

## 🔧 Same Logic, Different UI

All three UIs use:
- ✅ `@monorepo/forms` package (shared validation)
- ✅ Same form fields and validation rules
- ✅ Same Zod schemas
- ✅ Same TypeScript types

Only the **visual presentation** is different!

## 📝 Form Fields

**Step 1: Service Selection**
- Service Type (text input)
- Information panel

**Step 2: Contact Details**
- Full Name (with User icon)
- Phone Number (with Phone icon)
- Website URL (with Globe icon)
- Tab interface styling

**Step 3: Content Availability**
- Written Content Available (with FileText icon)
- Additional Notes (textarea)
- Guidelines panel

## 🎨 Customization

### Change Blue Color

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
}
```

### Adjust Arrow Stepper

In `StepIndicator.tsx`, modify the `clipPath` values to change arrow shape.

### Add More Icons

Import from `lucide-react` and add to inputs:
```typescript
import { Mail, Building } from 'lucide-react';
```

## 🏢 Perfect For

- Enterprise applications
- B2B forms
- Corporate portals
- Professional services
- Formal business processes

## 🚀 Next Steps

1. Test the form at http://localhost:3002
2. Compare with UI1 (port 3000) and UI2 (port 3001)
3. See how same logic produces different experiences
4. Customize to your brand colors

All three UIs demonstrate perfect separation of business logic and presentation! 🎯
