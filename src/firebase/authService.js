export const signInWithGoogle = async () => {
  try {
    const { signInWithPopup } = await import('firebase/auth');
    const { auth, googleProvider } = await import('./config');
    if (!auth || !googleProvider) throw new Error('Firebase not configured');
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    const { signOut } = await import('firebase/auth');
    const { auth } = await import('./config');
    if (!auth) throw new Error('Firebase not configured');
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};
