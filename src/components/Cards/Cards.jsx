import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
   
    const [cards , setcards  ] = useState([]);

    useEffect( 
        
        ()=> {

    fetch('data.json')
    .then(res=> res.json())
    .then(data=>setcards(data));


        }
        
        ,[])



    return (
        <div  className=" md:grid  grid-cols-3  " >
            
        {
    
    cards.map( card => <Card  key={card.id} card={card}  ></Card>  )
    
        }
    
    
    
    
            </div>
    );
};

export default Cards;