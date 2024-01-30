import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {

  const firebaseConfig = {
    apiKey: "AIzaSyCgx877JWy9AtNIsjUq8tkuocTvOoOey0U",
    authDomain: "test-fbfad.firebaseapp.com",
    projectId: "test-fbfad",
    storageBucket: "test-fbfad.appspot.com",
    messagingSenderId: "856348750862",
    appId: "1:856348750862:web:e39b1884ca26b173ae385f"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return {
    provide: {
      auth,
    }
  }
})