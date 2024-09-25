'use client'

import Header from "@/app/Home/Components/Header";
import Resume from "./Components/Resume";
import Btn_continue from "./Components/Btn_continue";
import SucessPayment from "./Screens/SucessPayment";
import { useState } from "react";
function index() {

    const[Progress, setProgress] = useState(0)

    function handleProgress(){

        setProgress(Progress + 1)

    }
    return (
        <>

            <Header/>

            <main className="px-4 h-[calc(100vh-30vh)] flex flex-col justify-between">

                {Progress == 0 ? <Resume/> : <SucessPayment/>}
                <Btn_continue handleProgress={handleProgress} />

            </main>
        
        </>
    );
}

export default index;