import EditBtns from './components/EditBtns';
import Header from './components/Header'
import ShowStatistics from './components/ShowStatistics'
import UserDatas from './components/UserDatas';
import BottomHeader from '../Home/Components/BottomHeader';

function page() {
    return (
        <>
            <BottomHeader ActualPath='Profile'/>

            <main className='px-6'>

                <UserDatas/>
                <EditBtns/>
                <ShowStatistics/>

            </main>
        </>
    );
}

export default page;