import React from "react";
import Image from "next/image";

const TechnologyList = ({ tech }) => {
  return (
    <div className="group flex min-h-21.25 flex-col items-center justify-center gap-2 rounded-sm border border-(--color-border) bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-(--color-red) hover:shadow-sm">
      {/* Technology Icon */}
      {tech.icon && (
        <Image
          src={tech.icon}
          alt={tech.name}
          width={22}
          height={22}
          className="h-5.5 w-5.5 object-contain"
        />
      )}

      {/* Technology Name */}
      <span className="text-[10px] font-medium text-(--color-text) sm:text-xs">
        {tech.name}
      </span>
    </div>
  );
};

export default TechnologyList;
