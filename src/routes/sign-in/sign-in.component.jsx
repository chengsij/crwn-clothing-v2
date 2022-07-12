import { 
  signInWithGooglePopup,
  getAuthedUserDoc,
 }  from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logInGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const authnedUser = getAuthedUserDoc(user);
  };


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logInGooglePopupUser}>
        Sign in with Google Popup
      </button>
    </div>
  );
}

export default SignIn;