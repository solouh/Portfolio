// components/toggle.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch as SwitchPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

export function ModeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="h-6 w-11 rounded-full bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
		);
	}

	const isDark = theme === "dark";

	return (
		<SwitchPrimitive.Root
			checked={isDark}
			onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
			aria-label="Toggle theme"
			className={cn(
				"relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent",
				"transition-colors duration-300 ease-in-out",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
				"data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
			)}
		>
			<SwitchPrimitive.Thumb
				className={cn(
					"pointer-events-none flex items-center justify-center rounded-full bg-background shadow-sm ring-0",
					"h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
					"data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
				)}
			>
				<span
					className={cn(
						"text-xs leading-none select-none transition-transform duration-300",
						isDark ? "rotate-0" : "rotate-[360deg]",
					)}
				>
					{isDark ? "🌙" : "☀️"}
				</span>
			</SwitchPrimitive.Thumb>
		</SwitchPrimitive.Root>
	);
}
