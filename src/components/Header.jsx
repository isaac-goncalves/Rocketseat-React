import classes from "./Header.module.css";

import igniteLogo from "../assets/Ignite-logo.svg";

export function Header() {
  return (
    <header>
      <img src={igniteLogo} alt="Logotipo do Ignite"></img>
    </header>
  );
}
