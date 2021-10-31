import  { useEffect, useState } from 'react';
import { GoogleAuthProvider , getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Login/Firebase/Firebase.init';


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
       return (signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user)
        })
        .finally(()=> setIsLoading(false)));
    }
    const logOut = () =>{
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth)
        .then(()=>{
            
        })
        .finally(()=>setIsLoading(false))
    }
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unSubscribed;
    },[])

return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading
}
}
export default useFirebase;