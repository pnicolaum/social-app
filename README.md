# 🧑‍🤝‍🧑 Social-app

**Social-app** is a modern Twitter-like social media platform built with **Next.js**. It allows users to share posts with images, follow others, like and comment on posts, and receive notifications in real time. It uses **Clerk** for authentication, **PostgreSQL (via Neon)** for the database, and **Prisma** as the ORM. **UploadThing** handles image uploads, and the app is deployed on **Vercel**.


## 🧠 Project Description

Social-app empowers users to interact socially through:

- 🔐 Secure authentication and user management with **Clerk**
- ✍️ Create posts with text and optional images
- 💬 Comment on posts
- ❤️ Like posts
- 👥 Follow/unfollow other users
- 👤 View and customize their profile
- 🔔 Receive notifications for:
  - New followers
  - Likes, comments and follows


## 🚀 Tech Stack

- **Frontend/Backend**: [Next.js](https://nextjs.org/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Database**: [PostgreSQL (Neon)](https://neon.tech/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Image Uploads**: [UploadThing](https://uploadthing.com/)
- **Deployment**: [Vercel](https://vercel.com/)


## 🛠️ Installation & Setup

### 1. Prerequisites

- [Clerk](https://clerk.dev/) account
- [Neon](https://neon.tech/) PostgreSQL database
- [UploadThing](https://uploadthing.com/) account
- [Vercel](https://vercel.com/) for deployment


### 2. Clone the Repository & Configure Environment

**Repository**: [https://github.com/pnicolaum/social-app](https://github.com/pnicolaum/social-app)

In the root folder, create a `.env` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_TOKEN=

```
### 3. Run the Project Locally
```bash
npm install
npx prisma generate
npx run dev

```