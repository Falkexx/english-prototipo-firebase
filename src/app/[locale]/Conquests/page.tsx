import Header from './Components/Header'
import IsAuthenticated from '@/services/IsAuthenticaded';

import ShowConquests from './Components/ShowConquests';
async function page() {

    await IsAuthenticated();
    
    return (
        <>  
            <Header/>

            <main className='w-full px-4'>

                <ShowConquests/>

            </main>

        </>
    );
}

export default page;