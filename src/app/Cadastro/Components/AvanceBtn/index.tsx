interface AvanceBtnProps {

    AvanceFunction?: () => void,
    ProgressStatus?: number,
    ProgressLogin?: number,
}


function AvanceBtn({ AvanceFunction, ProgressStatus, ProgressLogin }: AvanceBtnProps) {

    //CASO A PROGRESS BAR SEJA IGUAL A ZERO. ELE VAI RENDERIZAR O BOTAO COM O TEXTO INICIAR
    if (ProgressStatus === 0) {

        return (<>

            <button className="Btn_Primary" onClick={AvanceFunction}>Iniciar</button>
        </>);

    }else if(ProgressLogin === 0) {
        return(
            <>
            <button className="Btn_Primary" onClick={AvanceFunction}>Entrar</button>
            </>
        )
    }
    
    else{

        return (<>

            <button className="Btn_Primary" onClick={AvanceFunction}>Avançar</button>
        </>);
        
    }
}

export default AvanceBtn;