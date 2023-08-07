import lS from "manager-local-storage";
import { CHANGE_THEME } from "../reducer/theme";

export const changeTheme = (theme) => {
  const newTheme = theme === "light" ? "dark" : "light";
  lS.set("biewwl.com_theme", { theme: newTheme });
  return { type: CHANGE_THEME, payload: newTheme };
};
