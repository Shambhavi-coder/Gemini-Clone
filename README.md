# Gemini Clone

A responsive AI chat application inspired by Google Gemini, built using React and powered by the Gemini API.

The application provides a conversational interface where users can enter prompts and receive AI-generated responses. The Gemini API is accessed securely through a Netlify serverless function so that the API key is not exposed in the frontend.


## 📌 Features

- 🤖 AI-powered chat using Google Gemini
- 💬 Interactive conversational interface
- ⚡ Fast and responsive React UI
- 📱 Responsive design
- 📝 Dynamic prompt and response handling
- 🔐 Secure API key handling using Netlify Functions
- 🌐 Deployable on Netlify
- 🎨 Gemini-inspired user interface

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend / API
- Netlify Functions
- Google Gemini API

### Tools
- Git & GitHub
- npm
- Netlify

## 🏗️ Architecture

The application follows a simple frontend + serverless backend architecture:

```text
User
  │
  ▼
React / Vite Frontend
  │
  │ POST / prompt
  ▼
Netlify Serverless Function
  │
  │ GEMINI_API_KEY
  ▼
Google Gemini API
  │
  ▼
AI Response
  │
  ▼
React UI
