interface TProject {
	title: string;
	stack: string[];
	img: string;
	link: string;
	summary: string;
	reflection: string;
	start: string;
	end: string
}

export type { TProject };

let projects = [
	{
		title: "OCaml x Expedia",
		stack: ["OCaml", "Python"],
		img: "/assets/project_images/svd.png",
		link: "https://github.com/DylanTom/svd",
		summary: "",
		reflection: "",
		start: "August 2022",
		end: "December 2022"
	},
	{
		title: "EDGI",
		stack: ["R", "Python"],
		img: "/assets/project_images/edgi.png",
		link: "https://github.com/jacobdotpng/H4I-EEW-ReportCard-Data",
		summary: "",
		reflection: "",
		start: "August 2022",
		end: "December 2022"
	},
	{
		title: "Pediatric Skeletal Muscle Cell Atlas",
		stack: ["Python", "Dash", "ElasticSearch", "GraphQL"],
		img: "/assets/project_images/pca.png",
		link: "https://github.com/leklab/czi_skeletal_muscle_cell_atlas",
		summary: "",
		reflection: "",
		start: "July 2022",
		end: "Present"
	},
	{
		title: "Roomservations",
		stack: ["Firebase", "Express", "React (TSX)", "Node"],
		img: "/assets/project_images/reserve.png",
		link: "https://github.com/Reservations-Required/reserve-web",
		summary: "",
		reflection: "",
		start: "April 2022",
		end: "August 2022"
	},
	{
		title: "Farmworker's Justice",
		stack: ["MongoDB", "Express", "React (TSX)", "Node"],
		img: "/assets/project_images/fj.png",
		link: "https://github.coecis.cornell.edu/hack4impact-cornell/farmworkers-justice",
		summary: "",
		reflection: "",
		start: "January 2022",
		end: "May 2022"
	},
	{
		title: "Alien Invaders",
		stack: ["Python"],
		img: "/assets/project_images/alien.png",
		link: "https://www.cs.cornell.edu/courses/cs1110/2021fa/assignments/a7/",
		summary: "",
		reflection: "",
		start: "November 2021",
		end: "December 2021"
	},
	{
		title: "Cars 4: Not a Pixar Movie",
		stack: ["Python", "Jupyter"],
		img: "/assets/project_images/info.png",
		link: "https://github.com/DylanTom/info-final-project",
		summary: "",
		reflection: "",
		start: "September 2021",
		end: "December 2021"
	},
	{
		title: "Regeneron Reserarch",
		stack: ["Python", "Jupyter"],
		img: "/assets/project_images/regeneron.png",
		link: "https://github.com/DylanTom/InterpretationLoF",
		summary: "",
		reflection: "",
		start: "September 2021",
		end: "December 2021"
	},
	{
		title: "Hearthstone AI",
		stack: ["C#"],
		img: "/assets/project_images/hearthstone.png",
		link: "https://github.com/DylanTom/HearthstoneAICompetition",
		summary: "",
		reflection: "",
		start: "May 2020",
		end: "August 2020"
	}
]

let personal = [
	{
		title: "v4.0",
		stack: ["React (TSX)"],
		img: "/assets/personal_site/v4.png",
		link: "https://github.com/DylanTom/personal-website",
		summary: "",
		reflection: "",
		start: "January 2023",
		end: "January 2023"
	},
	{
		title: "v3.0",
		stack: ["React (JSX)"],
		img: "/assets/personal_site/v3.png",
		link: "https://github.com/DylanTom/dylan_website",
		summary: "",
		reflection: "",
		start: "June 2022",
		end: "August 2022"
	},
	{
		title: "v2.0",
		stack: ["Markdown"],
		img: "/assets/personal_site/v2.png",
		link: "https://github.com/DylanTom/dylan-portfolio",
		summary: "",
		reflection: "",
		start: "December 2021",
		end: "December 2021"
	},
	{
		title: "v1.0",
		stack: ["HTML", "CSS"],
		img: "/assets/personal_site/v1.png",
		link: "https://github.com/DylanTom/dylan-website-outdated",
		summary: "",
		reflection: "",
		start: "June 2021",
		end: "August 2021"
	}
]

export { projects, personal };