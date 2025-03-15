# Firebase Demo

A demo project showcasing Firebase integration with Next.js and TypeScript.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/theonlyhennygod/firebase-demo.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Next.js 14 with App Router
- TypeScript
- Firebase Integration
- Tailwind CSS
- Radix UI Components

## Project Structure

```
src/
  ├── app/           # Next.js app router pages
  ├── components/    # React components
  ├── lib/          # Library code, utilities
  │   └── firebase/  # Firebase configuration
  └── types/        # TypeScript type definitions
```
