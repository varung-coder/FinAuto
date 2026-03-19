// Firebase configuration - gracefully handles missing/invalid config
let auth = null;
let db = null;
let googleProvider = null;
let firebaseReady = false;

const initFirebase = async () => {
  try {
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
    // Only init if real credentials are set
    if (!apiKey || apiKey.startsWith('placeholder')) {
      console.info('FinAuto: Firebase not configured. Running in demo mode.');
      return;
    }

    const { initializeApp } = await import('firebase/app');
    const { getAuth, GoogleAuthProvider } = await import('firebase/auth');
    const { getFirestore } = await import('firebase/firestore');

    const firebaseConfig = {
      apiKey,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
    firebaseReady = true;
  } catch (err) {
    console.warn('Firebase initialization failed:', err.message);
  }
};

// Initialize Firebase immediately (non-blocking)
initFirebase();

export { auth, db, googleProvider, firebaseReady };
export const getFirebaseAuth = () => auth;
export const getFirebaseDb = () => db;
export const getFirebaseProvider = () => googleProvider;
