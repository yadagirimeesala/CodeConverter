# CodeConverter

An AI-powered web application that instantly converts code between programming languages using advanced LLMs (Perplexity, OpenAI, or Hugging Face). Built with a modern React frontend and a robust Node.js/Express backend, CodeConverter offers a seamless, intuitive experience for developers and learners alike.

---

## 🚀 Features
- **Instant Code Conversion:** Paste code, select source & target languages, and get results in seconds.
- **Modern UI:** Responsive, side-by-side code editors with syntax highlighting (CodeMirror).
- **Multiple Languages Supported:** Python, JavaScript, Java, C++, Go, Ruby, TypeScript (easily extendable).
- **Secure API Integration:** Backend securely connects to Perplexity (or other LLMs) using environment variables.
- **Copy & Swap:** One-click copy and language swap for fast workflows.
- **Deployed Online:** Try it live (see below)!

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, CodeMirror, CSS Flexbox
- **Backend:** Node.js, Express.js, Axios
- **AI Integration:** Perplexity API (can be swapped for OpenAI/Hugging Face)
- **Deployment:** Render (Backend as Web Service, Frontend as Static Site)
- **Version Control:** Git & GitHub

---

## 📦 Project Structure
```
Code_Converter/
  backend/
    src/
      app.js
      controllers/
      routes/
      services/
    package.json
  frontend/
    src/
      pages/
      api/
      assets/
      App.jsx
      App.css
      main.jsx
    public/
    package.json
  README.md
```

---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/CodeConverter.git
cd CodeConverter
```

### 2. Backend Setup
```bash
cd backend
npm install
# Add your Perplexity API key to .env
# Example .env:
# PERPLEXITY_API_KEY=your_key_here
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev  # or npm start if using CRA
```

### 4. Usage
- Open the frontend in your browser (default: http://localhost:5173 or http://localhost:3000)
- Enter code, select languages, and click Convert!

---

## 🌐 Deployment
- **Backend:** Deployed on Render as a web service (set environment variables in Render dashboard).
- **Frontend:** Deployed on Render as a static site (build and publish the `dist` folder).

---

## 🤖 AI Model
- Uses Perplexity's LLM API for code conversion.
- Easily switch to OpenAI or Hugging Face by updating the backend service.

---

## 📝 License
MIT License

---

## 🙌 Acknowledgements
- [Perplexity AI](https://www.perplexity.ai/)
- [uiwjs/react-codemirror](https://github.com/uiwjs/react-codemirror)

---

## 💡 Author
- [Yadagiri](https://www.linkedin.com/in/yadagiri-meesala)

---

## ⭐️ Show your support
If you like this project, please star the repo and connect with me on LinkedIn!
