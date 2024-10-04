'use client'

import { useState } from "react";
import Header from "@/app/Signup/Components/Header/index";
import ShowLessons from "../components/ShowLessons";

function Page() {
  const [progress, setProgress] = useState(0);

  const updateProgress = (progress: number) => {
    setProgress(progress);
  };

  return (
    <section className="p-4 flex flex-col gap-3">
      <Header ProgressBarStatus={progress} />

      <main>
        <ShowLessons updateProgress={updateProgress} />
      </main>
    </section>
  );
}

export default Page;
