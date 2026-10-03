"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ImageOff } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

/**
 * Whole card is clickable through a "stretched" title link, so the
 * optional live/GitHub links can sit on top without nesting <a> in <a>.
 *
 * variant: "default" | "lead" (taller image that fills the bento cell)
 * surface: "white" | "soft"  (match the section background behind it)
 */
const ProjectCard = ({
  project,
  variant = "default",
  surface = "white",
  priority = false,
}) => {
  const [failed, setFailed] = useState(false);
  const lead = variant === "lead";

  const surfaceClass =
    surface === "soft"
      ? "bg-[#f7f9fd] dark:bg-[#080f20]"
      : "bg-white dark:bg-[#0b1225]";

  const extraTech = project.technologies.length - 4;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#080f20]/10 p-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#FF4D4D]/50 hover:shadow-lg hover:shadow-[#080f20]/5 dark:border-white/10 dark:hover:shadow-none ${surfaceClass}`}
    >
      <div
        className={`relative aspect-16/10 overflow-hidden rounded-xl bg-[#080f20] ${
          lead ? "lg:aspect-auto lg:min-h-70 lg:flex-1" : ""
        }`}
      >
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-500">
            <ImageOff
              className="h-8 w-8"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="text-xs">Preview coming soon</span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority={priority}
            sizes={
              lead
                ? "(min-width: 1024px) 600px, 100vw"
                : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            }
            onError={() => setFailed(true)}
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        )}

        {project.isSample && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-[#080f20] backdrop-blur-sm">
            Sample
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold tracking-wide text-[#FF4D4D]">
            {project.category}
          </p>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-[#080f20] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF4D4D] dark:text-white dark:group-hover:text-[#FF4D4D]"
            aria-hidden="true"
          />
        </div>

        <h3
          className={`mt-2 font-semibold text-[#080f20] dark:text-white ${lead ? "text-xl sm:text-2xl" : "text-lg"}`}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:outline focus-visible:after:outline-offset-2 focus-visible:after:outline-[#FF4D4D]"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((t) => (
              <li
                key={t}
                className="rounded-md border border-[#080f20]/10 bg-white px-2 py-0.5 text-xs text-[#080f20] dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {t}
              </li>
            ))}
            {extraTech > 0 && (
              <li className="rounded-md px-1.5 py-0.5 text-xs text-[#6B7280] dark:text-slate-400">
                +{extraTech}
              </li>
            )}
          </ul>

          {(project.liveUrl || project.githubUrl) && (
            <div className="relative z-10 flex gap-1.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#080f20]/10 text-[#6B7280] transition-colors hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D] focus-visible:outline focus-visible:outline-[#FF4D4D] dark:border-white/10 dark:text-slate-400"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#080f20]/10 text-[#6B7280] transition-colors hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D] focus-visible:outline focus-visible:outline-[#FF4D4D] dark:border-white/10 dark:text-slate-400"
                >
                  <IconBrandGithub className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
