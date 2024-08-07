import Image from "next/image";
import VoltarArrow from '@/Midias/arrow-left.svg'


interface HeaderCadastrosProps {

    ProgressBarStatus?: number
    BackFunction?: () => void
    

}
function HeaderCadastros({ProgressBarStatus, BackFunction}:HeaderCadastrosProps) {
    return ( <>

        <header>

            <nav>
                <Image src={VoltarArrow} alt="Voltar" onClick={BackFunction}/>
            </nav>

        </header>
    
    </> );
}

export default HeaderCadastros;