import { createContext, useState, useEffect } from 'react'

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

//actual value we want to access / storage
export const UserContext = createContext({
  currentUser: null, //empty value
  setCurrentUser: ()=> null, //empty function
})

//the actual component
//receives the value of the contextual value
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser]  = useState(null);
  const value = { currentUser, setCurrentUser }; //this allows the children components to access the getter and setter


  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}