import { Dot } from "lucide-react";

export default function AboutMe() {
	return (
		<section
			id="about"
			className="py-24 px-4 relative">
			<div className="container mx-auto max-2-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					<span className="text-primary">Work Experience</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-[25%_75%]  items-center">
					{/* Left side scrollable text */}
					<div className="flex flex-col items-center text-center w-full">
						<img
							className="p-6"
							src="https://res.cloudinary.com/dqksibfze/image/upload/v1754035688/infosys_vvyjot.svg"
							alt="Company Logo"
						/>
						<h3 className="text-sky-400 text-2xl font-bold">
							Systems Engineer (Backend)
						</h3>
						<p className="font-semibold text-glow text-foreground">
							October 2022 - December 2024
						</p>
					</div>
					{/* Right side skills */}
					<div className="font-semibold text-xl pl-5">
						<ul className="list-disc pl-5 marker:text-sky-400 text-left">
							<li className="mb-2">
								Designed an automated CI/CD pipeline to reduce
								manual deployment using AWS CodePipeline,
								CodeBuild, and CodeDeploy.
							</li>
							<li className="mb-2">
								Integrated Apache Kafka messaging into
								microservices for reliable event-driven
								communication reducing data latency by 25%
							</li>
							<li className="mb-2">
								Reduced query turnaround time by 30% by
								consolidating security authentication services
								into a single call
							</li>
							<li className="mb-2">
								Boosted API reliability for 5 cross-functional
								teams by co-leading ODATA service development
								for ERP integration.
							</li>
							<li className="mb-2">
								Co-ordinated with teams to convert ODATA based
								services to REST for Airbus internal portal to
								improve data fetching from SAP systems faster by
								reducing query times.
							</li>
							<li className="mb-2">
								Improved data fetch performance by 20% by
								optimizing SQL queries with CDS views for
								efficient data modeling.
							</li>
							<li className="mb-2">
								Optimized query response time by 30% by using
								paging and sorting with Spring Data JPA.
							</li>
							<li className="mb-2">
								Mitigated parameter tampering attacks by route
								masking with NGINX reverse-proxy, reducing
								exposed endpoints by 40%
							</li>
							<li className="mb-2">
								Delivered 10+ features on schedule by working in
								Agile Scrum teams, actively contributing to
								sprint planning, backlog refinement, and
								retrospective meetings.
							</li>
							<li className="mb-2">
								Reduced frontend maintenance efforts by 18% by
								designing and implementing reusable React
								components and applying Redux.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
