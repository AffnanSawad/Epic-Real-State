
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null);






const AuthProvider = ({children} ) => {


    const [user,setuser] = useState(null);
    const [loading,setloading]= useState(true);


 

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
    



   // value
    const authinfo = {
         
        user,
        setuser,
        register,
        login,
        logout
        
       
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