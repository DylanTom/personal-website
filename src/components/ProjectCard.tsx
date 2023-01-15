import React from "react";
import { TProject } from "../data/projects";

function ProjectCard(props: TProject) {
	return (
		<div className="flex flex-col shadow-md hover:shadow-xl hover: cursor-pointer justify-center items-center m-6 border-2">
			<img src={props.img} className="w-full h-36 md:h-48" />
			<div className="w-full p-4">
				<div className="text-xl md:text-2xl mb-2 md:mb-3 font-semibold2 text-center">
					{props.title}
				</div>
				<div className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
					{props.stack.sort().map(item => {
						return <span className="inline-block px-2 py-1 border-2 border-stone-900 rounded-md">
							{item}
						</span>
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;