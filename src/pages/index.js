import Banner from "@/Components/Home/Banner";
import Mission from "@/Components/Home/Mission";
import Recruitment from "@/Components/Home/Recruitment";
import Header from "@/Shared/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Recruitment />
      <Mission/>
    </div>
  );
}
