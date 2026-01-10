import { Outlet } from "react-router-dom";
import RootLayoutStyle from "./style";
import useThemeStore from "../stores/themeStore";

const RootLayout = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <RootLayoutStyle>
      <nav>
        <h1 className="title">Today's Weather</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            // Moon icon for dark mode
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Sun icon for light mode
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path
                d="M12 1v2m0 18v2M23 12h-2M3 12H1m17.66-7.66l-1.41 1.41M5.75 18.25l-1.41 1.41m12.02 0l-1.41-1.41M5.75 5.75L4.34 4.34"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>
      <main>
        <div id="main-container">
          <Outlet />
        </div>
      </main>
    </RootLayoutStyle>
  );
};

export default RootLayout;
