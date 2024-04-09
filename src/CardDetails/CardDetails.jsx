import {useLoaderData,useParams} from 'react-router-dom'
import 'animate.css';




const CardDetails = () => {

  const cards = useLoaderData();
  const {id} = useParams();
  const card = cards.find(card => card.id == id);

  console.log(card);
  

    return (

        

      
        <div className='grid grid-cols-4  mt-20 mb-20'>




    <div className='grid col-span-3'>

     <h1 className='text-2xl font-extrabold'> State Name :  {card.estate_title}  </h1>
     <h1 className='mt-5  text-xl font-bold'> Glimpsion of our State : <br />  <img className='mt-5' src={card.image} alt="" /> </h1>
    
       <h1 className="mt-10 text-xl font-semi-bold"> {card.para} </h1>


       <div className='flex gap-5 mt-5'>
    
    <button className='btn btn-primary'>PRICE:  {card.price} </button>
    <button className='btn btn-accent'>AREA:  {card.area} </button>

       </div>
    
    
    </div>


    <div className=' ml-10 w-96 mt-4 '>


    <h1 className="animate__animated animate__bounceIn text-4xl font-bold italic  text-blue-900"   > EXCLUSIVES : </h1>



   <img className=' mt-5' src="https://i.ibb.co/QDqqgdM/real-estate-banner-39.jpg" />
   <img className=' mt-5' src="https://i.ibb.co/c6CJ1T8/14jan7.jpg" />
   <img className=' mt-5' src="https://i.ibb.co/y8MWx9k/571.jpg" />
       



    </div>


        </div>
    );
};

export default CardDetails;