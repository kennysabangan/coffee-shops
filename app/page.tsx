import Banner from "@/components/banner";
import CardList from "@/components/card-list";

export default async function Home() {

  return (
    <main className="h-screen">
      <Banner />
      <CardList />
    </main>
  )
}
