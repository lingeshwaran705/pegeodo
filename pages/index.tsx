import type { NextPage } from "next";
import Sidebar from "../components/Home/Sidebar";
import Topnav from "../components/Home/Topnav";
import Preview from "../components/Home/preview";
import Products from "../components/Home/Products";

const Home: NextPage = () => {
  return (
    <section className="h-screen overflow-auto w-screen bg-slate-50 flex items-center justify-between font-roboto flex-col us:flex-row">
      <Sidebar />
      <Topnav />
      <Products />
      <Preview />
    </section>
  );
};

export default Home;
