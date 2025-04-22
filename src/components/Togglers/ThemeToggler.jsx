// import { useTheme } from './context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { useTheme } from '../../contexts/useTheme';
// import { useTheme } from '../../contexts/ThemeContext';

// export default function ThemeToggler() {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
//     >
//       {darkMode ? <LightModeIcon/> : <Brightness3Icon/>}
//     </button>
//   );
// }

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border-none rounded-full dark:bg-gray-800 text-[#56bbe3] dark:text-white transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <LightModeIcon/> : <Brightness3Icon/>}
    </button>
  );
};

export default ThemeToggler;