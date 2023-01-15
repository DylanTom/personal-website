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
		<div>
			<div>I'm Open</div>
			<button onClick={() => props.setIsOpen(false)}>Close Me</button>
		</div>
	);
};

export default Modal;