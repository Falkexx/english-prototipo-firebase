import Header from '@/app/LoggedHome/Components/Header'
import AssinaturaContainer from '@/app/LoggedHome/Components/AssinaturaContainer'
import ModulesTopics from './Components/ModulesTopics';
import ModuleContainer from './Components/ModuleContainer';

function LoggedHome() {
    return (<>

        <Header />

        <main className='w-full px-4 overflow-x-hidden'>
            <AssinaturaContainer />
            <ModulesTopics/>
            <ModuleContainer/>
        </main>
    </>);
}

export default LoggedHome;