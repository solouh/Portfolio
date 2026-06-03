// app/page.tsx or components/Hero.tsx
"use client";

import { FileText, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  StarField Background — Small Diamond Stars                        */
/* ------------------------------------------------------------------ */

function StarField({ isDark }: { isDark: boolean }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const isDarkRef = useRef(isDark);

	useEffect(() => {
		isDarkRef.current = isDark;
	}, [isDark]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationId: number;

		interface Star {
			x: number;
			y: number;
			size: number;
			speed: number;
			opacity: number;
			twinklePhase: number;
			twinkleSpeed: number;
			layer: number;
		}

		let stars: Star[] = [];

		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			initStars(rect.width, rect.height);
		};

		const initStars = (w: number, h: number) => {
			stars = [];
			const density = 0.00028; // slightly denser to compensate for smaller stars
			const count = Math.floor(w * h * density);

			for (let i = 0; i < count; i++) {
				const layer = Math.random() < 0.5 ? 0 : Math.random() < 0.8 ? 1 : 2;
				stars.push({
					x: Math.random() * w,
					y: Math.random() * h,
					// much smaller sizes
					size:
						layer === 0
							? Math.random() * 0.5 + 0.2 // far:  0.2 – 0.7
							: layer === 1
								? Math.random() * 0.8 + 0.4 // mid:  0.4 – 1.2
								: Math.random() * 1.2 + 0.6, // near: 0.6 – 1.8
					speed: layer === 0 ? 0.015 : layer === 1 ? 0.03 : 0.06,
					opacity: Math.random() * 0.35 + 0.65, // 0.65 – 1.0
					twinklePhase: Math.random() * Math.PI * 2,
					twinkleSpeed: Math.random() * 0.03 + 0.01,
					layer,
				});
			}
		};

		// draw a diamond (rhombus) instead of a circle
		const drawDiamond = (x: number, y: number, size: number) => {
			ctx.beginPath();
			ctx.moveTo(x, y - size); // top
			ctx.lineTo(x + size * 0.6, y); // right
			ctx.lineTo(x, y + size); // bottom
			ctx.lineTo(x - size * 0.6, y); // left
			ctx.closePath();
		};

		const draw = () => {
			const rect = canvas.getBoundingClientRect();
			const w = rect.width;
			const h = rect.height;

			ctx.clearRect(0, 0, w, h);

			const dark = isDarkRef.current;
			const color = dark ? `255, 255, 255` : `130, 130, 160`;

			stars.forEach((star) => {
				// drift upward
				star.y -= star.speed;
				if (star.y < -10) {
					star.y = h + 10;
					star.x = Math.random() * w;
				}

				// twinkle
				star.twinklePhase += star.twinkleSpeed;
				const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
				const alpha = star.opacity * (0.75 + twinkle * 0.25);

				// outer diamond glow
				drawDiamond(star.x, star.y, star.size);

				if (dark) {
					ctx.shadowBlur = star.layer === 0 ? 4 : star.layer === 1 ? 8 : 14;
					ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.5})`;
				} else {
					ctx.shadowBlur = 0;
				}

				ctx.fillStyle = `rgba(${color}, ${alpha})`;
				ctx.fill();

				// bright inner core for mid & near stars
				if (star.layer > 0) {
					drawDiamond(star.x, star.y, star.size * 0.35);
					ctx.fillStyle = `rgba(${color}, ${alpha * 0.95})`;
					ctx.shadowBlur = 0;
					ctx.fill();
				}

				ctx.shadowBlur = 0;
			});

			animationId = requestAnimationFrame(draw);
		};

		resize();
		window.addEventListener("resize", resize);
		draw();

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none"
			style={{ zIndex: 0 }}
		/>
	);
}

/* ------------------------------------------------------------------ */
/*  Hero Component                                                      */
/* ------------------------------------------------------------------ */

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
   
      
      <div className="relative min-h-screen darbg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white transition-colors duration-300 overflow-hidden">
			{/* Moon — top right */}
      
			{darkMode && (
				<div 
					className="hidden  dark:block absolute top-6 md:top-12 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
				>
					<p className="text-[10px] md:text-lg font-bold tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400/80 animate-pulse">
						trust your self
					</p>
				</div>
			)}

			<svg
				className="absolute top-6 right-6 md:top-12 md:right-20 w-14 h-14 md:w-20 md:h-20 text-yellow-100 dark:text-yellow-50 opacity-40 dark:opacity-90 pointer-events-none"
				style={{
					zIndex: 1,
					filter: "drop-shadow(0 0 18px rgba(253, 224, 71, 0.4))",
				}}
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			</svg>
        
			{/* Animated star background */}
			<StarField isDark={darkMode} />
        
			{/* Foreground content */}
			<div className="relative z-10 flex items-center justify-center px-6 py-10 min-h-screen">
				<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-28 items-center">
					{/* Profile Image */}
					<div className="relative mt-10 md:mt-0 flex justify-center md:justify-end">
						<div className="relative transition-transform duration-200 ease-out hover:scale-105">
							<div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-orange-600/60 to-orange-900/40 blur-md dark:from-orange-600/80 dark:to-orange-900/60" />
							<div className="relative rounded-lg overflow-hidden border-2 border-orange-700/50 dark:border-orange-600/70 shadow-2xl">
								<Image
									src="/profile.jpg"
									alt="Ehrvayn Rayven Olivera"
									width={320}
									height={400}
									className="object-cover w-[230px] h-[290px] md:w-[320px] md:h-[400px]
                             grayscale hover:grayscale-0 hover:opacity-100
                             transition-all duration-500 ease-out"
									priority
								/>
							</div>
						</div>
					</div>

					{/* Text Content */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
						<p className="text-sm md:text-base font-medium tracking-wide">
							<span className="text-orange-600 dark:text-orange-500 mr-2">
								—
							</span>
							Let&apos;s build something{" "}
							<span className="text-orange-600 dark:text-orange-500 italic font-serif">
								remarkable
							</span>{" "}
							together.
						</p>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
							Michael Angelo{" "}
							<span className="text-orange-600 dark:text-orange-500">
								Aranding
							</span>
						</h1>

						<p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400">
							Fond of technology
						</p>

						<div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
							<MapPin className="w-4 h-4 text-orange-600 dark:text-orange-500" />
							<span>Villanueva, Misamis Oriental</span>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
							<button className="uiverse-btn font-bold cursor-pointer px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm tracking-widest uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">
								<a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
									View Resume
								</a>
							</button>
							<a
  href="mailto:michaelangelocapearanding@gmail.com"
  className="cursor-pointer px-8 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:border-neutral-900 dark:hover:border-white transition-colors duration-200 inline-flex items-center justify-center"
>
  Email Me
</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		
	);
}