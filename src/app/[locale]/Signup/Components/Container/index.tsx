import React from "react";

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