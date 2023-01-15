import React, { useEffect, useState } from "react";
import Modal from "./Modal";

import github from "/assets/logos/github-mark-white.svg";
import seeMore from "/assets/logos/see_more.svg";

import { TProject } from "../data/projects";

function ProjectCard(props: TProject) {
	const [hover, isHover] = useState(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function showOptions(e: React.MouseEvent) {
		e.preventDefault();
		isHover(true);
	}

	function hideOptions(e: React.MouseEvent) {
		e.preventDefault();
		isHover(false);
	}

	return (
		<div className="relative flex flex-col shadow-md hover:shadow-xl hover: cursor-pointer justify-center items-center m-6 border-2 rounded-xl" onMouseEnter={e => showOptions(e)} onMouseLeave={e => hideOptions(e)}>
			<img src={props.img} className="w-full h-36 md:h-48" />
			<div className="w-full p-4 mx-6">
				<div className="text-xl md:text-2xl mb-2 md:mb-3 font-semibold2 text-left">
					{props.title}
				</div>
				<div className="flex flex-wrap gap-2 flex-row items-start justify-start text-xs md:text-sm">
					{props.stack.sort().map(item => {
						return <span className="inline-block px-2 py-1 border-2 border-stone-900 rounded-md">
							{item}
						</span>
					})}
				</div>
			</div>
			<div className={hover ? "flex flex-row space-x-20 justify-center items-center p-6 bg-[#f5f5f5] w-full h-full inset-0" : "hidden"}>
					<div className="flex">
						<a href={props.link} target="_blank" className="hover:shadow-md">
							<img src={github} width="48px" height="48px"/>
						</a>
					</div>
					<div className="flex">
						<img src={seeMore} width="48px" height="48px" onClick={() => setIsOpen(true)} className="hover:shadow-md"/>
						<Modal open={isOpen} setIsOpen={setIsOpen} data={props}/>
					</div>
				</div>
		</div>
	);
}

export default ProjectCard;