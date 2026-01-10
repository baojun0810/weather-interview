import "styled-components";
import type { ThemeColors } from "./stores/themeStore";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {}
}
