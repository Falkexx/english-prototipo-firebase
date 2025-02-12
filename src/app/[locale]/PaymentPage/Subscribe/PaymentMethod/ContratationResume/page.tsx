"use client";

import Header from "@/app/[locale]/Home/Components/Header";
import Resume from "./Components/Resume";
import Btn_continue from "./Components/Btn_continue";
import SucessPayment from "./Screens/SucessPayment";
import { useState } from "react";
import BottomHeader from "@/app/[locale]/Home/Components/BottomHeader";
import Sidebar from "@/app/[locale]/Home/Components/Desktop/Sidebar/Sidebar";

function index() {
  const [Progress, setProgress] = useState(0);

  function handleProgress() {
    setProgress(Progress + 1);
  }
  return (
    <>
      <section className="lg:flex lg:flex-row lg:w-full lg:m-auto ">
        <div className="hidden lg:block lg:w-[23%]">
          <Sidebar ActualPath="Plans" />
        </div>
        <Header />

        <main className="px-4  flex flex-col justify-between lg:h-[50vh] lg:px-6 lg:w-[80%] lg:mt-10">
          {Progress == 0 ? <Resume /> : <SucessPayment />}

          <div className="my-10">
            <Btn_continue handleProgress={handleProgress} />
          </div>
        </main>

        <BottomHeader ActualPath="Plans" />
      </section>
    </>
  );
}

export default index;
