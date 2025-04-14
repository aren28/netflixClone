import { AppBar } from "@mui/material";

import MenuList from "./Parts/MenuList/MenuList";
import FirstView from "./Parts/FirstView/FirstView";

function Header() {
  return (
    <AppBar position="static" sx={appbar}>
      <MenuList />
      <FirstView />
    </AppBar>
  );
}

const appbar = {
  backgroundColor: "rgba(20,20,20)",
  backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
  letterSpacing: "4px",
};

const menu = {
  fontSize: "20px",
};

export default Header;
