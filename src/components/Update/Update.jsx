import Marquee from "react-fast-marquee";


const Update = () => {
    return (
        <div className="flex mb-5">

            <button className="btn  btn-error">UPDATE</button>
            <Marquee speed={150} pauseOnClick={true} pauseOnHover={true} >
            We are excited to announce our latest development project <span className=" bg-red-400">  PROJECT: EPIC-TILOTTOMA     </span> in the heart of the city <span className=" bg-red-400" > DHAKA </span> This new project will feature state-of-the-art residential and commercial spaces, setting new standards for modern living
     
     </Marquee>
            
        </div>
    );
};

export default Update;