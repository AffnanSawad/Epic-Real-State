
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";




const Login = () => {


    const {login,googlelogin,facebooklogin,setuser} = useContext(AuthContext)


  

    const handlelogin = e => {

       


        e.preventDefault();
        
        const email = e.target.email.value
        const password= e.target.password.value
      
   
   
        console.log(email,password);
      

      
        login(email,password)
      .then(result => console.log(result.user))
       .catch(error=> console.error(error))
   
   
       }

       //googlelogin

       const handlegooglelogin = ()=>{

        googlelogin()
        .then(result => setuser(result.user))
    }

    //facebooklogin
       const handlefacebooklogin = ()=>{

        facebooklogin()
        .then(result => setuser(result.user))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">To access all the features and the services . Please Log In first! If you do not have any account , please Register first !!!</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">

           


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">Login</button>
              </div>

            <div>

              
              
              <div className="flex gap-4">
              <button onClick={handlefacebooklogin} className="btn btn-primary"> FACEBOOK LOG IN </button>

            <button onClick={handlegooglelogin} className="btn btn-secondary"> GOOGLE LOG IN </button>              </div>

            </div>


              <p>If you  dont have  any account. Please <Link to='/signup' >
              
              <button className="btn btn-accent">Register</button> 
              
              </Link> first. </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;