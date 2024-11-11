import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function index() {
  const t = useTranslations("NotAuthenticaded");

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <section>
        <h1 className="text-xl font-extrabold text-zinc-700">{t("title")}</h1>
        <h2 className="text-sm font-medium text-zinc-500">{t("subtitle")}</h2>
      </section>

      <section className="w-full mt-6 mx-auto">
        <Link href="/Login" className="Btn_Primary">{t("CTABtn")}</Link>
      </section>
    </main>
  );
}

export default index;
