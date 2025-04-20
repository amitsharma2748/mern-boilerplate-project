
# 🚀 MERN Boilerplate with Node.js, Vite & TypeScript

[![GitHub stars](https://img.shields.io/github/stars/amitsharma2748/mern-boilerplate-project?style=social)](https://github.com/amitsharma2748/mern-boilerplate-project/stargazers)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)

## 🌟 Tech Stack Highlights
| Component       | Technology                          |
|-----------------|-------------------------------------|
| **Runtime**     | Node.js 18 LTS                      |
| **Frontend**    | React 18 + Vite + TypeScript        |
| **Backend**     | Express.js + Node.js                |
| **Database**    | MongoDB (Mongoose ODM)              |
| **Build Tool**  | Vite 4                              |

## 🛠️ Node.js Requirements
- **Node.js 18.x** or higher required
- **npm 9.x** or **yarn 1.22.x**
- **MongoDB** 6.0+ (local or Atlas)

```bash
# Verify Node.js version
node -v
# Should output: v18.x.x or higher
```

## 🚀 Quick Start with Node.js

1. **Clone and install**:
```bash
git clone https://github.com/amitsharma2748/mern-boilerplate-project.git
cd mern-boilerplate-project
npm install
```

2. **Configure environment**:
```bash
cp .env.example .env
# Edit .env with your MongoDB URI
```

3. **Run the Node.js server**:
```bash
cd server
npm start  # Starts Node.js/Express server on port 5000
```

4. **Run Vite frontend** (in another terminal):
```bash
npm run dev  # Starts frontend on port 5173
```

## 🔧 Key Node.js Features
- **Express.js** with TypeScript support
- **Mongoose** for MongoDB interactions
- **JWT Authentication** ready
- **Error handling** middleware
- **ES Modules** syntax

```javascript
// Example Node.js/Express route
import express from 'express';
const router = express.Router();

router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
```

## 📂 Enhanced Project Structure
```
mern-boilerplate-project/
├── server/                  # Node.js Backend
│   ├── config/              # DB configuration
│   ├── controllers/         # Route controllers
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   ├── app.ts               # Express app setup
│   └── server.ts            # Node.js server entry
├── client/                  # Vite Frontend
│   └── [previous structure]
```

## 🐳 Docker Support (Optional)
```bash
# Build and run with Docker
docker-compose up --build
```

## 📬 Connect
**Amit Sharma**  
  
📧 sharma670amit@gmail.com  
💻 [GitHub](https://github.com/amitsharma2748)  
🔗 [LinkedIn](https://www.linkedin.com/in/amit-sharma-071654158/)

---
⭐ **Star this repo** if you find it useful!  
🐞 **Node.js issues?** [Report here](https://github.com/amitsharma2748/mern-boilerplate-project/issues)
```
The README now properly highlights Node.js as a core technology while maintaining all previous improvements.
