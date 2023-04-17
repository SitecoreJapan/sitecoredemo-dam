import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

export const ThemeChanger: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  BsSun;
  return (
    <div>
      <button className="block p-1 rounded-full" onClick={handleSetTheme}>
        {theme === "light" ? (
          <BsMoon className="w-5 h-5" />
        ) : (
          <BsSun className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};
