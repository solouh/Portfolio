"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Code2, Server, Database, Wrench } from "lucide-react";

const categories = [
	{
		label: "Frontend",
		icon: Code2,
		accent: "from-orange-500 to-amber-500",
		items: [
			{ name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
			{ name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
			{ name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
			{ name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
			{ name: "shadcn/ui", icon: "https://avatars.githubusercontent.com/u/139895814?s=48&v=4" },
		],
	},
	{
		label: "Backend",
		icon: Server,
		accent: "from-emerald-500 to-teal-500",
		items: [
			{ name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
		],
	},
	{
		label: "Database & ORM",
		icon: Database,
		accent: "from-blue-500 to-indigo-500",
		items: [
			{ name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
			{ name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
		],
	},
	{
		label: "Tools",
		icon: Wrench,
		accent: "from-violet-500 to-purple-500",
		items: [
			{ name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
			{ name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
			{ name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
			{ name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
			{ name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
		],
	},
];

export function TechStackSection() {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
		const card = cardRefs.current[index];
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = ((y - centerY) / centerY) * -8;
		const rotateY = ((x - centerX) / centerX) * 8;
		card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
	};

	const handleMouseLeave = (index: number) => {
		const card = cardRefs.current[index];
		if (!card) return;
		card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
	};

	return (
		<section className="space-y-10 my-16 max-w-5xl mx-auto px-4 sm:px-6">
			{/* Header */}
			<div className="space-y-4 text-center">
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
					<Layers className="w-4 h-4 text-orange-500" />
					<span className="text-sm font-medium text-orange-600 dark:text-orange-400">My Arsenal</span>
				</div>
				<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
					Tech Stack
				</h2>
				<p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
					Skills built through self-learning — from Python and Java fundamentals
					to modern full-stack tools like Next.js, React Native, TailwindCSS,
					Supabase, and PostgreSQL.
				</p>
			</div>

			{/* Bento Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{categories.map((cat, ci) => {
					const Icon = cat.icon;
					return (
						<div
							key={cat.label}
							className="animate-in fade-in slide-in-from-bottom-6 duration-700"
							style={{
								animationDelay: `${ci * 120}ms`,
								animationFillMode: "backwards",
							}}
						>
							<Card
								ref={(el) => { cardRefs.current[ci] = el; }}
								onMouseMove={(e) => handleMouseMove(e, ci)}
								onMouseLeave={() => handleMouseLeave(ci)}
								className="group relative h-full overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 
								bg-white dark:bg-neutral-900/60 backdrop-blur-sm
								hover:border-neutral-300 dark:hover:border-neutral-700
								hover:shadow-2xl hover:shadow-neutral-500/10 dark:hover:shadow-neutral-950/20
								will-change-transform transition-all duration-500 ease-out"
								style={{ transformStyle: "preserve-3d" }}
							>
								{/* Top accent gradient bar */}
								<div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

								<CardContent className="p-6 space-y-5" style={{ transformStyle: "preserve-3d" }}>
									{/* Category Header */}
									<div className="flex items-center gap-3 transition-transform duration-300 group-hover:[transform:translateZ(20px)]">
										<div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.accent} opacity-90`}>
											<Icon className="w-5 h-5 text-white" />
										</div>
										<div>
											<h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
												{cat.label}
											</h3>
											<p className="text-xs text-neutral-400 dark:text-neutral-500">
												{cat.items.length} {cat.items.length === 1 ? "technology" : "technologies"}
											</p>
										</div>
									</div>

									{/* Divider */}
									<div className="h-px bg-neutral-100 dark:bg-neutral-800" />

									{/* Tech Items - improved badge layout */}
									<div className="flex flex-wrap gap-2.5 transition-transform duration-300 group-hover:[transform:translateZ(30px)]">
										{cat.items.map((tech) => (
											<div
												key={tech.name}
												className="flex items-center gap-2.5
												bg-neutral-50 dark:bg-neutral-800/50
												hover:bg-neutral-100 dark:hover:bg-neutral-800
												border border-neutral-200/60 dark:border-neutral-700/60
												rounded-xl px-3 py-2
												transition-all duration-200 cursor-default
												group/badge"
											>
												<img
													src={tech.icon}
													alt={tech.name}
													width={20}
													height={20}
													className="w-5 h-5 object-contain opacity-70 group-hover/badge:opacity-100 transition-opacity duration-200"
												/>
												<span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
													{tech.name}
												</span>
											</div>
										))}
										</div>
									</CardContent>
								</Card>
							</div>
						);
					})}
				</div>
			</section>
		);
	}