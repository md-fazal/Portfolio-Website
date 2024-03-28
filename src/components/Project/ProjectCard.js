import React from "react";
import { useState, useCallback } from "react";

const ProjectCard = ({ title, desc, imgURL }) => {
	const [hovered, sethovered] = useState(false);

	return (
		<div className="flex flex-col ml-24 relative">
			<div
				className="z-10 drop-shadow-lg"
				onMouseEnter={() => sethovered(true)}
				onMouseLeave={() => sethovered(false)}
			>
				<img
					className={`rounded-lg h-80 relative w-80 transition-all ease-in-out duration-300  ${
						hovered ? "-translate-y-10" : ""
					}`}
					href="#"
					src={imgURL}
					alt=""
				/>
			</div>
			<div
				className={`p-8 rounded-lg bg-slate-300 -top-60 -left-3 relative w-[21.5em] transition-all ease-in duration-300
            ${hovered ? "h-[23rem] translate-y-10" : "h-[16.5rem]"}`}
			>
				<div className={`transition-all ease-in-out duration-300 mt-32 mb-4 ${hovered ? "translate-y-4 opacity-100 " : "opacity-0"}`}>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
