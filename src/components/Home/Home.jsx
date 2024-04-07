import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import Poster from "../Poster/Poster";


const Home = () => {
    return (
        <div className=" max-w-7xl mx-auto " >
             
    <Nav></Nav>
       
      
       <Hero></Hero>
       <Poster></Poster>
       
       
       


     <Cards></Cards>


    <Footer></Footer>

    
    


        </div>
    );
};

export default Home;