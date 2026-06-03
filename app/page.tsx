// app/page.tsx
"use client";

import { useRef, useState } from "react";
import { AboutSection } from "@/components/about";
import Profile from "@/components/profile";
import ProjectsSection from "@/components/project";
import { TechStackSection } from "@/components/tech-stack";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Home() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const heroRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const techRef = useRef<HTMLDivElement | null>(null);
	const projectsRef = useRef<HTMLDivElement | null>(null);

	const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
		if (!ref.current) return;
		const headerOffset = 56;
		const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
		const scrollPosition = elementTop - headerOffset;

		window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		setMobileOpen(false); // close drawer on navigate
	};

	const navItems = [
		{ label: "About Me", ref: aboutRef },
		{ label: "Tech Stack", ref: techRef },
		{ label: "Projects", ref: projectsRef },
	];

	return (
		<div className="min-h-screen  dark:bg-[#0a0a0a] transition-colors duration-300">
			{/* ── Sticky Navigation ── */}
			<header className="sticky top-0 z-50 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md h-14">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
					{/* Logo */}
					<Button
						onClick={() => scrollTo(heroRef)}
						variant="ghost"
						className="font-bold text-base hover:bg-transparent hover:text-orange-500 transition-colors px-0"
					>
						Michael<span className="text-orange-500">Dev</span>
					</Button>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-1">
						{navItems.map((item) => (
							<Button
								key={item.label}
								onClick={() => scrollTo(item.ref)}
								variant="ghost"
								size="sm"
								className="font-semibold text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all"
							>
								{item.label}
							</Button>
						))}
						<div className="ml-2 pl-2 border-l border-neutral-200 dark:border-neutral-800">
							<ModeToggle />
						</div>
					</nav>

					{/* Mobile Hamburger */}
					<div className="flex md:hidden items-center gap-2">
						<ModeToggle />
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileOpen(true)}
							className="text-neutral-700 dark:text-neutral-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20"
						>
							<Menu className="w-5 h-5" />
						</Button>
					</div>
				</div>
			</header>

			{/* ── Mobile Drawer ── */}
			<div
				className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
					mobileOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			>
				{/* Backdrop */}
				<div
					className="absolute inset-0 bg-black/40 backdrop-blur-sm"
					onClick={() => setMobileOpen(false)}
				/>

				{/* Slide-out panel */}
				<div
					className={`absolute right-0 top-0 h-full w-64 max-w-[80vw] bg-white dark:bg-[#0a0a0a] border-l border-neutral-200 dark:border-neutral-800 shadow-2xl transform transition-transform duration-300 ease-out ${
						mobileOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
						<span className="font-bold text-sm">Menu</span>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileOpen(false)}
							className="text-neutral-700 dark:text-neutral-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20"
						>
							<X className="w-5 h-5" />
						</Button>
					</div>

					<nav className="flex flex-col p-2 gap-1">
						<Button
							onClick={() => scrollTo(heroRef)}
							variant="ghost"
							className="justify-start font-semibold text-sm text-neutral-700 dark:text-neutral-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20"
						>
							Home
						</Button>
						{navItems.map((item) => (
							<Button
								key={item.label}
								onClick={() => scrollTo(item.ref)}
								variant="ghost"
								className="justify-start font-semibold text-sm text-neutral-700 dark:text-neutral-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20"
							>
								{item.label}
							</Button>
						))}
					</nav>
				</div>
			</div>

			{/* ── Main Content ── */}
			<main className="md:mx-36">
				<section ref={heroRef}>
					<Profile />
				</section>

				<section ref={aboutRef}>
					<AboutSection />
				</section>

				<section ref={techRef}>
					<TechStackSection />
				</section>

				<section ref={projectsRef}>
					<ProjectsSection />
				</section>
			</main>
		</div>
	);
}
