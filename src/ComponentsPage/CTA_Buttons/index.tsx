import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

function IndexPage() {
    const t = useTranslations('HomePage');
    const locale = useLocale(); // Obtém o locale atual

    return (
        <section className="flex flex-col gap-5 lg:flex-row">

            <article className="w-full m-auto lg:w-2/4">
                <Link href={`/Signup`}>
                    <button className="Btn_Primary">{t('startNow')}</button> {/* Usar a tradução da HomePage */}
                </Link>
            </article>

            <article className="w-full m-auto lg:w-2/4">
                <Link href={`/Login`}>
                    <button className="Btn_Secundary">{t('accessAccount')}</button> {/* Usar a tradução da HomePage */}
                </Link>
            </article>
        </section>
    );
}

export default IndexPage;
