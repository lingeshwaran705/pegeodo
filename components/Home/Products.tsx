import Image from "next/image";
import React from "react";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

export default function Products() {
  return (
    <section className="flex-col flex items-start justify-between h-screen us:px-4 flex-1">
      <header className="w-full bg-white text-center py-3 us:rounded-b-xl shadow hidden us:block">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-b-2 border-gray-200 focus:border-b-orange-300 text-center w-11/12 md:w-1/2 hidden us:inline-block"
        />
      </header>
      <main className=" products-container flex flex-wrap justify-center p-2 !pr-5 !pb-4 my-3 overflow-auto items-center h-4/5  flex-1 bg-white rounded-xl shadow self-center">
        <div className="w-52 lg:w-auto group relative">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>{" "}
        <div className="w-52 lg:w-auto">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>{" "}
        <div className="w-52 lg:w-auto">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>{" "}
        <div className="w-52 lg:w-auto">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>{" "}
        <div className="w-52 lg:w-auto">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>{" "}
        <div className="w-52 lg:w-auto">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>{" "}
        <div className="w-52 lg:w-auto">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>{" "}
        <div className="w-52 lg:w-auto">
          <Image
            src="/images/plants.jpg"
            width={250}
            height={200}
            className="object-cover  !m-3 "
          />
        </div>
      </main>
      <footer className="w-full bg-white p-3 rounded-t-xl text-center text-orange-400">
        Moto
      </footer>
    </section>
  );
}
