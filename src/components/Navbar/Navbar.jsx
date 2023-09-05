import React from "react";
import '../../app/globals.css';

const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center  gap-16">
            <div className="">
                <img src="./logo.jpg" alt="frontend-ui" className="w-[100px]" />
            </div>
            <div className="flex  justify-evenly items-center gap-7 font-bold ">
                <p>Emotions</p>
                <p>Manifesto</p>
                <p>Self-Awareness test</p>
                <p>Work with us</p>
            </div>
            <div className="bg-black rounded-3xl text-white px-5 py-2 flex items-center font-bold">
                <button>Download app</button>
            </div>
        </nav>
    );
}

export default Navbar;
