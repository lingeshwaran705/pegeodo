import { FaHome } from "react-icons/fa";
import sideNavList from "./SideNavList";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApiIcon from "@mui/icons-material/Api";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

function Sidebar() {
  var icons = [
    { id: 1, component: FaHome, itemName: "Home" },
    { id: 2, component: ShoppingBasketIcon, itemName: "Shop" },
    { id: 3, component: LocalOfferIcon, itemName: "Orders" },
    { id: 4, component: AddShoppingCartIcon, itemName: "Cart" },
    { id: 5, component: AccountCircleIcon, itemName: "Account" },
    { id: 6, component: ApiIcon, itemName: "About" },
  ];

  let LogoBar = sideNavList({ itemName: "Logo" })(OfflineBoltIcon);
  let Refer = sideNavList({ itemName: "Refer" })(AttachMoneyIcon);

  return (
    <aside className="h-full group  hidden us:flex justify-between flex-col ">
      <header className="bg-white shadow rounded-br-xl flex items-center p-1">
        <LogoBar />
      </header>
      <nav className="h-4/5 group w-auto  rounded-tr-xl rounded-br-xl flex flex-col justify-around bg-white shadow my-2 ">
        {icons.map((item) => {
          let List = sideNavList({ itemName: item.itemName })(item.component);
          return <List key={item.id} />;
        })}
      </nav>
      <footer className="bg-white w-full p-1  shadow rounded-tr-xl text-center">
        <Refer />
      </footer>
    </aside>
  );
}

export default Sidebar;
