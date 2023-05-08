import { FC } from "react";
import Toggle from "rsuite/Toggle";

interface DarkModeProps {
  darkMode: boolean;
  handleDarkModeToggle: (value: boolean) => void;
}

const DarkMode: FC<DarkModeProps> = ({ darkMode, handleDarkModeToggle }) => (
  <div>
    <span className="mr-3">Dark Mode</span>
    <Toggle
      checked={darkMode}
      onChange={(value) => handleDarkModeToggle(value)}
    />
  </div>
);

export default DarkMode;
