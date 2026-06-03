// components/AboutSection.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	GraduationCap,
	Briefcase,
	Sparkles,
	Target,
	Rocket,
	Code2,
	Globe,
	Zap,
	BookOpen,
	Award,
	Calendar,
	MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const experiences = [
	{
		period: "2021 — 2022",
		title: "Python Developer — Student List System",
		org: "BSIT First Year, Semester 1",
		description:
			"Developed a simple Python GUI student list application, gaining foundational experience in programming logic, interface design, and basic data handling.",
		active: true,
	},
	{
		period: "2021 — 2022",
		title: "Java Developer — Banking System",
		org: "BSIT First Year, Semester 2",
		description:
			"Created a GUI‑based banking system using Java and JFrame, applying OOP principles, event‑driven programming, and structured UI workflows.",
		active: true,
	},
	{
		period: "2022 — 2023",
		title: "Java Developer — Inventory Management System",
		org: "BSIT Second Year",
		description:
			"Built a full Inventory Management System using Java and the NetBeans GUI Builder (JavaFx), implementing drag‑and‑drop UI components, controller logic, and data operations.",
		active: true,
	},
	{
		period: "2022 — 2023",
		title: "Full‑Stack Student Developer",
		org: "Agusan School Project (All-Defense)",
		description:
			"Developed both a web application (Next.js) and a mobile app (Flutter) for Agusan School. This multi‑platform project was the most challenging of the year, strengthening skills in full‑stack development, UI/UX, and problem‑solving.",
		active: true,
	},
	{
		period: "2023 — Present",
		title: "Frontend Developer",
		org: "Freelance & Personal Projects",
		description:
			"Building responsive web and mobile applications using Next.js, React, Tailwind CSS, and Expo. Focused on clean UI, reusable components, and modern development workflows.",
		active: true,
	},
];

const education = [
	{
		period: "2024 — 2025",
		title: "B.S. Information Technology (First Year)",
		org: "Phinma COC Puerto",
		description:
			"Python, Java, programming logic, and computer science fundamentals.",
		active: true,
	},
	{
		period: "2025 — Present",
		title: "B.S. Information Technology (Second Year)",
		org: "Phinma COC Puerto",
		description:
			"Web development, networking, database design, and system architecture.",
		active: true,
	},
	{
		period: "Present - 2027",
		title: "B.S. Information Technology (Third Year)",
		org: "Phinma COC Puerto",
		description:
			"Web development, networking, database design, and system architecture.",
		active: true,
	},

	{
		period: "2027 — 2028",
		title: "B.S. Information Technology (Fourth Year)",
		org: "Phinma COC Puerto",
		description:
			"Capstone projects, industry immersion, and professional portfolio development.",
		active: false,
	},
];

const goals = [
	{
		icon: Code2,
		title: "Full-Stack Mastery",
		description:
			"Deepen expertise in Next.js, Node.js, and PostgreSQL to build production-grade applications.",
		timeframe: "2025 — 2026",
	},
	{
		icon: Globe,
		title: "Open Source Contributor",
		description:
			"Contribute to meaningful open-source projects and give back to the developer community.",
		timeframe: "2026 — 2027",
	},
	{
		icon: Rocket,
		title: "Launch a SaaS Product",
		description:
			"Build and deploy a real-world SaaS application with real users and revenue.",
		timeframe: "2027 — 2028",
	},
	{
		icon: Award,
		title: "Industry Certification",
		description:
			"Earn cloud and DevOps certifications (AWS, Docker) to strengthen professional credibility.",
		timeframe: "2026 — 2027",
	},
];

const skills = [
	"Open Source",
	"Type Safe",
	"Accessible",
	"Performance",
	"Responsive",
	"Clean Code",
];

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function TimelineItem({
	period,
	title,
	org,
	description,
	active,
	isLast,
}: {
	period: string;
	title: string;
	org: string;
	description: string;
	active: boolean;
	isLast?: boolean;
}) {
	return (
		<div
			className={`relative flex gap-4 pb-6 last:pb-0 ${
				!active ? "opacity-55" : ""
			}`}
		>
			{/* Line + Dot */}
			<div className="flex flex-col items-center shrink-0">
				<div
					className={`w-2.5 h-2.5 rounded-full mt-1.5 ring-4 transition-colors duration-300 ${
						active
							? "bg-orange-500 ring-orange-500/15"
							: "bg-neutral-300 dark:bg-neutral-600 ring-transparent"
					}`}
				/>
				{!isLast && (
					<div className="w-px flex-1 bg-gradient-to-b from-neutral-200 dark:from-neutral-700 to-transparent mt-2.5" />
				)}
			</div>

			{/* Content */}
			<div className="flex-1 space-y-1 min-w-0 pb-1">
				<div className="flex flex-wrap items-center gap-2">
					<span className="text-[11px] font-semibold text-orange-600/80 dark:text-orange-400/80 uppercase tracking-wider">
						{period}
					</span>
					{!active && (
						<Badge
							variant="outline"
							className="text-[10px] h-5 px-1.5 font-medium text-neutral-500 dark:text-neutral-400 border-neutral-300 dark:border-neutral-600"
						>
							Future
						</Badge>
					)}
				</div>
				<h3
					className={`font-semibold text-sm ${
						active
							? "text-neutral-900 dark:text-neutral-100"
							: "text-neutral-500 dark:text-neutral-400"
					}`}
				>
					{title}
				</h3>
				<p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">
					{org}
				</p>
				<p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 pt-0.5">
					{description}
				</p>
			</div>
		</div>
	);
}

function GoalCard({
	icon: Icon,
	title,
	description,
	timeframe,
}: {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
	timeframe: string;
}) {
	return (
		<div className="group flex gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-orange-300 dark:hover:border-orange-700/50 hover:shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-orange-500/10 transition-all duration-300">
			<div className="shrink-0 w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-950/50 transition-colors duration-300">
				<Icon className="w-5 h-5 text-orange-500" />
			</div>
			<div className="space-y-1 min-w-0">
				<div className="flex items-center gap-2">
					<h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
						{title}
					</h4>
					<span className="text-[10px] font-medium text-orange-600/70 dark:text-orange-400/70 uppercase tracking-wider">
						{timeframe}
					</span>
				</div>
				<p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
					{description}
				</p>
			</div>
		</div>
	);
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

export function AboutSection() {
	return (
		<section className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10 sm:space-y-14 max-w-5xl mx-auto px-4 sm:px-6 py-8">
			{/* ── Header ── */}
			<div className="space-y-4">
				<div className="flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-orange-500" />
					<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
						About
					</h1>
				</div>
				<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base sm:text-lg max-w-2xl">
					An IT student passionate about building modern web experiences.
					Focused on performance, clean code, and continuous learning.
				</p>
				<div className="flex flex-wrap gap-2 pt-1">
					{skills.map((label) => (
						<Badge
							key={label}
							variant="secondary"
							className="bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 border border-orange-200 dark:border-orange-900/30 hover:scale-105 transition-transform cursor-default text-xs"
						>
							{label}
						</Badge>
					))}
				</div>
			</div>

			{/* ── Goals ── */}
			<div className="hidden md:block space-y-4">
				<div className="flex items-center gap-2">
					<Target className="w-4 h-4 text-orange-500" />
					<h2 className="text-base font-semibold tracking-tight">Goals</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					{goals.map((goal) => (
						<GoalCard key={goal.title} {...goal} />
					))}
				</div>
			</div>

			{/* ── Experience & Education ── */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Experience */}
				<Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-lg hover:shadow-orange-500/5 dark:hover:shadow-orange-500/5 transition-all duration-300">
					<CardContent className="p-5 sm:p-6 space-y-5">
						<div className="flex items-center gap-2 pb-1">
							<Briefcase className="w-4 h-4 text-orange-500" />
							<h2 className="text-base font-semibold tracking-tight">
								Experience
							</h2>
						</div>
						<div>
							{experiences.map((item, i) => (
								<TimelineItem
									key={item.title}
									{...item}
									isLast={i === experiences.length - 1}
								/>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Education */}
				<Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-lg hover:shadow-orange-500/5 dark:hover:shadow-orange-500/5 transition-all duration-300">
					<CardContent className="p-5 sm:p-6 space-y-5">
						<div className="flex items-center gap-2 pb-1">
							<GraduationCap className="w-4 h-4 text-orange-500" />
							<h2 className="text-base font-semibold tracking-tight">
								Education
							</h2>
						</div>
						<div>
							{education.map((item, i) => (
								<TimelineItem
									key={item.title}
									{...item}
									isLast={i === education.length - 1}
								/>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* ── Quick Stats ── */}
			<div className="hidden md:grid grid-cols-2 sm:grid-cols-4 gap-3">
				{[
					{ icon: Calendar, label: "Years Coding", value: "2+" },
					{ icon: Code2, label: "Projects", value: "4+" },
					{ icon: BookOpen, label: "Courses", value: "8+" },
					{ icon: MapPin, label: "Location", value: "Philippines" },
				].map((stat) => (
					<div
						key={stat.label}
						className="flex flex-col items-center gap-2 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors duration-300"
					>
						<stat.icon className="w-4 h-4 text-orange-500" />
						<span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
							{stat.value}
						</span>
						<span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">
							{stat.label}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
