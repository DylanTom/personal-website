import React from "react";
import github from "/assets/logos/github-mark.svg";
import linkedin from "/assets/logos/linkedin.svg";

interface ContactInfo {
	name: string;
	github: string;
	linkedin: string;
}

function Footer(props: ContactInfo) {
	return (
		<div className="flex flex-col w-screen">
			<div className="flex items-center justify-center pt-4">
				<ul className="flex flex-row space-x-4 p-2">
					<li>
						<a 
							href={props.github} 
							target="_blank" 
							className="flex items-center justify-center" >
							<img src={github} width="24px" height="24px" />
						</a>
					</li>
					<li>
						<a 
							href={props.linkedin} 
							target="_blank"
							className="flex items-center justify-center">
							<img src={linkedin} width="24px" height="24px" />
						</a>
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