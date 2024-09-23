"use client";
import React, { useEffect, useRef, useState, MouseEvent } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Video from "./Video";

export const BackgroundCellAnimation: React.FC = () => {
  return (
    <div className="relative h-full w-full flex justify-center items-center overflow-hidden mt-5">
      <BackgroundCellCore />
      <div className="relative z-40 px-4 md:px-8 lg:px-16 pointer-events-none select-none mt-10 md:mt-20 lg:mt-32">
        <div className="mx-4 md:mx-16 lg:mx-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
            <div>
              <Image
                src="/download.avif"
                width={300}
                height={24.11}
                alt="ycom"
                className="max-w-full h-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-black bg-clip-text text-transparent pointer-events-none">
                <span className="text-[#ff2a00]">podcast</span>
                <div className="flex justify-center md:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 20 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -20,
                      borderRadius: "100%",
                    }}
                    className="pointer-events-auto "
                  >
                    <Image
                      src="/hero-frame.avif"
                      width={150}
                      height={1}
                      alt="ycom"
                      className="max-w-full h-auto -rotate-6"
                    />
                  </motion.div>
                  <div className="ml-2">
                    <span className="text-[#ff5602]">like</span> <br />
                    <span className="text-[#ff8001]">never</span> <br />
                  </div>
                </div>
                <span className="text-[#ffaa01]">before</span>
              </h1>

              <Link
                href="https://apps.apple.com/us/app/overlap-explore-conversations/id6449747632"
                className="z-50 pointer-events-auto"
              >
                <Button className="px-4 py-2 mt-4 text-sm sm:text-base">
                  Download the app
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div id="video" className="mt-8 md:mt-16 lg:mt-24 w-full">
          <Video />
        </div>
      </div>
    </div>
  );
};

const BackgroundCellCore: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const size = 300;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-screen absolute inset-0"
    >
      <div className="absolute h-screen inset-y-0 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-white [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
              ${size / 4}px circle at center,
              white, transparent
            )`,
            WebkitMaskImage: `radial-gradient(
              ${size / 4}px circle at center,
              white, transparent
            )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - 1.5 * size
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-[#ff2a00] relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-[#CCCCCC]" />
      </div>
    </div>
  );
};

const Pattern: React.FC<{ className?: string; cellClassName?: string }> = ({
  className,
  cellClassName,
}) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null);

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b"
        >
          {row.map((_, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell, rowIdx, colIdx, controls]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-[#ff2a00]",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 1, 0.5] }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  animate={controls}
                  className="bg-[#ff8001] h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
