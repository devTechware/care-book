# 🩺📘 CareBook

### Doctor Appointment Booking & Medical Consultation Platform

🔗 **Live Site:** [https://care-book.vercel.app/](https://care-book.vercel.app/)

---

## 🌍 Overview

**CareBook** is a modern medical appointment booking system designed to help patients easily find doctors, view detailed profiles, and book appointments online.
It provides a smooth, secure, and user-friendly experience powered by Next.js, Express.js, MongoDB, and NextAuth authentication.

Whether you need a cardiologist, dermatologist, pediatrician, or general physician — CareBook makes the process simple and efficient.

---

## ✨ Key Features

- 👤 **Secure Authentication:** Register/Login using email & password or Google.

- 🩺 **Doctor Directory:** Browse doctors by specialty with detailed profiles.

- 📄 **Doctor Details Page:** View bio, experience, hospital, ratings, available days.

- 🗓️ **Appointment Booking:** Schedule appointments with preferred date & time.

- 🧾 **Manage Appointments:** Users can view, edit, or delete their booked appointments.

- 🔐 **Protected Routes:** Non-logged-in users are redirected to login.

- 🎨 **Modern UI:** Styled with Tailwind CSS v4 + DaisyUI for a polished medical theme.

- 📱 **Fully Responsive:** Optimized for mobile, tablet, and desktop.

---

## 🧰 Technologies Used

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| ⚡ **Next.js 16**      | Frontend framework & routing               |
| ⚛️ **React 19**       | UI rendering                               |
| 🎨 **TailwindCSS v4** | Utility-first modern styling               |
| 💠 **DaisyUI**        | Pre-styled medical-friendly UI components  |
| 🔐 **NextAuth**       | Authentication (Google + Credentials)      |
| 🚀 **Express.js**     | Backend API server                         |
| 🍃 **MongoDB Atlas**  | Database for users, doctors, appointments  |
| 🔄 **REST APIs**      | Data communication between client & server |
| 📸 **Next/Image**     | Optimized images for doctor profiles       |

---

## 🗂️ Project Structure

### 📁 Frontend (Next.js)

```bash
care-book/
├── app/
│   ├── api/auth/[...nextauth]/route.js
│   ├── appointments/
│   │   ├── book/page.jsx
│   │   ├── manage/page.jsx
│   │   ├── edit/page.jsx
│   ├── doctors/
│   │   ├── page.jsx
│   │   └── [id]/page.jsx
│   ├── login/page.jsx
│   ├── register/page.jsx
│   ├── layout.jsx
│   └── page.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── DoctorCard.jsx
│
├── public/
├── styles/globals.css
├── package.json
└── README.md

```

---

### 📁 Backend (Express.js)

```bash
care-book-server/
├── index.js
├── package.json
├── .env
└── README.md

```

---

## ⚙️ Environment Variables

### 🟦 Frontend (.env)

```bash

NEXTAUTH_SECRET=secret_key
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

GOOGLE_CLIENT_ID=google_client_id
GOOGLE_CLIENT_SECRET=google_client_secret

```
---

### 🟩 Backend (.env)

```bash

DATABASE_URL=mongodb_atlas_url

```
---

### 🧑‍🤝‍🧑 Contribution

Contributions are welcome!
Feel free to open an issue or submit a pull request to improve CareBook.

---

### 📜 License

Licensed under the MIT License — free to use, modify, and distribute.

---

### 💙 Your health matters — CareBook connects you with the right doctor, at the right time.