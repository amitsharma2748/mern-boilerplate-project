
# 🚀 MERN Stack Starter with Vite + TypeScript

A modern MERN (MongoDB, Express.js, React, Node.js) boilerplate with TypeScript support, designed for rapid full-stack development.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen) 
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue) 
![Vite](https://img.shields.io/badge/Vite-4.0.0-orange)

## ✨ Features

- **Frontend**: React 18 + TypeScript + Vite (blazing fast dev server)
- **Backend**: Express.js + MongoDB (Mongoose ODM)
- **Full TypeScript Support**: End-to-end type safety
- **Modern Tooling**: ESLint, Prettier configured
- **Ready-to-Deploy**: Includes production build scripts

## 📦 Prerequisites

- Node.js (v16.x or later)
- npm (v8.x or later) or yarn
- MongoDB (local or Atlas URI)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mern-project.git
cd mern-project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

## ⚙️ Configuration

Update your `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/yourdb
PORT=5000
VITE_API_BASE_URL=http://localhost:5000/api
```

## 🚦 Running the Project

### Frontend Development
```bash
npm run dev
```
Open http://localhost:5173

### Backend Development
```bash
cd server
npm start
```
Server runs on http://localhost:5000

### Production Build
```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
mern-project/
├── client/                   # Frontend (Vite + React + TS)
│   ├── public/               # Static assets
│   ├── src/                  # React components
│   │   ├── components/       # Reusable components
│   │   ├── hooks/            # Custom hooks
│   │   ├── pages/            # Route-based components
│   │   ├── utils/            # Helper functions
│   │   ├── App.tsx           # Main component
│   │   └── main.tsx          # Entry point
├── server/                   # Backend (Express + MongoDB)
│   ├── controllers/          # Route controllers
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   ├── middlewares/          # Express middlewares
│   └── index.js              # Server entry
├── .env.example              # Environment variables template
└── README.md                 # You are here :)
```

## 🔧 Tech Stack

| Area          | Technologies                          |
|---------------|---------------------------------------|
| Frontend      | React, TypeScript, Vite, TailwindCSS  |
| Backend       | Node.js, Express, MongoDB, Mongoose   |
| State Management | Context API / Redux Toolkit          |
| API           | RESTful / GraphQL (optional)          |
| Testing       | Jest, React Testing Library           |

## 🌐 API Endpoints

| Method | Endpoint       | Description                |
|--------|---------------|----------------------------|
| GET    | /api/products | Fetch all products         |
| POST   | /api/products | Create new product         |
| PUT    | /api/products/:id | Update product        |
| DELETE | /api/products/:id | Delete product        |

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Amit Sharma - [@yourtwitter](https://twitter.com/yourhandle) - sharma670amit@gmail.com

Project Link: [https://github.com/yourusername/mern-project](https://github.com/yourusername/mern-project)
```
