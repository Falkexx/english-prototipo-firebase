"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";

const fetchModulosData = async () => {
  return [
    {
      id: "1",
      name: "Aviação",
      description: "Aprendendo sobre aviação",
      achievement: "gold",
      difficulty: "Easy",
      image_url: "none",
      exp_as_done: 10,
    },
    {
      id: "2",
      name: "Cotidiano",
      description: "Aprendendo sobre o dia a dia",
      achievement: "silver",
      difficulty: "Medium",
      image_url: "none",
      exp_as_done: 15,
    },
    {
      id: "3",
      name: "Emergências",
      description: "Treinamento de emergências",
      achievement: "bronze",
      difficulty: "Hard",
      image_url: "none",
      exp_as_done: 20,
    },
  ];
};

function ShowSections({
  onSelectSection,
}: {
  onSelectSection: (id: string) => void;
}) {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | any>();
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null
  );

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data: modulosData = [], isLoading } = useQuery<any[]>(
    "modulosData",
    fetchModulosData,
    {
      staleTime: 40000,
      cacheTime: Infinity,
      refetchInterval: 40000,
    }
  );

  return (
    <section className="mt-14 lg:mt-7 lg:mb-6">
      <motion.div
        ref={carousel}
        whileTap={width < 1100 ? { cursor: "pointer" } : { cursor: "" }}
      >
        <motion.div
          className="w-[100%] lg:w-full flex flex-row gap-4 lg:gap-5 lg:w-fit lg:m-auto"
          drag={width <= 1100 ? "x" : false}
          dragConstraints={width <= 1100 ? { right: 0, left: -300 } : false}
        >
          {isLoading ? (
            <div className="flex flex-row animate-pulse">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-[45px] w-[120px] bg-gray-300 rounded-[100px]"
                ></div>
              ))}
            </div>
          ) : modulosData.length > 0 ? (
            modulosData.map((e) => {
              const isSelected = e.id === selectedSectionId;

              return (
                <motion.div
                  key={e.id}
                  className={`h-[45px] px-6 py-2.5 rounded-[100px] justify-center items-center gap-1 inline-flex cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[#f14968] text-white shadow-lg"
                      : "border-2 border-zinc-200 text-zinc-200"
                  }`}
                  onClick={() => {
                    setSelectedSectionId(e.id);
                    onSelectSection(e.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-center text-lg font-bold font-['Nunito'] leading-[25.20px] tracking-tight">
                    {e.name}
                  </div>
                </motion.div>
              );
            })
          ) : (
            ""
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ShowSections;
