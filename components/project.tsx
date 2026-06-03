// app/components/ProjectsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Rocket } from "lucide-react";

interface Project {
	title: string;
	description: string;
	thumbnail: string;
	tags: string[];
	link?: string;
}

const defaultProjects: Project[] = [
	// {
	//   title: "Attendance Tracker",
	//   description: "Calendar-first attendance system with QR and manual check-in support.",
	//   thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
	//   tags: ["Next.js", "TypeScript", "Prisma"],
	//   link: "#",
	// },
];

export default function ProjectsSection({
	projects = defaultProjects,
}: {
	projects?: Project[];
}) {
	const isEmpty = projects.length === 0;

	return (
		<section className="space-y-8 my-12 max-w-5xl mx-auto px-4 sm:px-6">
			{/* Header */}
			<div className="space-y-2">
				<div className="flex items-center gap-2">
					<Rocket className="w-5 h-5 text-orange-500" />
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
						Projects
					</h2>
				</div>
				<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base sm:text-lg max-w-2xl">
					I'm currently rebuilding my previous project from the ground up,
					transforming it into a more refined, powerful, and polished version.
				</p>
			</div>

			{isEmpty ? (
				<div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/30 py-16 px-4 text-center">
					<FolderOpen className="h-10 w-10 text-orange-400/60 dark:text-orange-500/40 mb-3" />
					<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
						No projects yet
					</h3>
					<p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500 max-w-xs">
						Projects will appear here once they are created and published.
					</p>
				</div>
			) : (
				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<a
							key={project.title}
							href={project.link || "#"}
							className="group block"
						>
							<Card
								className="overflow-hidden h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 
                             hover:border-orange-300 dark:hover:border-orange-700/50 
                             hover:shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-orange-500/10 
                             transition-all duration-300"
							>
								<div className="aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
									<img
										src={project.thumbnail}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<CardContent className="p-5 space-y-3">
									<h3 className="font-semibold text-base text-neutral-900 dark:text-neutral-100 group-hover:text-orange-500 transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 pt-1">
										{project.tags.map((tag) => (
											<Badge
												key={tag}
												variant="outline"
												className="text-xs font-medium bg-orange-50/60 dark:bg-orange-950/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-900/30"
											>
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</a>
					))}
				</div>
			)}
		</section>
	);
}
