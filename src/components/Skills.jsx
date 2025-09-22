import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
	//Backend
	{ name: "Javascript", category: "Backend" },
	{ name: "Typescript", category: "Backend" },
	{ name: "Python", category: "Backend" },
	{ name: "Java", category: "Backend" },
	{ name: "Node.js", category: "Backend" },
	{ name: "Express", category: "Backend" },
	//Database
	{ name: "MongoDB", category: "Database" },
	{ name: "Postgres", category: "Database" },
	{ name: "MySQL", category: "Database" },
	{ name: "HANA DB", category: "Database" },
	//Frontend
	{ name: "HTML/CSS", category: "Frontend" },
	{ name: "React", category: "Frontend" },
	{ name: "Tailwind", category: "Frontend" },
	{ name: "Bootstrap", category: "Frontend" },
	//Framework
	{ name: "Nest.js", category: "Framework" },
	{ name: "Springboot", category: "Framework" },
	//Tools
	{ name: "Git/Github", category: "Tools" },
	{ name: "Docker", category: "Tools" },
	{ name: "AWS", category: "Tools" },
	{ name: "VS code", category: "Tools" },
];

const categories = [
	"all",
	"Backend",
	"Database",
	"Frontend",
	"Framework",
	"Tools",
];

export default function Skills() {
	const [activeCategory, setActiveCategory] = useState("all");
	const filteredSkills = skills.filter(
		(skill) => activeCategory === "all" || skill.category === activeCategory
	);
	return (
		<section
			id="skills"
			className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					My <span className="text-primary">Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category, key) => (
						<button
							onClick={() => setActiveCategory(category)}
							className={cn(
								// mobile: ~33% per item minus gap, so 3 fit
								"basis-[calc(33.333%-0.5rem)] px-2.5 py-1.5 text-xs rounded-full whitespace-nowrap",
								// desktop: auto width, larger padding
								"sm:basis-auto sm:px-5 sm:py-2 sm:text-sm",
								"transition-colors duration-300 capitalize hover:cursor-pointer",
								activeCategory === category
									? "bg-primary text-primary-foreground"
									: "bg-secondary/70 text-foreground hover:bg-secondary"
							)}
							key={key}>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{filteredSkills.map((skill, key) => (
						<div
							key={key}
							className="bg-card p-6 rounded-lg shadow-xs card-hover">
							<div>
								<h3 className="font-semibold text-lg">
									{skill.name}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
