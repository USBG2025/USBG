# TypeScript Monorepo with Shared Forms Package

A modern TypeScript monorepo featuring **3 Next.js frontends**, **1 Express.js backend**, and a **shared forms package** with React Hook Form + Zod validation.

## 🏗️ Architecture

```
monorepo/
├── apps/
│   ├── ui1/              # Next.js UI (port 3000) - Multi-step form implemented
│   ├── ui2/              # Next.js UI (port 3001) - Placeholder
│   ├── ui3/              # Next.js UI (port 3002) - Placeholder  
│   └── api/              # Express.js API (port 4000)
├── packages/
│   ├── forms/            # 🆕 Shared form logic (React Hook Form + Zod)
│   ├── ui/               # Shared React components
│   └── tsconfig/         # Shared TypeScript configurations
```

## ✨ Key Features

### 📦 Shared Forms Package (`@monorepo/forms`)
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **TypeScript** - Full type safety
- **Reusable hooks** - `useMultiStepForm`
- **Validation schemas** - Per-step validation
- **Utilities** - Phone formatting, localStorage helpers

### 🎨 Multi-Step Form (UI1)
- ✅ **Step 1**: Service type selection (Design/Massage/Other)
- ✅ **Step 2**: Contact details (Name, Phone, Website)
- ✅ **Step 3**: Written content availability (Yes/No)
- ✅ Progress indicator with completion status
- ✅ Form validation per step
- ✅ Back/Next navigation
- ✅ Beautiful UI with Tailwind CSS
- ✅ Responsive design

### 🔄 Separation of Concerns
- **Form logic** → `packages/forms` (shared across all UIs)
- **UI components** → Each app has its own themed components
- **Validation** → Centralized Zod schemas
- **Business logic** → Reusable hooks

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Run all apps (3 UIs + API)
npm run dev

# Run individual apps
npm run dev:ui1    # http://localhost:3000 - Multi-step form
npm run dev:ui2    # http://localhost:3001
npm run dev:ui3    # http://localhost:3002
npm run dev:api    # http://localhost:4000
```

### Building

```bash
npm run build      # Build all
npm run build:ui1  # Build UI1 only
```

## 📋 Multi-Step Form Implementation

### Using the Shared Forms Package

```typescript
// In any UI
import { useMultiStepForm, MultiStepFormData } from '@monorepo/forms';

function MyForm() {
  const { form, currentStep, nextStep, prevStep } = useMultiStepForm(3);
  
  const onSubmit = async (data: MultiStepFormData) => {
    // Your submission logic
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Your step components */}
    </form>
  );
}
```

### Form State Structure

```typescript
interface MultiStepFormData {
  serviceType?: 'design' | 'massage' | 'other';
  name?: string;
  phone?: string;
  website?: string;
  hasWrittenContent?: 'yes' | 'no';
}
```

### Validation Schemas

Each step has its own Zod schema:

```typescript
// Step 1
const step1Schema = z.object({
  serviceType: z.enum(['design', 'massage', 'other'])
});

// Step 2
const step2Schema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/phone pattern/),
  website: z.string().url().optional()
});

// Step 3
const step3Schema = z.object({
  hasWrittenContent: z.enum(['yes', 'no'])
});
```

## 🎨 Theming Different UIs

Each UI can have its own theme while using the same form logic:

### UI1 (Purple Theme)
```javascript
// tailwind.config.js
colors: {
  primary: '#667eea',
}
```

### UI2 (Pink Theme) - To Implement
```javascript
colors: {
  primary: '#f093fb',
}
```

### UI3 (Blue Theme) - To Implement
```javascript
colors: {
  primary: '#4facfe',
}
```

## 📦 Package Structure

### `@monorepo/forms`
```
packages/forms/
├── hooks/
│   └── useMultiStepForm.ts     # Main form hook
├── schemas/
│   ├── step1Schema.ts          # Validation for each step
│   ├── step2Schema.ts
│   └── step3Schema.ts
├── types/
│   └── index.ts                # TypeScript types
└── utils/
    └── index.ts                # Helper functions
```

### `@monorepo/ui`
```
packages/ui/
└── components/
    ├── Button.tsx              # Shared button component
    ├── Card.tsx                # Shared card component
    └── Input.tsx               # Shared input component
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run all apps concurrently |
| `npm run dev:ui1` | Run UI1 only |
| `npm run build` | Build all apps |
| `npm run lint` | Lint all code |
| `npm run format` | Format with Prettier |
| `npm run type-check` | TypeScript type checking |
| `npm run clean` | Clean all builds |

## 🎯 Next Steps

### To Implement the Same Form in UI2 & UI3:

1. **Copy form components from UI1**
   ```bash
   cp -r apps/ui1/src/components/MultiStepForm apps/ui2/src/components/
   ```

2. **Update theme colors in Tailwind config**
   ```javascript
   // ui2/tailwind.config.js
   colors: {
     primary: '#f093fb',  // Pink
   }
   ```

3. **That's it!** The form logic is already shared via `@monorepo/forms`

### To Add New Steps:

1. Create new schema in `packages/forms/src/schemas/`
2. Add to `getSchemaForStep()` function
3. Create step component in UI
4. Add to FormWrapper switch statement

## 📝 Form Features

- ✅ Multi-step navigation
- ✅ Per-step validation
- ✅ Progress indicator
- ✅ Form state persistence
- ✅ Error handling
- ✅ Type safety
- ✅ Responsive design
- ✅ Accessible components

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Backend**: Express.js, TypeScript
- **Monorepo**: NPM Workspaces

## 📚 Learn More

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🎉 What's Special?

This monorepo demonstrates the **perfect separation of business logic and presentation**:

1. **Form logic is shared** → All UIs use `@monorepo/forms`
2. **Validation is centralized** → Single source of truth
3. **Themes are independent** → Each UI can look completely different
4. **Type safety everywhere** → Zod + TypeScript integration
5. **Easy to maintain** → Change logic once, affects all UIs

Want to add the same form to UI2 or UI3? Just copy the components and change the theme colors!

## 📄 License

MIT
