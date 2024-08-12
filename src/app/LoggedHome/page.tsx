import Header from '@/app/LoggedHome/Components/Header'
import AssinaturaContainer from '@/app/LoggedHome/Components/AssinaturaContainer'

function LoggedHome() {
    return (<>

        <Header />

        <main className='px-4'>
            <AssinaturaContainer />
        </main>
    </>);
}

export default LoggedHome;