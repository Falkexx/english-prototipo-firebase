"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchModulosData = async () => {
  const data = await axios.get(
    "http://localhost:3000/section/all?take=10&skip=0"
  );
  return data.data;
};

function ShowSections({
  onSelectSection,
}: {
  onSelectSection: (id: string) => void;
}) {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | any>();

  function handleResize() {
    setWidth(window.screen.width);
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
    <section className="mt-14">
      <motion.div
        ref={carousel}
        whileTap={width < 1100 ? { cursor: "pointer" } : { cursor: "" }}
      >
        <motion.div
          className="w-[100%] lg:w-full"
          drag={width <= 1100 ? "x" : false}
          dragConstraints={width <= 1100 ? { right: 0, left: -width } : false}
        >
          {isLoading ? (
            <div className="flex flex-row gap-4 lg:gap-20 lg:w-fit lg:pl-8 lg:justify-center lg:m-auto animate-pulse">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-[45px] w-[120px] bg-gray-300 rounded-[100px]"
                ></div>
              ))}
            </div>
          ) : modulosData.length > 0 ? (
            modulosData.map((e) => (
              <div
                key={e.id}
                className="flex flex-row gap-4 lg:gap-20 lg:w-fit lg:pl-8 lg:justify-center lg:m-auto"
                onClick={() => onSelectSection(e.id)} // Ao clicar, envia o id da seção
              >
                <div className="h-[45px] px-6 py-2.5 bg-[#f14968] rounded-[100px] justify-center items-center gap-1 inline-flex">
                  <div className="text-center text-white text-lg font-bold font-['Nunito'] leading-[25.20px] tracking-tight">
                    {e.name}
                  </div>
                </div>
              </div>
            ))
          ) : (
            ""
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ShowSections;
