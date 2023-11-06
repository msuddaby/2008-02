# Matt's Music

This project is a demonstration of my capabilities with Next.js 13, React, TypeScript, Stripe, and Firebase.

## Getting Started
First, set the environment variables for the real-time database through Firebase.

Required variables:
```env
TYPE=
PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY=
CLIENT_EMAIL=
CLIENT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_PROVIDER_CERT_URL=
CLIENT_CERT_URL=
UNIVERSE_DOMAIN=
DATABASE_URL=
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Directory listing
```
/ Home
|-/albums - Album List
|-/album/{id} - View album by Id
```