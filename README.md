# AAVAHAN-INNOVOVATE

Official website for AAVAHAN-INNOVOVATE, the annual techno-cultural fest at SUIIT, Sambalpur. The repo contains a React/Vite frontend in `client/` and an Express/Mongoose API in `server/`.

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Redux Toolkit, React Router, GSAP/Framer Motion
- **Backend:** Node.js, Express, MongoDB/Mongoose, JWT auth, Nodemailer, Swagger
- **Tooling:** ESLint, Cloudinary uploads

## Project Structure

```text
.
├── client/                 # React frontend
│   ├── src/
│   └── vite.config.js      # Dev proxy: /api -> http://localhost:3000
├── server/                 # Express API
│   ├── Controllers/
│   ├── Routes/
│   ├── Models/
│   ├── Middlewares/
│   ├── Utils/
│   ├── db/connect.js
│   └── index.js
├── dev.js                  # Installs deps if needed, starts server + client
└── package.json            # Root scripts and server dependencies
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- MongoDB database

### Install

Install root/server dependencies and client dependencies:

```bash
npm install
cd client
npm install
cd ..
```

### Run in Development

From the repo root:

```bash
npm run dev
```

This runs `dev.js`, which installs missing dependencies and starts:

- API server: `npm start` (`node server/index.js`, default `http://localhost:3000`)
- Client dev server: `npm run dev` in `client/` (Vite)

Run separately if preferred:

```bash
# terminal 1
npm start

# terminal 2
cd client
npm run dev
```

## Environment Variables

Create a `.env` file in the repo root for the server, and a `.env` file in `client/` for the frontend.

### Root `.env` (server)

| Variable | Purpose |
|---|---|
| `MONGO` | MongoDB connection string |
| `JWT_SECRET` | JWT signing secret |
| `ENCRYPTION_KEY` | Base64 key used for password encryption (AES-256 expects 32 bytes) |
| `ENCRYPTION_IV` | Base64 IV used for password encryption (AES expects 16 bytes) |
| `EMAIL` | Email account used by auth mail utilities |
| `PASSCODE` | Email password/app password used by auth mail utilities |
| `CLIENT_URL` | Allowed frontend origin for CORS |
| `PORT` | API port; defaults to `3000` |
| `NODE_ENV` | Runtime mode, e.g. `development` or `production` |

> Note: `server/helper/mailhandler.js` currently reads `process.env.Email` and `process.env.Password`. Keep this in mind if you use that helper; the main auth mail utility uses `EMAIL` and `PASSCODE`.

### `client/.env` (frontend)

| Variable | Purpose |
|---|---|
| `VITE_BASE_SERVER_URL` | Axios base URL for API requests |
| `VITE_UPLOAD_PRESET` | Cloudinary upload preset |
| `VITE_CLOUD_NAME` | Cloudinary cloud name |
| `VITE_API_URL` | Cloudinary upload endpoint used by payment/registration uploads |

## API Docs

When the server is running, Swagger UI is available at:

```text
http://localhost:3000/api-docs
```

## Useful Scripts

### Root

```bash
npm run dev     # start server + client via dev.js
npm start       # start API server
```

### Client

```bash
cd client
npm run dev      # Vite dev server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint
```

## Notes

- Admin access is role-based (`User.role`); admin credentials are not stored in the repository.
- The Vite dev server proxies `/api` requests to `http://localhost:3000`.
- Frontend static assets live under `client/public/` and `client/src/assets/`.

## Credits

Made with ❤️ by [Manas](https://manas-ranjan-dikshit.netlify.app/) and [Debashish](https://github.com/deba608).
