# Quick Start Guide - Monorepo with Shared Forms

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
cd monorepo
npm install
```

### 2. Start Development

```bash
npm run dev
```

### 3. Visit UI1

Open http://localhost:3000 to see the **complete multi-step form**!

## ✨ What You'll See

### Multi-Step Form (UI1)

**Step 1**: Select service type (Design/Massage/Other)  
**Step 2**: Enter contact details with validation  
**Step 3**: Choose content availability  

**Features:**
- ✅ Real-time validation
- ✅ Progress indicator  
- ✅ Beautiful UI with Tailwind
- ✅ Form state debugging (dev mode)

## 📦 What's Special?

### Shared Forms Package

All form logic is in `packages/forms/`:
- React Hook Form integration
- Zod validation schemas
- TypeScript types
- Reusable hooks

### Same Logic, Different UI

Copy the form to UI2 or UI3, change the theme colors, and you're done! The validation logic is automatically shared.

## 🎯 To Add Form to UI2/UI3

```bash
# 1. Copy components
cp -r apps/ui1/src/components/MultiStepForm apps/ui2/src/components/

# 2. Update theme in tailwind.config.js
# That's it!
```

## 🛠️ Commands

```bash
npm run dev          # All apps
npm run dev:ui1      # UI1 only (port 3000)
npm run build        # Build all
```

Check **README.md** for full documentation!

Happy coding! 🎉
