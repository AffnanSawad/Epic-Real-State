import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";


const Home = () => {
    return (
        <div>
             
    <Nav></Nav>
       
       <div className="  max-w-7xl mx-auto ml-32">
       <Hero></Hero>
       </div>


     <Cards></Cards>


    <Footer></Footer>

    
    


        </div>
    );
};

export default Home;