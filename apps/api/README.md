# Business Plan API

Express API with full CRUD operations for business plan intake forms.

## 🚀 Features

- ✅ **Full CRUD** - Create, Read, Update, Delete
- ✅ **Prisma ORM** - Type-safe database access
- ✅ **Zod Validation** - Runtime validation
- ✅ **All fields optional** - Save progress at any time
- ✅ **Pagination** - Efficient data retrieval
- ✅ **User filtering** - Filter by userId
- ✅ **Error handling** - Comprehensive error responses

## 📦 Setup

### 1. Install Dependencies

```bash
cd apps/api
npm install
```

### 2. Configure Database

Create `.env` file:

```bash
cp .env.example .env
```

Update `DATABASE_URL` in `.env`:

```env
# PostgreSQL (recommended for production)
DATABASE_URL="postgresql://user:password@localhost:5432/businessplans"

# SQLite (for quick local dev)
DATABASE_URL="file:./dev.db"
```

### 3. Setup Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Create database and tables
npm run prisma:migrate

# Or push schema without migrations (development)
npm run prisma:push
```

### 4. Start Server

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

Server runs on **http://localhost:4000**

## 📚 API Endpoints

### Base URL: `/api/business-plans`

### **Create Business Plan**
```http
POST /api/business-plans
Content-Type: application/json

{
  "businessName": "Acme Corp",
  "website": "https://acme.com",
  "businessAddress": "123 Main St",
  // ... any other fields
}
```

**Response:**
```json
{
  "success": true,
  "message": "Business plan created successfully",
  "data": {
    "id": "uuid",
    "businessName": "Acme Corp",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    // ... all fields
  }
}
```

### **Get All Business Plans**
```http
GET /api/business-plans?page=1&limit=10&userId=user123
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `userId` (optional): Filter by user ID

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

### **Get Business Plan by ID**
```http
GET /api/business-plans/:id
```

**Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

### **Update Business Plan (Full)**
```http
PUT /api/business-plans/:id
Content-Type: application/json

{
  "businessName": "Updated Name",
  // ... all fields you want to update
}
```

### **Partial Update (Patch)**
```http
PATCH /api/business-plans/:id
Content-Type: application/json

{
  "businessName": "Only updating this field"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Business plan updated successfully",
  "data": { ... }
}
```

### **Delete Business Plan**
```http
DELETE /api/business-plans/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Business plan deleted successfully"
}
```

## 🗄️ Database Schema

All fields are **optional** at the database level to support saving progress:

```prisma
model BusinessPlan {
  id        String   @id @default(uuid())
  userId    String?
  
  // Page 1: Company Overview (7 fields)
  businessName     String?
  website          String?
  businessAddress  String?
  businessPurpose  String?
  problemSolution  String?
  topGoals         String?
  keyAchievements  String?
  
  // Page 2: Structure & Operations (8 fields)
  // Page 3: Market & Competition (5 fields)
  // Page 4: Team & Management (3 fields)
  // Page 5: Products & Services (3 fields)
  // Page 6: Marketing & Growth (4 fields)
  // Page 7: SWOT Analysis (4 fields)
  // Page 8: Financials (6 fields)
  
  // 40 total fields across 8 pages
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 Prisma Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Create migration
npm run prisma:migrate

# Push schema (no migration)
npm run prisma:push

# Open Prisma Studio (GUI)
npm run prisma:studio
```

## 🎯 Frontend Integration

### Save Progress (PATCH)

```typescript
// Save after each page
const savePage = async (pageData: Partial<BusinessPlanData>) => {
  const response = await fetch(`/api/business-plans/${planId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pageData),
  });
  return response.json();
};

// Example: Save page 1
await savePage({
  businessName: 'Acme Corp',
  website: 'https://acme.com',
  // ... other page 1 fields
});
```

### Create New Plan

```typescript
const createPlan = async () => {
  const response = await fetch('/api/business-plans', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: currentUser.id, // Optional
      businessName: formData.businessName,
      // ... include any fields you have
    }),
  });
  const data = await response.json();
  return data.data.id; // Save this ID for updates
};
```

### Load Existing Plan

```typescript
const loadPlan = async (planId: string) => {
  const response = await fetch(`/api/business-plans/${planId}`);
  const data = await response.json();
  // Populate form with data.data
};
```

## ✅ Validation

- **Backend**: All fields optional (allows saving progress)
- **Frontend**: Use Zod schemas from `@monorepo/forms` for page-by-page validation
- **Final Submit**: Validate complete form before submission

## 🔒 Security Notes

- Add authentication middleware for production
- Add rate limiting
- Add input sanitization
- Use environment variables for sensitive data
- Enable HTTPS in production

## 📝 Error Responses

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "businessName",
      "message": "Business name is required"
    }
  ]
}
```

## 🚀 Deployment

1. Set `DATABASE_URL` in production environment
2. Run `prisma generate` and `prisma migrate deploy`
3. Set `NODE_ENV=production`
4. Start with `npm start`

## 📊 Database Options

- **PostgreSQL** - Recommended for production
- **MySQL** - Also supported
- **SQLite** - Good for local development
- **MongoDB** - Use Prisma's MongoDB connector

Switch by changing `DATABASE_URL` and `provider` in `schema.prisma`!

Happy coding! 🎉
