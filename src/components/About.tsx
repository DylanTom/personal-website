import React, { useState } from "react";
import Timeline from "./Timeline";

import me from "/assets/me.png";
import timeline from "../data/timeline";

function About() {
	return (
		<div className="flex p-6 mx-52">
			<div className="flex flex-row space-x-16">
				<div className="flex">
					<img src={me} width="100%" height="100%" />
				</div>
				<div className="flex flex-col md:flex-row justify-center">
					<div className="w-full md:w-7/12">
						{timeline.map(x => (
							<Timeline title={x.title} duration={x.duration} description={x.description} />
						))}
					</div>
				</div>
			</div>
			{/* Who is Dylan?

			I wasn't always a computer science major. My background was in biology until 2020 where I learned I had a passion for CS.
			<img src={me} width="25%"/> */}
		</div>
	)
};

export default About;