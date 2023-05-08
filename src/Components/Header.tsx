import { FC } from "react";
import Logo from "../Assets/Logo";

const Header: FC = () => (
  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-400">
    <Logo />
  </div>
);

export default Header;
