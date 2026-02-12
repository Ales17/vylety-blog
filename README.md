# Vylety - Blog Platform

A lightweight, high-performance blog built with **Next.js 15** and **Payload CMS 3.0**. This application is designed for a curated reading experience where access is managed strictly by the administrator.

---

## Project Logic & Authentication

This blog implements a **Passwordless Magic Link** system by leveraging Payload CMS's internal password recovery workflow. To ensure a private and secure environment, the following rules apply:

* **No Public Registration:** There is no sign-up form. All readers must be manually created by an admin in the Payload dashboard.
* **Pre-authorized Access:** Only existing users can request a login link.
* **Authentication Workflow:**
    1. A user enters their email address.
    2. The system triggers the `forgotPassword` method, which generates a secure, time-sensitive token.
    3. An email is sent to the user containing a link to `/login/[token]`.
    4. Upon clicking, the system utilizes the `resetPassword` functionality to verify the token and establish a valid session cookie, effectively logging the user in without a permanent password.



---

## Environment Variables

Create a `.env` file in the root directory and populate it with the following variables.

### Payload CMS
| Variable | Description | Example |
| :--- | :--- | :--- |
| **`PAYLOAD_SECRET`** | Secret string used to secure cookies and JWTs. | `your-random-secret` |
| **`ADMIN_EMAIL`** | The email address of the primary administrator. | `admin@example.com` |

### Database (PostgreSQL)
| Variable | Description | Example |
| :--- | :--- | :--- |
| **`DB_HOST`** | Database host | `localhost` |
| **`DB_PORT`** | Port the database is listening on. | `5432` |
| **`DB_USER`** | Database username. | `postgres` |
| **`DB_PASS`** | Database password. | `postgres` |
| **`DB_NAME`** | The name of the database. | `postgres` |

### General Settings
| Variable | Description | Example |
| :--- | :--- | :--- |
| **`WEBSITE_TITLE`** | The display name of the blog. | `Example.cz` |
| **`WEBSITE_URL`** | The full base URL of the application. | `http://localhost:3000` |

### Email Configuration (SMTP)
| Variable | Description | Example |
| :--- | :--- | :--- |
| **`SMTP_HOST`** | SMTP server hostname. | `smtp.example.com` |
| **`SMTP_PORT`** | SMTP server port. | `587` |
| **`SMTP_USER`** | The username for the SMTP account. | `info@example.com` |
| **`SMTP_PASS`** | The password for the SMTP account. | `your_password` |
| **`SMTP_FROM_ADDRESS`** | The email address used as the sender. | `info@example.com` |
| **`SMTP_FROM_NAME`** | The name displayed in the "From" field. | `Example.cz` |

---

## Development Setup

### 1. Database
The database runs in a Docker container. To start only the database:
```bash
docker compose up db -d