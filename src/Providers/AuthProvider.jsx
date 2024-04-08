import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.config";



export const AuthContext = createContext(null);






const AuthProvider = ({children} ) => {


    const [user,setuser] = useState(null);

 
    

    



   // value
    const authinfo = {
         
        user,
        setuser,
        
       
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