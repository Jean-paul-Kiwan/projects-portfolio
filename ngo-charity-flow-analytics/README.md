# NGO Charity Flow Analytics

A web application for maintaining NGO and donation records, exposing API endpoints, and presenting dashboard and analytics views.

**Status:** source code and an API contract are available. This page was checked against selected source files on 2026-10-22; runtime behavior and results have not yet been independently validated.

## Scope

The inspected implementation includes NGO and donation models/routes, an Express server, browser assets, and EJS pages for the dashboard, NGO records, donations, and analytics. The [API contract](api_contract.md) describes a broader intended design, including campaigns and beneficiaries; those descriptions alone do not establish that every feature is implemented.

## Technology and structure

**JavaScript · Node.js · Express · MongoDB/Mongoose · EJS**

```text
ngo-charity-flow-analytics/
├── api_contract.md
└── backend/
    ├── package.json
    ├── package-lock.json
    ├── .env.example
    └── src/
        ├── server.js
        ├── config/
        ├── models/
        ├── routes/
        ├── views/
        └── public/
```

## Local setup

Use Node.js/npm compatible with the locked dependencies and an isolated MongoDB database containing fictional data. A tested runtime version still needs to be recorded.

From the repository root:

```sh
cd ngo-charity-flow-analytics/backend
npm ci
```

Create an untracked `.env` file in `backend/`, using `.env.example` as a reference:

```dotenv
MONGO_URI=mongodb://127.0.0.1:27017/ngo_charity_dev
PORT=3000
```

Start the application with `npm start`, or use `npm run dev` for the configured development watcher.

## Routes visible in the server

| Route | Purpose |
| --- | --- |
| `/health` | Server health response |
| `/api` | API service information |
| `/ngos` | NGO API routes |
| `/donations` | Donation API routes |
| `/dashboard` | Dashboard view |
| `/ui/ngos` | NGO management view |
| `/ui/donations` | Donation management view |
| `/ui/analytics` | Analytics view |

Do not treat a reachable health endpoint as proof that all application flows or analytics are correct.

## Validation and next steps

No automated `test` script is defined in the inspected package manifest. Validate installation from a clean checkout, database connectivity, record validation, CRUD behavior, view rendering, and analytics against synthetic fixtures. Reconcile the API contract with implemented endpoints before claiming complete coverage.

Do not use real donor or beneficiary information in screenshots, example datasets, or a public demonstration. Review access control and production configuration before hosting.

## Attribution

Course context and additional contributors should be recorded when the original materials are reconciled. Retain existing code and asset notices. This documentation does not assign a new repository-wide license.

[Back to portfolio](../README.md)
