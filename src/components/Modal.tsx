import React from "react";
import { TProject } from "../data/projects";

interface TModal {
	open: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	data: TProject;
}

function Modal(props: TModal) {
	if (!props.open) {
		return null;
	}

	return (
		<div className="flex flex-row">
			<div>
				{props.data.start} - {props.data.end}
			</div>
			<div>
				{props.data.summary}
			</div>
			<div>
				{props.data.reflection}
			</div>
			<button onClick={() => props.setIsOpen(false)} className="border-2">Close Me</button>
		</div>
	);
};

export default Modal;