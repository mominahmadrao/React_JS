# 🚀 React + Tailwind Learning Projects

This repository is a **learning playground** for **React.js** with **Tailwind CSS**.  
Each project is designed to help practice and understand React concepts while applying Tailwind's utility-first CSS framework. The setup uses **Vite** for fast development and hot reloading. ⚡

---

## 🛠️ Project Setup

Follow these steps to set up the project locally:

### 1️⃣ Create a new Vite project

If you don’t have a Vite project yet:

```bash
npm create vite@latest my-project
cd my-project
```


### 2️⃣ Install Tailwind CSS

Install Tailwind CSS and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```
### 3️⃣ Configure the Vite plugin

Edit vite.config.js and add the Tailwind plugin:


```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 4️⃣ Import Tailwind CSS

In your main CSS file (e.g., src/index.css), add:

```bash
@import "tailwindcss";
```

### 5️⃣ Start the development server

Run the Vite dev server:
```bash
npm run dev
```