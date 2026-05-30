"use client";

import Profile from "@/components/profile";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
	const heroRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef(null);
	const techRef = useRef(null);
	const projectsRef = useRef(null);

	const scrollToHero = () =>
		heroRef.current?.scrollIntoView({ behavior: "smooth" });

	return (
		<div>
			<div className="flex backdrop-blur justify-start gap-50 sticky top-0 z-50  backdrop-blur-md px-4 py-3">
				{/* Logo */}
				<div>
					<Button
						onClick={scrollToHero}
						variant={"ghost"}
						className="font-bold"
					>
						Michael <span className="text-orange-400">Dev</span>
					</Button>
				</div>

				{/* Navigation */}
				<div className="flex gap-3">
					<Button
						variant="ghost"
						size="lg"
						className="cursor-pointer font-bold hover:text-orange-400"
					>
						About Me
					</Button>
					<Button
						variant="ghost"
						size="lg"
						className="cursor-pointer font-bold hover:text-orange-400"
					>
						Tech Stack
					</Button>
					<Button
						variant="ghost"
						size="lg"
						className="cursor-pointer font-bold hover:text-orange-400"
					>
						Projects
					</Button>
					<ModeToggle />
				</div>
			</div>
			<div ref={heroRef}>
				<Profile />
			</div>
		</div>
	);
}
