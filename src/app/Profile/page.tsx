import EditBtns from './components/EditBtns';
import Header from './components/Header'
import ShowStatistics from './components/ShowStatistics'
import UserDatas from './components/UserDatas';

function page() {
    return (
        <>
            <Header/>

            <main className='px-6'>

                <UserDatas/>
                <EditBtns/>
                <ShowStatistics/>

            </main>
        </>
    );
}

export default page;