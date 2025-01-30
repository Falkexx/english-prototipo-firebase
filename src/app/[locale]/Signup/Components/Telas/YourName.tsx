import { useState } from 'react';
import { useTranslations } from 'next-intl';
interface YourNameProps {
    onNameChange: (name: string) => void;
}

function YourName({ onNameChange }: YourNameProps) {
    const [name, setName] = useState('');
    const t = useTranslations('SignUpStages')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        onNameChange(e.target.value);
    };

    return (
        <section className="flex flex-col gap-8 mt-4">
            <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">{t('name.title')}   </h1>

            <form className="flex flex-col gap-2">
                <label className="labelDef">{t('name.inputLabel')}</label>
                <input type="text" className="inputDef" value={name} onChange={handleChange} />
            </form>
        </section>
    );
}

export default YourName;
