import React from "react";

const AboutMeBanner = (props) => {
	return (
		<div
			className={`${props.styling} backdrop-blur-md bg-[#00838d] rounded-sm`}
		>
			<h1 className="font-bold text-3xl">About Me</h1>
			<p className="text-gray-100 text-md">
				I am a software engineer with a passion for learning new
				technologies. <br />I have a strong background in computer
				science with mastery in various technologies and a burning
				desire to use these skills in the practical world.
			</p>
			<p className="text-white"></p>
		</div>
	);
};

export default AboutMeBanner;
