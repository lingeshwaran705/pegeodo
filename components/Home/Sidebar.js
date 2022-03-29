import { FaHome } from "react-icons/fa";
import sideNavList from "./SideNavList";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApiIcon from "@mui/icons-material/Api";

function Sidebar() {
  var icons = [
    { id: 1, component: FaHome, itemName: "Home" },
    { id: 2, component: ShoppingBasketIcon, itemName: "Shop" },
    { id: 3, component: AddShoppingCartIcon, itemName: "Cart" },
    { id: 4, component: ApiIcon, itemName: "About" },
    { id: 5, component: AccountCircleIcon, itemName: "Account" },
  ];

  return (
    <nav className="h-4/5  group w-auto  rounded-tr-xl rounded-br-xl flex flex-col justify-around bg-white shadow-3xl ">
      {icons.map((item) => {
        let List = sideNavList({ itemName: item.itemName })(item.component);
        return <List key={item.id} />;
      })}
    </nav>
  );
}

export default Sidebar;
