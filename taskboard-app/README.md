# Taskboard

**Context:** Individual academic project at the Lebanese University.

A JavaScript web application for organizing tasks in shared workspaces. The implementation combines account access, workspace membership, task ownership and assignment, priorities, invitations, and notifications.

**Status:** application source is available. This documentation was checked against selected source files on 2026-10-22; the application was not executed or production-certified during that review.

## Implemented components visible in the source

- Account registration and login, bcrypt password hashing, and server-side sessions.
- Workspace records, membership, and owner/member roles.
- Tasks with status, priority, assignee, tags, and due dates.
- Invitations and user notifications.
- An email integration that invokes an AWS Lambda function.

## Technology and structure

The active `server.js` implementation uses **Node.js, Express, EJS, MongoDB, Mongoose, and a MongoDB-backed session store**. The dependency list also contains SQLite and MySQL-related packages; their presence should not be confused with the active MongoDB persistence path.

| Path | Purpose |
| --- | --- |
| `server.js` | Application startup, models, middleware, and routes |
| `emailService.js` | AWS Lambda email integration |
| `views/` and `public/` | Server-rendered pages and browser assets |
| `package.json`, `package-lock.json` | Dependency definitions and locked dependency tree |
| `db/taskboard.db` | Tracked database file requiring a data review; not the active MongoDB configuration |
| `.github/workflows/` | Deployment workflow files nested inside this project folder; not assumed to be active repository-level workflows |

## Local setup

Use an isolated development environment, an empty local MongoDB database, and synthetic accounts. Review the limitations below before running.

Prerequisites: Node.js and npm compatible with the locked dependencies, plus MongoDB. A tested runtime version still needs to be recorded.

From the repository root:

```sh
cd taskboard-app
npm ci
```

Create an untracked `.env` file in this directory:

```dotenv
MONGO_URI=mongodb://127.0.0.1:27017/taskboard_dev
SESSION_SECRET=replace-with-a-long-random-local-value
PORT=3000
```

Then start the application:

```sh
npm start
```

**Email integration:** authentication and application flows can call `sendEmail`. The current implementation invokes the `taskboard-email` Lambda function in `eu-west-1`. Before exercising those flows, provide a deliberately isolated test service or replace the email transport with a local mock in a development branch. Do not use production credentials or real recipients. A configurable local mail mode is a follow-up improvement, not an existing feature claimed here.

## Validation and limitations

- No automated `test` script is defined in the inspected `package.json`.
- The setup commands above have not yet been validated from a clean checkout.
- Review the tracked database and repository history for private data before redistribution.
- Set a strong `SESSION_SECRET`; the existing development fallback is not appropriate for production.
- Review session hardening, authorization boundaries, input handling, and dependencies before hosting.
- Existing deployment configuration should be reviewed against its intended cloud environment before being enabled or moved.

## Next improvements

Record a reproducible runtime; introduce safe local email delivery; add authentication, workspace authorization, and task-flow tests; replace any non-synthetic database contents with a documented seed process; and capture a demonstration using fictional data.

## Attribution

This page documents the implementation found in this repository. Developed individually as a Lebanese University academic project; third-party assets and notices still require their normal attribution. Preserve existing notices; no new license is assigned by this documentation.

[Back to portfolio](../README.md)
