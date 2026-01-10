import { create } from "zustand";
import storage from "../utils/storage";
import bgLight from "../assets/bg-light.png";
import bgDark from "../assets/bg-dark.png";

export type Theme = "light" | "dark";

export interface ThemeColors {
  background: string;
  navBackground: string;
  navBorder: string;
  textPrimary: string;
  textSecondary: string;
  cardBackground: string;
  shadowColor: string;
  // Additional theme colors
  weatherCardBg: string;
  weatherCardBorder: string;
  historyItemBg: string;
  inputBg: string;
  buttonBg: string;
}

export const themes: Record<Theme, ThemeColors> = {
  light: {
    background: bgLight,
    navBackground: "rgba(255, 255, 255, 0.15)",
    navBorder: "rgba(255, 255, 255, 0.2)",
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.6)",
    cardBackground: "rgba(255, 255, 255, 0.4)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    // Additional
    weatherCardBg: "rgba(255, 255, 255, 0.1)",
    weatherCardBorder: "rgba(255, 255, 255, 0.5)",
    historyItemBg: "rgba(255, 255, 255, 0.4)",
    inputBg: "rgba(255, 255, 255, 0.2)",
    buttonBg: "rgba(255, 255, 255, 1)",
  },
  dark: {
    background: bgDark,
    navBackground: "rgba(0, 0, 0, 0.3)",
    navBorder: "rgba(255, 255, 255, 0.1)",
    textPrimary: "rgba(255, 255, 255, 0.95)",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    cardBackground: "rgba(0, 0, 0, 0.3)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    // Additional
    weatherCardBg: "rgba(0, 0, 0, 0.2)",
    weatherCardBorder: "rgba(255, 255, 255, 0.2)",
    historyItemBg: "rgba(0, 0, 0, 0.3)",
    inputBg: "rgba(0, 0, 0, 0.2)",
    buttonBg: "rgba(255, 255, 255, 0.15)",
  },
};

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: (storage.get("theme") as Theme) ?? "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      storage.set("theme", newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme) => {
    storage.set("theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;
