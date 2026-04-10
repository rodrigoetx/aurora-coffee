"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type Theme = "clara" | "escura";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "clara",
  toggleTheme: () => {},
  isDark: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("clara");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "clara" ? "escura" : "clara"));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === "escura" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
