import type { NextPage } from "next";
import Sidebar from "../components/Home/Sidebar";
import Topnav from "../components/Home/Topnav";
import Review from "../components/Home/Review";
import Products from "../components/Home/Products";

const Home: NextPage = () => {
  return (
    <section className="h-screen overflow-auto w-screen bg-slate-50 flex items-center justify-between">
      <Sidebar />
      <Topnav />
      <Products />
      <Review />
    </section>
  );
};

export default Home;
