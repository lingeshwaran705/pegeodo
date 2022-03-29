import MenuIcon from "@mui/icons-material/Menu";

export default function Topnav() {
  return (
    <div className="w-screen h-auto px-6 py-4 bg-white flex items-center justify-between shadow-md us:hidden">
      <span>Logo</span>
      <MenuIcon className="cursor-pointer" />
    </div>
  );
}
