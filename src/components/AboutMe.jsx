import { Dot } from "lucide-react";

export default function AboutMe() {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-2-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">Work Experience</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[25%_75%]  items-center">
                    {/* Left side scrollable text */}
                    <div className="flex flex-col items-center text-center w-full">
                        <img
                            className="p-6"
                            src="/src/assets/infosys.svg"
                            alt="Company Logo"
                        />
                        <h3 className="text-primary text-2xl font-bold">
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
                                Reduced query turnaround time by 30% by
                                implementing security authentication services in
                                a single call.
                            </li>
                            <li className="mb-2">
                                {/* Maintained a structured documentation system
                                using JSDoc and Swagger for backend services,
                                enhancing team productivity and reducing
                                onboarding time by 40%. */}
                                Reduced onboarding time by 40% by maintaining
                                structured documentation using Swagger.
                            </li>
                            <li className="mb-2">
                                Carried out unit testing as well as regression
                                testing to verify deliverables.
                            </li>
                            <li className="mb-2">
                                Worked on RESTful routes and implemented
                                route-masking for security.
                            </li>
                            <li className="mb-2">
                                Co-ordinated with teams to convert ODATA based
                                services to REST for Airbus internal portal to
                                improve data fetching from SAP systems faster by
                                reducing query times.
                            </li>
                            <li className="mb-2">
                                Built a reliable data migration pipeline using
                                Node.js scripts and MongoDB utilities,
                                automating the transition from legacy systems.
                            </li>
                            <li className="mb-2">
                                Collaborated in an Agile development
                                environment, participating in sprint planning,
                                daily stand-ups, and retrospectives.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
