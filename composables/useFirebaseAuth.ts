import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp();

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      )

      const user = userCredential.user;
      console.log('-- user login:', user);
    } catch (error) {
      console.error('-- error login user:', error);
    }
  }

  const logOut = async () => {
    try {

      const userCredential = await signOut($auth);

      const user = userCredential;
      console.log('-- user login:', user);
      return user;
    } catch (error) {
      console.error('-- error log out user:', error);
    }
  }

  return {
    login,
    logOut,
  };
};