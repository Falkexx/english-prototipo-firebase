import React from "react";
import HeaderCadastros from "../Header";

interface ContainerProps {

    children: React.ReactNode
}

function Container({ children }: ContainerProps) {
    return (

        <>

            <main className="">
                {children}
            </main>
        </>
    );
}

export default Container;