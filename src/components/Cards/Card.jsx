
import React from "react";

// react icons
import {BsArrowRight} from "react-icons/bs";
const peopleData = [
    {
        name: "Asfak Ahmed",
        title: "Founder & CEO of ZenUI Library",
        description: "Asfak Ahmed is a professional Front-End Web Developer. Born on 12 Oct 2004. He’s known for creating ZenUI.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
        name: "Ritika Sharma",
        title: "Lead UI/UX Designer at PixelCraft",
        description: "Ritika specializes in designing intuitive, user-first interfaces. She’s passionate about design systems and accessibility.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", 
    },
    {
        name: "Rohan Mehta",
        title: "Backend Architect at CodeNest",
        description: "Rohan is a backend specialist with a love for scalable systems and clean APIs. He’s worked with Node.js and Laravel.",
        image: "./ms_office.png", 
    }
];

const Card = () => {

    return (
        <>
        
{/* course title in center */}
        <h1 className="text-center text-[2rem] font-semibold dark:text-[#abc2d3] text-[#424242] mt-12">Our Course</h1>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 w-full mt-10 p-5">
    {peopleData.map((person, index) => (
        <div
            key={index}
            className="flex-1 dark:bg-slate-800 bg-white boxShadow rounded-xl max-w-sm">
            
            <img
                src={person.image}
                alt={person.name}
                className="w-full h-[260px] object-contain rounded-t-xl"
            />

            <div className="p-5">
                <h1 className="text-[1.3rem] font-bold dark:text-[#abc2d3] leading-[24px]">
                    {person.name}
                </h1>
                <span className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-400">
                    {person.title}
                </span>

                <p className="text-gray-600 dark:text-[#abc2d3] mt-3">
                    {person.description}
                </p>

                <button
                    className="py-2.5 px-4 bg-gray-300 dark:bg-slate-700 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] dark:text-[#abc2d3] group">
                    Learn more
                    <BsArrowRight className="text-[1.3rem] text-gray-600 dark:text-[#abc2d3] group-hover:ml-2 transition-all duration-200" />
                </button>
            </div>
        </div>
    ))}
</div>


        </>
    );
};

export default Card;
                    