import React, { useState } from "react";
import Timeline from "./Timeline";

import me from "/assets/me.png";
import timeline from "../data/timeline";

function getGrade() {
	let date = new Date();
	switch (date.getFullYear()) {
		case 2021:
			return "freshman"
		case 2022:
			return (date.getMonth() < 6) ? "freshman" : "sophomore"
		case 2023:
			return (date.getMonth() < 6) ? "sophomore" : "junior"
		case 2024:
			return (date.getMonth() < 6) ? "junior" : "senior"
		case 2025:
			return "senior"
	}
}

function About() {
	return (
		<div className="flex p-6 mx-52">
			<div className="flex flex-row space-x-8">
				<div className="flex flex-col">
					<h1 className="flex text-xl p-2">About Me</h1>
					<p className="flex p-2">I am currently a {getGrade()} at Cornell University, from New York City. I am studying computer science and mathematics with a concentration in software engineering, finance, and web development. You can reach me at dt425@cornell.edu.</p>
					<div className="flex p-2 items-center justify-center">
						<img src={me} width="50%" />
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center">
					<div className="w-full md:w-7/12">
						{timeline.map(x => (
							<Timeline title={x.title} duration={x.duration} description={x.description} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
};

export default About;