import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";

function Portfolio() {
	return (
		<div className="flex flex-col p-6">
			<div className="text-center text-4xl font-bold pb-6">
				Some of my work
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((x) =>
					<ProjectCard
						title={x.title}
						stack={x.stack}
						img={x.img}
						link={x.link}
						summary={x.summary}
						reflection={x.reflection}
						start={x.start}
						end={x.end}
					/>
				)}
			</div>
		</div>
	)
};

export default Portfolio;