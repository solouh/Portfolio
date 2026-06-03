"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

const categories = [
  {
    label: "Frontend",
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
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    label: "Database & ORM",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
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

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(24px)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  return (
    <section className="space-y-8 my-12 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-orange-500" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Tech Stack
          </h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base sm:text-lg max-w-3xl">
          Skills built through self-learning — from Python and Java fundamentals
          to modern full-stack tools like Next.js, React Native, TailwindCSS,
          Supabase, and PostgreSQL.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, ci) => (
          <div
            key={cat.label}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{
              animationDelay: `${ci * 100}ms`,
              animationFillMode: "backwards",
            }}
          >
            <Card
              ref={(el) => {
                cardRefs.current[ci] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, ci)}
              onMouseLeave={() => handleMouseLeave(ci)}
              className="group border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 
                         hover:border-orange-500/70 dark:hover:border-orange-400/60
                         hover:shadow-xl hover:shadow-orange-500/20 dark:hover:shadow-orange-500/15
                         will-change-transform transition-all duration-300 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              <CardContent
                className="p-5 space-y-4"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Category Label */}
                <h3 className="text-[11px] font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest transition-transform duration-200 group-hover:[transform:translateZ(16px)]">
                  {cat.label}
                </h3>

                {/* Tech Items */}
                <div className="flex flex-wrap gap-2 transition-transform duration-200 group-hover:[transform:translateZ(24px)]">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 
                                 bg-orange-50/60 dark:bg-orange-950/20 
                                 hover:bg-orange-100/80 dark:hover:bg-orange-950/30
                                 border border-orange-100/50 dark:border-orange-900/20
                                 rounded-lg px-2.5 py-1.5 
                                 transition-all duration-200 cursor-default"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}