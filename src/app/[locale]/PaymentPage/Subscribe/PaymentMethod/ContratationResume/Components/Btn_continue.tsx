interface BtnProps {

    handleProgress: () => void
}

function Btn_continue({ handleProgress }: BtnProps) {
    return (<button onClick={() => handleProgress()} className="Btn_Primary">
        Confirmar pagamento
    </button>);
}

export default Btn_continue;