
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null);






const AuthProvider = ({children} ) => {


    const [user,setuser] = useState(null);
    const [loading,setloading]= useState(true);

    const googleprovider = new GoogleAuthProvider();

    const facebookprovider = new FacebookAuthProvider();



 

    // register
    
    const register = (email,password)=> {
       
        setloading(true)

       return createUserWithEmailAndPassword(auth ,email,password)

        
      }

      const login = (email,password)=>{
        
        
        setloading(true)
     return signInWithEmailAndPassword(auth,email,password)

      }

      //logout

      const logout = () => {
        
        
        setloading(true)
         return signOut(auth)
      }

      //google login

     
      //googleLogin

      const googlelogin = ()=> {
    
        return signInWithPopup(auth ,googleprovider)
 

      }

      //facebookLogin

      const facebooklogin = ()=>{

        return signInWithPopup(auth,facebookprovider)
      }
      //logout

      const logout1 = ()=>{
        return signOut(auth);
      }

      useEffect( ()=> {
  
        const unsubscribe=  onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
             
             setuser(currentuser)
            } 
            else {
            setuser(null)
            }
          });
  
          return ()=> {
            unsubscribe();
          }
    
         },[])
    



   // value
    const authinfo = {
         
        user,
        setuser,
        register,
        login,
        logout,
        googlelogin,
        facebooklogin,
        logout1,
        
       
    }

    return (
        <div>
            <AuthContext.Provider  value={authinfo} >


        {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;