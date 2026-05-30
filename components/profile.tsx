// app/page.tsx or components/Hero.tsx
"use client";

import { MapPin, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ModeToggle } from "./toggle";

export default function Hero() {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white transition-colors duration-300 flex items-center justify-center px-6 py-12">
			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				{/* Profile Image */}
				<div className="relative flex justify-center md:justify-end">
					<div className="relative">
						{/* Orange glow border effect */}
						<div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-orange-600/60 to-orange-900/40 blur-md dark:from-orange-600/80 dark:to-orange-900/60" />
						<div className="relative rounded-lg overflow-hidden border-2 border-orange-700/50 dark:border-orange-600/70 shadow-2xl">
							<Image
								src="/profile.jpg" // Replace with your actual image path
								alt="Ehrvayn Rayven Olivera"
								width={320}
								height={400}
								className="object-cover w-[280px] h-[360px] md:w-[320px] md:h-[400px] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
								priority
							/>
						</div>
					</div>
				</div>

				{/* Text Content */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
					{/* Tagline */}
					<p className="text-sm md:text-base font-medium tracking-wide">
						<span className="text-orange-600 dark:text-orange-500 mr-2">—</span>
						Let&apos;s build something{" "}
						<span className="text-orange-600 dark:text-orange-500 italic font-serif">
							remarkable
						</span>{" "}
						together.
					</p>

					{/* Name */}
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
						Michael Angelo{" "}
						<span className="text-orange-600 dark:text-orange-500">
							Aranding
						</span>
					</h1>

					{/* Role */}
					<p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400">
						Fond of technology
					</p>

					{/* Location */}
					<div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
						<MapPin className="w-4 h-4 text-orange-600 dark:text-orange-500" />
						<span>Villanueva, Misamis Oriental</span>
					</div>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
						<button className="cursor-pointer px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">
							Get Resume
						</button>
						<button className="cursor-pointer px-8 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:border-neutral-900 dark:hover:border-white transition-colors duration-200">
							Email Me
						</button>
					</div>

					
				</div>
			</div>
		
		</div>
	);
}
