import Patinho from "@/Midias/var5 1.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import BottomHeader from "./BottomHeader";

function AssinaturaContainer() {
  const t = useTranslations("LoggedHome");

  return (
    <>
      <section className="mt-4">
        <div className="w-full h-[154px] pl-6 pr-[142px] py-6 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl shadow flex-col justify-center items-start gap-4 inline-flex relative">
          <div className="text-white text-lg font-extrabold font-['Nunito'] leading-7">
            {t("SubscribeContainer")}
          </div>

          <div className=" px-6 py-1.5 bg-white rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex">
            <Link
              href="/PaymentPage"
              className="text-center text-[#f14968] text-base font-extrabold font-['Nunito'] leading-snug"
            >
              {t("subscribreBtn")}
            </Link>
          </div>

          <Image
            src={Patinho}
            alt="Patinho"
            className="absolute right-3 -bottom-6"
          />
        </div>
      </section>

    </>
  );
}

export default AssinaturaContainer;
