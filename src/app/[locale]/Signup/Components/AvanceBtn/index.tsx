import { useTranslations } from "next-intl";

interface AvanceBtnProps {
    AvanceFunction?: () => void,
    ProgressStatus?: number,
    ProgressLogin?: number,
}

function AvanceBtn({ AvanceFunction, ProgressStatus = 0, ProgressLogin }: AvanceBtnProps) {
    const t = useTranslations('SignUpStages.AvanceBtn');

    // Função que executa a ação de avanço e rola para o topo
    const handleClick = () => {
        if (AvanceFunction) {
            AvanceFunction();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (ProgressLogin === 0) {
        return <button className="Btn_Primary" onClick={handleClick}>{t('enter')}</button>;
    }

    if (ProgressStatus === 0) {
        return <button className="Btn_Primary" onClick={handleClick}>{t('start')}</button>;
    }

    if (ProgressStatus === 7) {
        return <button className="Btn_Primary" onClick={handleClick}>{t('createAccount')}</button>;
    }

    if (ProgressStatus > 7 && ProgressStatus < 12) {
        return <button className="Btn_Primary" onClick={handleClick}>{t('continue')}</button>;
    }

    if (ProgressStatus === 12) {
        return <button className="Btn_Primary" onClick={handleClick}>{t('accessPlatform')}</button>;
    }

    if (ProgressStatus === 10) {
        return <button className="Btn_Primary" onClick={handleClick}>{t('finish')}</button>;
    }

    return <button className="Btn_Primary" onClick={handleClick}>{t('advance')}</button>;
}

export default AvanceBtn;
