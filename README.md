# Cruise The Limit

A full-stack web application promoting eco-friendly and safe driving through gamified challenges, community engagement, and branded sticker kits.

## Tech Stack

### Backend
- **NestJS** with TypeScript
- **Prisma** ORM with PostgreSQL
- **Passport.js** (JWT, Google OAuth, Facebook OAuth)
- **Stripe** for payment processing
- **Swagger** for API documentation

### Frontend
- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **TailwindCSS 3.4** for styling
- **Lucide React** for icons
- **React Hot Toast** for notifications

## Project Structure

```
cruise-the-limit/
├── backend/
│   ├── prisma/              # Database schema & migrations
│   └── src/
│       ├── auth/            # Authentication (JWT, OAuth)
│       ├── users/           # User management
│       ├── challenges/      # Driving challenges
│       ├── orders/          # Sticker kit orders
│       ├── payments/        # Stripe payments
│       ├── testimonials/    # User testimonials
│       ├── contact/         # Contact messages
│       └── admin/           # Admin dashboard API
├── frontend/
│   └── src/
│       ├── app/             # Next.js pages (App Router)
│       │   ├── admin/       # Admin dashboard
│       │   ├── auth/        # OAuth callback
│       │   ├── challenge/   # Challenge page
│       │   ├── contact/     # Contact form
│       │   ├── core-values/ # Core values
│       │   ├── login/       # Login page
│       │   ├── membership/  # Sticker kit orders
│       │   ├── profile/     # User profile
│       │   ├── register/    # Registration
│       │   └── testimonials/# Testimonials
│       ├── components/      # Navbar, Footer
│       └── lib/             # API client, Auth context
└── package.json             # Root workspace scripts
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)
- Google/Facebook OAuth credentials (optional)

### 1. Clone & Install

```bash
git clone <repo-url>
cd cruise-the-limit

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 2. Environment Setup

**Backend** — create `backend/.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/cruisethelimit"
JWT_SECRET="your-jwt-secret-min-32-chars"
JWT_EXPIRATION="7d"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GOOGLE_CALLBACK_URL="http://localhost:3001/api/auth/google/callback"
FACEBOOK_APP_ID=""
FACEBOOK_APP_SECRET=""
FACEBOOK_CALLBACK_URL="http://localhost:3001/api/auth/facebook/callback"
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
FRONTEND_URL="http://localhost:3000"
STICKER_PRICE_CENTS=1499
```

**Frontend** — create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Run Development Servers

From the project root:
```bash
# Terminal 1 — Backend (port 3001)
cd backend && npm run start:dev

# Terminal 2 — Frontend (port 3000)
cd frontend && npm run dev
```

Or using root workspace scripts:
```bash
npm run dev:backend
npm run dev:frontend
```

## Features

- **Eco-Driving Challenges** — Users accept and track driving challenges
- **Sticker Kit Store** — Purchase branded sticker kits with Stripe checkout
- **Testimonials** — Community-driven testimonials with admin moderation
- **OAuth Login** — Google and Facebook social authentication
- **Admin Dashboard** — User management, order tracking, testimonial moderation, message inbox
- **Responsive Design** — Mobile-first UI with TailwindCSS

## API Documentation

When the backend is running, Swagger docs are available at:
```
http://localhost:3001/api/docs
```

## License

MIT



Email: admin@cruisethelimit.com
Password: admin123456