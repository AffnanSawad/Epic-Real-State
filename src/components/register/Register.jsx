
import { Link } from "react-router-dom";



const Register = () => {
   
   


    const handleregister = e => {


        

     e.preventDefault();
     
     const email = e.target.email.value
     const password= e.target.password.value
     const name = e.target.name.value
     const url = e.target.url.value


     console.log(email,password,name,url)

    
     

    }





    return (
        <div className="hero min-h-screen bg-base-200  ">
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
    <input name="url" type="text" placeholder="url" className="input input-bordered"  />
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
    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
    <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>
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