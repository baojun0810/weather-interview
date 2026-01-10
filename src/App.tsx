import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import useThemeStore, { themes } from "./stores/themeStore";
import { router } from "./router";
import GlobalStyle from "./GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
