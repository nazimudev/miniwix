import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectList = () => {
  return (
    <Card className="group overflow-hidden rounded-2xl border-(--color-border) bg-white p-0 dark:bg-[#0b1225]">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src="/images/projects/project-1.png"
          alt="QuickLab Hospital Management"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardContent className="p-5 md:p-6">
        {/* Project Title */}
        <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-(--color-text)">
          QuickLab Hospital Management
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-(--color-muted)">
          A modern hospital management platform designed to manage appointments,
          patients, diagnostics, and hospital operations.
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-(--color-border) px-3 py-1 text-xs font-medium text-(--color-text)">
            Laravel
          </span>

          <span className="rounded-full border border-(--color-border) px-3 py-1 text-xs font-medium text-(--color-text)">
            Next.js
          </span>

          <span className="rounded-full border border-(--color-border) px-3 py-1 text-xs font-medium text-(--color-text)">
            MySQL
          </span>

          <span className="rounded-full border border-(--color-border) px-3 py-1 text-xs font-medium text-(--color-text)">
            Tailwind CSS
          </span>
        </div>
        <Button variant="outline" size="sm" className="mt-3">
            View Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectList;

