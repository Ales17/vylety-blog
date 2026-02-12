# Vylety - Blog Platform

A lightweight, high-performance blog built with **Next.js 15** and **Payload CMS 3.0**. This application is designed for a curated reading experience where access is managed strictly by the administrator.

---

## Project Logic & Authentication

This blog implements a **Magic Link** authentication system. Users don't need passwords—they receive a secure login link via email.

### Current Implementation: Magic Link

**How it works:**

1. User visits the login page and enters their email
2. System sends an email with a magic link (valid for a limited time)
3. User clicks the link and is automatically logged in
4. Session is created via secure cookie

**Key Features:**

- ✅ No passwords to remember or manage
- ✅ Secure token-based authentication
- ✅ Time-limited login links
- ✅ Admin-controlled user access (no public registration)

### Access Control

- **No Public Registration:** Users cannot sign themselves up. An admin must create accounts in the Payload dashboard.
- **Email-Based Access:** Only users with registered email addresses can request a login link.
- **Admin Only:** Only administrators can create, edit, or delete user accounts.

### Alternative: Password Authentication (Configurable)

Password-based authentication can be enabled via environment variable for demo and testing purposes.

When enabled:

- Users log in with email and password instead of magic links
- Passwords are managed in the Payload dashboard
- Useful for demos, testing, and future implementations

---

## Environment Variables

Create a `.env` file in the root directory and populate it with the following variables.

### Next

| Variable                      | Description                                                                        |
| :---------------------------- | :--------------------------------------------------------------------------------- |
| **`PAYLOAD_SECRET`**          | Secret string used to secure cookies and JWTs.                                     |
| **`ADMIN_EMAIL`**             | The email address of the primary administrator.                                    |
| **`NEXT_PUBLIC_AUTH_METHOD`** | Authentication method: `magic-link` (default, secure) or `password` (demo/testing) |

### Database (PostgreSQL)

| Variable      | Description                        | Example     |
| :------------ | :--------------------------------- | :---------- |
| **`DB_HOST`** | Database host                      | `localhost` |
| **`DB_PORT`** | Port the database is listening on. | `5432`      |
| **`DB_USER`** | Database username.                 | `postgres`  |
| **`DB_PASS`** | Database password.                 | `postgres`  |
| **`DB_NAME`** | The name of the database.          | `postgres`  |

### General Settings

| Variable            | Description                           | Example                 |
| :------------------ | :------------------------------------ | :---------------------- |
| **`WEBSITE_TITLE`** | The display name of the blog.         | `Example.cz`            |
| **`WEBSITE_URL`**   | The full base URL of the application. | `http://localhost:3000` |

### Email Configuration (SMTP)

| Variable                | Description                             | Example            |
| :---------------------- | :-------------------------------------- | :----------------- |
| **`SMTP_HOST`**         | SMTP server hostname.                   | `smtp.example.com` |
| **`SMTP_PORT`**         | SMTP server port.                       | `587`              |
| **`SMTP_USER`**         | The username for the SMTP account.      | `info@example.com` |
| **`SMTP_PASS`**         | The password for the SMTP account.      | `your_password`    |
| **`SMTP_FROM_ADDRESS`** | The email address used as the sender.   | `info@example.com` |
| **`SMTP_FROM_NAME`**    | The name displayed in the "From" field. | `Example.cz`       |

---

## Development Setup

### 1. Database

The database runs in a Docker container. To start only the database:

```bash
docker compose up db -d
```
