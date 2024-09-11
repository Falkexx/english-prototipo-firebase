'use client';

import Header from '@/app/Home/Components/Header';
import AssinaturaContainer from '@/app/Home/Components/AssinaturaContainer';
import ModuleContainer from './Components/ModuleContainer';
import ShowSections from './Components/ShowSections';


function LoggedHome() {

    return (
        <>
            <Header />
            <main className='w-full px-4 overflow-x-hidden'>
                <AssinaturaContainer />
                <ShowSections />
                <ModuleContainer />
            </main>
        </>
    );
}

export default LoggedHome;
