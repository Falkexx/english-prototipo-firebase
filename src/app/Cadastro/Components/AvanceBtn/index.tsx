interface AvanceBtnProps {

    AvanceFunction?: () => void,
    ProgressStatus?: number,
    ProgressLogin?: number,
}


function AvanceBtn({ AvanceFunction, ProgressStatus=0, ProgressLogin }: AvanceBtnProps) {

    //CASO A PROGRESS BAR SEJA IGUAL A ZERO. ELE VAI RENDERIZAR O BOTAO COM O TEXTO INICIAR



    if (ProgressStatus === 0) {

        return (<>

            <button className="Btn_Primary" onClick={AvanceFunction}>Iniciar</button>
        </>);

    }

    else if (ProgressStatus === 7) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>Criar minha conta</button>
            </>
        )
    }

    else if ( ProgressStatus > 7 && ProgressStatus < 12) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>Continuar</button>
            </>
        )
    }

    else if (ProgressStatus === 12) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>Acessar a plataforma</button>
            </>
        )
    }

    
    else if (ProgressStatus === 10) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>Finalizar</button>
            </>
        )
    }

    else if (ProgressLogin === 0) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>Entrar</button>
            </>
        )
    }

    else {

        return (<>

            <button className="Btn_Primary" onClick={AvanceFunction}>Avançar</button>
        </>);

    }
}

export default AvanceBtn;