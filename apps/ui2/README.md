# UI2 - Industrial Style Multi-Step Form

Orange-themed industrial design with text inputs and textareas.

## 🎨 Design Features

- **Orange theme** (#FF6B35) - Industrial style
- **Horizontal stepper** - Progress indicator at top
- **Grid layout** - 2-column input layout
- **Info icons** - Orange ⓘ on each field
- **Text inputs only** - No selection cards
- **Helper panels** - Informational boxes per step

## 📦 Installation

1. **Drop this folder** into `apps/ui2` in your monorepo
2. **Run from root**:
   ```bash
   npm install
   npm run dev:ui2
   ```
3. **Visit** http://localhost:3001

## 🎯 Differences from UI1

| Feature | UI1 | UI2 |
|---------|-----|-----|
| **Theme** | Purple gradient | Orange industrial |
| **Layout** | Centered cards | Grid layout |
| **Stepper** | Vertical circles | Horizontal line |
| **Step 1** | Clickable cards | Text input |
| **Step 3** | Yes/No cards | Text input |
| **Fields** | Same validation | Same validation |

## 🔧 Same Logic, Different UI

Both UI1 and UI2 use:
- ✅ `@monorepo/forms` package (shared validation)
- ✅ Same form fields and validation rules
- ✅ Same Zod schemas
- ✅ Same TypeScript types

Only the **visual presentation** is different!

## 📝 Form Fields

**Step 1: Service Selection**
- Service Type (text input)

**Step 2: Contact Details**
- Full Name (text input)
- Phone Number (text input)
- Website URL (text input, optional)

**Step 3: Content Availability**
- Written Content Available (text input - "yes" or "no")
- Additional Notes (textarea, optional)

## 🎨 Customization

### Change Orange Color

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
}
```

### Adjust Grid Layout

In Step2.tsx, change:
```javascript
<div className="grid grid-cols-2 gap-6">
// To 3 columns:
<div className="grid grid-cols-3 gap-6">
```

## 🚀 Next Steps

1. Test the form at http://localhost:3001
2. Customize colors/layout as needed
3. Add more fields following the same pattern
4. Deploy alongside UI1 and UI3

Enjoy! 🎉
