import { useTranslations } from "next-intl";

interface AvanceBtnProps {
    AvanceFunction?: () => void,
    ProgressStatus?: number,
    ProgressLogin?: number,
}

function AvanceBtn({ AvanceFunction, ProgressStatus = 0, ProgressLogin }: AvanceBtnProps) {
    // Obter as traduções
    const t = useTranslations('SignUpStages.AvanceBtn');

    // Caso o ProgressLogin seja 0, exibe o botão de "Entrar"
    if (ProgressLogin === 0) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>{t('enter')}</button>
            </>
        );
    }

    // Caso o ProgressStatus seja 0, exibe o botão de "Iniciar"
    if (ProgressStatus === 0) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>{t('start')}</button>
            </>
        );
    }

    // Caso o ProgressStatus seja 7, exibe o botão de "Criar minha conta"
    else if (ProgressStatus === 7) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>{t('createAccount')}</button>
            </>
        );
    }

    // Caso o ProgressStatus esteja entre 8 e 11, exibe o botão de "Continuar"
    else if (ProgressStatus > 7 && ProgressStatus < 12) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>{t('continue')}</button>
            </>
        );
    }

    // Caso o ProgressStatus seja 12, exibe o botão de "Acessar a plataforma"
    else if (ProgressStatus === 12) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>{t('accessPlatform')}</button>
            </>
        );
    }

    // Caso o ProgressStatus seja 10, exibe o botão de "Finalizar"
    else if (ProgressStatus === 10) {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>{t('finish')}</button>
            </>
        );
    }

    // Para os outros casos, exibe o botão de "Avançar"
    else {
        return (
            <>
                <button className="Btn_Primary" onClick={AvanceFunction}>{t('advance')}</button>
            </>
        );
    }
}

export default AvanceBtn;
