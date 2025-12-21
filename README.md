# Digital Life Lessons

A full-stack web application to create, explore, and learn life lessons. Users can browse public lessons, save favorites, report inappropriate content, and access premium content using Stripe payment. The app uses **React**, **Tailwind CSS**, **React Query**, **Firebase Authentication**, and a **Node.js + Express + MongoDB backend**.

---

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Styling
- **React Query** (`@tanstack/react-query`) - Data fetching & caching
- **React Hook Form** - Form handling
- **React Icons** - Icons
- **Firebase Authentication** - User authentication
- **Axios** - HTTP client for API requests

### Backend
- **Node.js + Express** - REST API server
- **MongoDB** - Database
- **Firebase Admin SDK** - JWT verification
- **Stripe** - Payment processing
- **CORS** - Cross-origin requests
- **dotenv** - Environment variable management

---

##  Features

- Browse and search **public lessons**
- Filter lessons by **category** and **emotional tone**
- Sort lessons by **newest** or **most saved**
- Save lessons as **favorites**
- Report inappropriate lessons
- Firebase **authentication**
- Stripe **premium membership**
- Dashboard with **analytics** (top contributors, active contributors, etc.)

---

## Frontend Implementation Notes

- **React Query** handles all data fetching and caching.
- **React Hook Form** used for forms (lesson creation, report submission).
- **Firebase Authentication** manages JWT-based user auth.
- **Tailwind CSS** is used for responsive styling.
- All filtering, sorting, and search is **API-driven**.
- Components:
  - `PublicLessonsCards`
  - `PublicLessonsCard`
  - `SearchFilterSort`
  - `LoadingSpinner`
  - `FavoritesList`
  - `ReportForm`

---

