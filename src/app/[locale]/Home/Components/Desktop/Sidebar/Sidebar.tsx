import Header from "./Header";
import LogOut from "./LogOut";
import Navegation from "./Navegation";

function Sidebar() {
  return ( 

    <section className="fixed top-0 left-0 h-screen w-[23%] bg-white shadow-[0px_20px_25px_0px_rgba(0,0,0,0.10)] px-4 flex flex-col overflow-y-auto scrollbar-hide">
      <Header/>

      <Navegation ActualPath="Home"/>

      <LogOut/>
    </section>
   );
}

export default Sidebar;