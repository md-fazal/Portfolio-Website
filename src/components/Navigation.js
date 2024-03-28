import React from "react";
import dot from "../assets/dot-svgrepo-com.svg"
import pattern from "../assets/pattern.svg"

const Navigation = () => {
	return <>
    <div className="grid grid-cols-2 lg:p-8 md:p-6 bg-[#86b1f2]">
        <div className="pl-2 flex flex-row">
            <img className="h-4 mt-auto mb-auto mr-2" src={dot} alt="dot"/>
            <a className="text-stone-800 font-bold text-2xl" href="#home">Fazal Mohammad</a>
        </div>
        <div className="flex justify-end">
            <a className="text-stone-800 pl-2 font-medium hover:scale-105" href="#projects">Projects</a>
            <a className="text-stone-800 pl-2 font-medium hover:scale-105 " href="#about">About</a>
            <a className="text-stone-800 pl-2 pr-2 font-medium hover:scale-105" href="#contact">Contact</a>
        </div>
    </div>
    </>;
};

export default Navigation;
