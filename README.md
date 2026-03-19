# FinAuto 🚀

FinAuto is a next-generation personal finance platform designed to automate and simplify your money management. Built with a modern dark-glassmorphism UI, it tracks budgets, manages savings goals, and delivers AI-powered financial insights. 

## LIVE DEMO ##
https://fin-auto.vercel.app/

## 🌟 Core Features

- **Smart Budgeting**: Set category budgets, track spending in real-time, and get alerts before you overspend.
- **Savings Goals**: Define your financial goals (vacation, gadgets, emergency fund) and watch your progress grow.
- **AI Insights**: Get personalized spending insights and actionable recommendations powered by analytics.
- **Secure Authentication**: Instant and secure one-click Google Sign-In via Firebase.
- **Beautiful UI/UX**: Fully responsive, glassmorphic dark-theme design that feels premium and state-of-the-art.

## 🛠️ Technology Stack

- **Frontend**: React 19, React Router v7, Vanilla CSS
- **Build Tool**: Vite
- **Authentication**: Firebase Authentication (Google Auth)
- **Charts/Analytics**: Recharts
- **Icons**: React Icons (Remix)

## 💻 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FinAuto.git
   cd FinAuto
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root of your project and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

## 📦 Production Build

To build the app for production to the `dist` folder:
```bash
npm run build
```

You can then deploy the `dist` folder to platforms like Vercel, Netlify, or Firebase Hosting.

## 📝 License

This project is open-source and built with ❤️ by G VARUN 
