import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, 
} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC7sENwVg0kcyO3lQvJZ-Tp_vMNugDOOo",
  authDomain: "crwn-clothing-react-207c9.firebaseapp.com",
  projectId: "crwn-clothing-react-207c9",
  storageBucket: "crwn-clothing-react-207c9.appspot.com",
  messagingSenderId: "535139195857",
  appId: "1:535139195857:web:af5609f3a012cdf37f9ef0",
  measurementId: "G-8464H8JKC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);