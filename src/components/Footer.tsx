import React from "react";

interface ContactInfo {
	name: string;
	github: string;
	linkedin: string;
}

function Footer(props: ContactInfo) {
	return (
		<div className="flex flex-col w-screen">
			<div className="flex items-center justify-center">
				<ul className="flex flex-row space-x-4 p-4">
					<li>
						<a href={props.github} target="_blank">Github</a>
					</li>
					<li>
						<a href={props.linkedin} target="_blank">LinkedIn</a>
					</li>
				</ul>
			</div>
			<div className="text-center text-gray-800 text-sm p-4">
				&copy; {new Date().getFullYear()} {props.name}
			</div>
		</div>
	)
};

export default Footer;