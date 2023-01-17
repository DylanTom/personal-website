import React from "react";
import { Link, NavLink } from "react-router-dom";
import resume from "../data/resume.pdf";

function LinkAnimation(link: string, description: string) {
	return (
		<NavLink to={link} className="py-2 px-4 group transition duration-300">
			{description}
			<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500"></span>
		</NavLink>
	);
}

function Nav() {
	return (
		<div className="flex w-screen p-6 justify-between">
			<div className="flex text-3xl text-teal-500">
				<NavLink to="/"><b>Dylan Tom</b></NavLink>
			</div>
			<div className="flex">
				<ul className="flex flex-row">
					{LinkAnimation("/", "About Me")}
					{LinkAnimation("/portfolio", "Portfolio")}
					{LinkAnimation("/personal", "This Website")}
					<li className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
						<a href={resume} target="_blank">Resume</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav;