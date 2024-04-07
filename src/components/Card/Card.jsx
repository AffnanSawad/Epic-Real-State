import { FaLocationDot } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { BsFillHouseAddFill } from "react-icons/bs";



const Card = ({card}) => {

    const {id,estate_title,image,description,rating,area,price,segment_name,status,location} = card;





    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-20  ">
  <figure> <img src= {image} alt="" />  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold "> {estate_title} 
 </h2> 
   
   <p className="font-bold">{segment_name}</p>
    <p> {description } </p>

   <div className="flex">
   <p className="font-extrabold">{price} </p>
   
   
    <div className="flex mr-6 ">
    <FcSalesPerformance />
 <p className="font-extrabold ml-2">{status} </p>
    </div>
    
<div className="flex ml-4">
<BsFillHouseAddFill />
<p className="font-extrabold ml-2 ">{area} </p>
</div>
    
   </div>
<div className="flex gap-2">
    
   <FaLocationDot />
 <p className="font-extrabold">{location} </p>
</div>

    <div className="card-actions mt-4 ">
      <button className="btn btn-accent">VIEW DETAILS</button>
    </div>
  </div>
</div>
    );
};

export default Card;