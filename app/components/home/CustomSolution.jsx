import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CustomSolution = () => {
  return (
    <div className="mx-auto mb-5 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Card className="overflow-hidden bg-(--color-custom-touch) rounded-2xl border-(--color-border)">
        <div className="flex items-center justify-between gap-8 px-6 py-2 md:px-10 md:py-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-(--color-text) md:text-4xl">
              Custom Solutions
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-(--color-muted) md:text-base">
              We build custom software solutions tailored to your business
              needs, from idea to production.
            </p>
            <Button
              variant="secondary"
              className="
              mt-5 
              rounded-lg 
              bg-(--color-black-btn)
              text-(--color-black-btn-text)
              hover:bg-red-400
              px-3
              py-5
              "
            >
              Get in Touch
              <ArrowRight />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative hidden shrink-0 md:block md:w-64 lg:w-80">
            <Image
              src="/images/custom-solutions.png"
              alt="Custom solutions"
              width={320}
              height={240}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomSolution;
