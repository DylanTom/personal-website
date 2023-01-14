import React from "react";
import resume from "../data/resume.pdf";

function Nav () {
	return(
		<div className = "flex w-screen p-6 justify-end items-end">
			<ul className="flex flex-row space-x-4">
				<li>Portfolio</li>
				<li>About Me</li>
				<li>
					<a href={resume} target="_blank">Resume</a>
				</li>
			</ul>
		</div>
	)
}

export default Nav;