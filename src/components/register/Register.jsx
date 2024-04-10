
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";





const Register = () => {

    const {register} = useContext(AuthContext)
    const [error,seterror] = useState('')
    //const [noerror,noseterror] = useState('')

    const [showpassword,setshowpassword] = useState(false)


   
   


    const handleregister = e => {


        

     e.preventDefault();
     
     const email = e.target.email.value
     const password= e.target.password.value
     const name = e.target.name.value
     const url = e.target.url.value




     if(password.length < 6 ){
        seterror('PASSWORD must be larger than 6 words');
       
        return;
    }
    
   if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)  ){
  
    seterror('password must contain atleast one UPPER & LOWER case letter')

    return;

   }
   //if(password.length > 6 ){
   // noseterror('registered succesfully')
   
   // return;
  //}
    
    
    
    
    
    
    seterror('')


     console.log(email,password,name,url)


    register(email,password)
     .then(result => console.log(result.user))
        .catch(error=>console.error(error))
    
     

    }

    //userupdate

   





    return (
        <div className="hero min-h-screen bg-base-200  ">

      
<Helmet>
          <title> EPIC | REGISTER  </title>
        </Helmet>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">If You Dont have any acoount ! Please Register first !!</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           
           


            <form  onSubmit={handleregister} className="card-body">



<div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
  </div>
<div className="form-control">
    <label className="label">
      <span className="label-text">Photo URl</span>
    </label>
    <input name="url" type="url" placeholder="url" className="input input-bordered"  />
  </div>






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
<div  className=" relative">


<input
     name="password" 
     type={ showpassword ? 'text' : 'password'  }
      placeholder="password" 
      className="input input-bordered" 
      required />
    <span className=" absolute -ml-5 mt-3 w-32" onClick={ ()=> setshowpassword(!showpassword) }>

  {
    showpassword ? <IoEye />

    :  <IoMdEyeOff />


  }

  

    </span>



</div>



    <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>

  
 
  {
        error &&  <div>
          <h4 className=" bg-red-500">{error} </h4>
        </div>  

        

        

    }
  


  <div className="form-control mt-6">
    <button className="btn btn-primary">Register</button>
  </div>
  <p>If you have already a account. Please <Link to='/login' >
  
  <button className="btn btn-accent">LOG IN </button> 
  
  </Link> first. </p>
</form>






           
          </div>
        </div>
      </div>
    );
};

export default Register;