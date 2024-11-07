import Link from "next/link";

export const metadata = {
  title: "Политики",
  description: "Адвокат Роман Фёдорович Мордвинцев",
};

export default async function PoliticsPage() {
  return (
    <div className="wrapper-main grid gap-6 w-full">
      <div className="w-full">
        <h1 className="title-section">Politics</h1>
      <Link href="/privacy">
        <h2>Политика в отношении обработки персональных данных</h2>
      </Link>
      <Link href="/agreement">
        <h2>Согласие на обработку персональных данных</h2>
      </Link>
      </div>
    </div>
  );
}
