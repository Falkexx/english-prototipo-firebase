import Header from './Components/Header'

import ShowConquests from './Components/ShowConquests';
function page() {
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