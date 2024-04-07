import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";


const Error = () => {

    const error =  useRouteError();
  console.error(error);

    return (
        <div className="text-center mt-40">
            
    <h1 className="text-2xl  font-extrabold" > 404 ! PAGE NOT FOUND!!! PLEASE GO TO THE RIGHT PAGE    </h1>

    <h1 className="text-2xl  font-extabold"> Please go first <Link to='/home' > <button className="btn btn-accent" >HOME</button> </Link>  </h1>


        </div>
    );
};

export default Error;