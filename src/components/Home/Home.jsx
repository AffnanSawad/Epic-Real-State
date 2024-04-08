import Cards from "../Cards/Cards";
import Hero from "../Hero/Hero";
import Poster from "../Poster/Poster";
import Update from "../Update/Update";


const Home = () => {
    return (
        <div className=" md:max-w-7xl mx-auto " >
             
    

       <Update></Update>
       
      
       <Hero></Hero>
       <Poster></Poster>
       
       
       


     <div className="md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3" >
     
     </div>

     <div className="grid grid-cols-1 " >

     <Cards> </Cards>

     </div>

   



    
    


        </div>
    );
};

export default Home;