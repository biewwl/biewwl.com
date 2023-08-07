import lS from "manager-local-storage";

const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const autoTheme = preferDark ? "dark" : "light";
console.log(preferDark);
const initialState = lS.get("biewwl.com_theme") ?? { theme: autoTheme };

export const CHANGE_THEME = "CHANGE_THEME";

const theme = (prevStore = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...prevStore, theme: action.payload };

    default:
      break;
  }
  return prevStore;
};

export default theme;
