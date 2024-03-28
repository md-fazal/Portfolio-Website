import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<div className="-mt-20 -mb-64 ml-16 mr-28">
			<h1 className="text-slate-700 text-4xl font-bold">
				My Top Projects
			</h1>
			<div className="flex flex-row justify-center mt-14 h-au">
				<ProjectCard
					title={"Title"}
					desc={
						"DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
					}
					imgURL={"/Concerto.png"}
				/>
				<ProjectCard
					title={"Title"}
					desc={
						"DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
					}
					imgURL={"/Concerto.png"}
				/>
				<ProjectCard
					title={"Title"}
					desc={
						"DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
					}
					imgURL={"/Concerto.png"}
				/>
			</div>
		</div>
	);
};

export default Projects;
