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

# MCP Server Configuration (optional)
MCP_PORT=3001
MCP_HOST=localhost
```

4. Run the development server:
```bash
npm run dev
```

5. Start the MCP server (in a separate terminal):
```bash
npm run mcp:dev
```

For production:
```bash
npm run mcp:start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Next.js 14 with App Router
- TypeScript
- Firebase Integration
- Tailwind CSS
- Radix UI Components
- Model Context Protocol (MCP) Server with Puppeteer

## Project Structure

```
src/
  ├── app/           # Next.js app router pages
  ├── components/    # React components
  ├── lib/          # Library code, utilities
  │   └── firebase/  # Firebase configuration
  └── types/        # TypeScript type definitions

# Configuration Files
├── mcp.config.js   # MCP server configuration
├── package.json    # Project dependencies and scripts
└── tsconfig.json   # TypeScript configuration
```

## MCP Server

The Model Context Protocol server is configured to run on port 3001 by default. You can customize the configuration in `mcp.config.js`. The server supports both development and production modes:

- Development mode: `npm run mcp:dev`
  - Runs with debug logging
  - Browser is visible (non-headless)

- Production mode: `npm run mcp:start`
  - Runs with info logging
  - Headless browser
  - Optimized for production use

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# MCP Server Configuration (optional)
MCP_PORT=3001
MCP_HOST=localhost
```