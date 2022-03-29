import Image from "next/image";
import HalfRating from "../styles/Rating";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "../styles/Button";

export default function Review() {
  return (
    <aside className="hidden lg:flex flex-col justify-between h-screen ">
      <header className="bg-white w-full px-4 py-3 shadow rounded-bl-xl text-center font-roboto-slab text-xl">
        Plant Name
      </header>
      <main className="bg-white hidden lg:block h-4/5 lg:w-80 shadow rounded-tl-xl rounded-bl-xl p-4 my-2">
        <Image
          src="/images/plants.jpg"
          width={400}
          height={300}
          className="object-cover"
        />
        <ul className="mt-4 border-t pt-4 font-roboto list-none space-y-4">
          <li className="text-orange-500">
            <CurrencyRupeeIcon />
            100
          </li>
          <li className="block text-md ">Available : 20</li>
          <li>
            <input
              type="text"
              className="border px-3 py-1 w-full outline-none"
              placeholder="Enter the quantity"
              max={20}
              min={1}
            />
          </li>
          <HalfRating value={3} />
          <Button text="Buy Now" variant="" />
        </ul>
      </main>
      <footer className="bg-white w-full px-4 py-2 shadow rounded-tl-xl text-center flex">
        <Button text="Add to Cart" variant="contained" />
        <Button text="More" variant="" />
      </footer>
    </aside>
  );
}
