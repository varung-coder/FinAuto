import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // Start with loading=false in demo mode; auth will be set up async if Firebase is real
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only attempt real Firebase auth if environment has non-placeholder keys
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
    const isConfigured = apiKey && !apiKey.includes('placeholder') && apiKey !== 'undefined';

    if (!isConfigured) {
      console.info('[FinAuto] Running in demo mode — Firebase not configured.');
      return;
    }

    // Real Firebase auth setup (async, non-blocking)
    let unsubscribe = () => {};
    setLoading(true);

    (async () => {
      try {
        const { getAuth } = await import('firebase/auth');
        const { initializeApp, getApps } = await import('firebase/app');
        const { GoogleAuthProvider } = await import('firebase/auth');
        const { onAuthStateChanged } = await import('firebase/auth');

        let app;
        if (getApps().length === 0) {
          app = initializeApp({
            apiKey,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID,
          });
        } else {
          app = getApps()[0];
        }

        const auth = getAuth(app);
        unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });
      } catch (err) {
        console.warn('[FinAuto] Firebase auth error:', err.message);
        setLoading(false);
      }
    })();

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
