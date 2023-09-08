import React from "react";
import '../../app/globals.css';

const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center  gap-16">
            <div className="">
                <img src="./logo.jpg" alt="frontend-ui" className="w-[100px]" />
            </div>
            <div className="md:flex  justify-evenly items-center gap-7 font-montserrat hidden">
                <p>Emotions</p>
                <p>Manifesto</p>
                <p>Self-Awareness test</p>
                <p>Work with us</p>
            </div>
            <div className="bg-black rounded-md text-white px-5 py-2 flex items-center font-monteserrat">
                <button>Download app</button>
            </div>
        </nav>
    );
}

export default Navbar;
