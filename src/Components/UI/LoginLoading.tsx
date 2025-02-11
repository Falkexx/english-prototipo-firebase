import { Link } from "@/i18n/routing";

function LoginLoading({Error}:{Error?:string}) {


  if(Error != ""){

    return 

  }else{
    return (
      <section className="w-full h-screen fixed flex justify-center items-center bg-black bg-opacity-35 z-50 flex-col gap-5">
        <div
          className="w-16 h-16 border-4 border-solid border-[#F14968] border-t-transparent rounded-full animate-spin"
        ></div>
      </section>
    );
  }


}

export default LoginLoading;
