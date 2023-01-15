import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import { personal } from "../data/projects";

function Personal() {
	return (
		<div className="flex flex-col p-6 mx-52">
			<div className="text-center text-4xl font-bold pb-6">
				Through the Years
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{personal.map((x) =>
					<ProjectCard
						title={x.title}
						stack={x.stack}
						img={x.img}
						link={x.link}
						summary={x.summary}
						reflection={x.reflection}
						start={x.start}
						end={x.end}
						key={x.key}
					/>
				)}
			</div>
		</div>
	)
};

export default Personal;