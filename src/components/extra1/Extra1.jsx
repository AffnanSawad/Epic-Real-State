import { useEffect, useState } from "react";

export const Extra1= () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://i.ibb.co/gtKtP73/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg",}, {img: "https://i.ibb.co/2k5QqPq/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai.jpg", title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://i.ibb.co/8N8XbMH/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg", title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://i.ibb.co/N7kWYws/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-1.jpg", title: "Escape 4",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://i.ibb.co/Ht1zWF8/dining-area-comfortable-studio-flat-hotel-room.jpg", title: "Escape 5", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
        <>
            <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
             
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}/>
                ))}
            </div>
        </>
  )};




  export default Extra1;
