/*
 * @Author: x
 * @Date: 2022-12-14 10:49:24
 * @Description:
 */

/**
 * @description: This file is for theme plug-ins only, do not export utility functions
 * in this file(run only before page loads)
 */
type MultipleScopeVarsItem = {
  scopeName: string;
  varsContent: string;
};

/**
 * Preset theme color
 */
const themeColors = {
  default: {
    menuBg: "#001529",
    menuHover: "#4091f7",
    menuText: "rgb(254 254 254 / 65%)",
    menuTitleHover: "#fff",
    menuActiveBefore: "#4091f7",
    subMenuActiveText: "#fff",
    subMenuBg: "#0f0303",
    subMenuActiveBg: "#4091f7",
    sidebarLogo: "#002140",
  },
  light: {
    subMenuActiveText: "#409eff",
    menuBg: "#fff",
    menuHover: "#e0ebf6",
    subMenuBg: "#fff",
    subMenuActiveBg: "#e0ebf6",
    menuText: "#7a80b4",
    sidebarLogo: "#fff",
    menuTitleHover: "#000",
    menuActiveBefore: "#4091f7",
  },
  dusk: {
    subMenuActiveText: "#fff",
    menuBg: "#2a0608",
    menuHover: "#e13c39",
    subMenuBg: "#000",
    subMenuActiveBg: "#e13c39",
    menuText: "rgb(254 254 254 / 65.1%)",
    sidebarLogo: "#42090c",
    menuTitleHover: "#fff",
    menuActiveBefore: "#e13c39",
  },
  volcano: {
    subMenuActiveText: "#fff",
    menuBg: "#2b0e05",
    menuHover: "#e85f33",
    subMenuBg: "#0f0603",
    subMenuActiveBg: "#e85f33",
    menuText: "rgb(254 254 254 / 65%)",
    sidebarLogo: "#441708",
    menuTitleHover: "#fff",
    menuActiveBefore: "#e85f33",
  },
  yellow: {
    subMenuActiveText: "#d25f00",
    menuBg: "#2b2503",
    menuHover: "#f6da4d",
    subMenuBg: "#0f0603",
    subMenuActiveBg: "#f6da4d",
    menuText: "rgb(254 254 254 / 65%)",
    sidebarLogo: "#443b05",
    menuTitleHover: "#fff",
    menuActiveBefore: "#f6da4d",
  },
  mingQing: {
    subMenuActiveText: "#fff",
    menuBg: "#032121",
    menuHover: "#59bfc1",
    subMenuBg: "#000",
    subMenuActiveBg: "#59bfc1",
    menuText: "#7a80b4",
    sidebarLogo: "#053434",
    menuTitleHover: "#fff",
    menuActiveBefore: "#59bfc1",
  },
  auroraGreen: {
    subMenuActiveText: "#fff",
    menuBg: "#0b1e15",
    menuHover: "#60ac80",
    subMenuBg: "#000",
    subMenuActiveBg: "#60ac80",
    menuText: "#7a80b4",
    sidebarLogo: "#112f21",
    menuTitleHover: "#fff",
    menuActiveBefore: "#60ac80",
  },
  pink: {
    subMenuActiveText: "#fff",
    menuBg: "#28081a",
    menuHover: "#d84493",
    subMenuBg: "#000",
    subMenuActiveBg: "#d84493",
    menuText: "#7a80b4",
    sidebarLogo: "#3f0d29",
    menuTitleHover: "#fff",
    menuActiveBefore: "#d84493",
  },
  saucePurple: {
    subMenuActiveText: "#fff",
    menuBg: "#130824",
    menuHover: "#693ac9",
    subMenuBg: "#000",
    subMenuActiveBg: "#693ac9",
    menuText: "#7a80b4",
    sidebarLogo: "#1f0c38",
    menuTitleHover: "#fff",
    menuActiveBefore: "#693ac9",
  },
};
/**
 * @description Process the preset theme color into the format required by the theme plug-in
 */
export const genScssMultipleScopeVars = (): MultipleScopeVarsItem[] => {
  const result = [] as MultipleScopeVarsItem[];
  Object.keys(themeColors).forEach((key) => {
    result.push({
      scopeName: `layout-theme=${key}`,
      varsContent: `
            $subMenuActiveText: ${themeColors[key].subMenuActiveText} !default;
            $menuBg: ${themeColors[key].munuBg} !default;
            $menuHover: ${themeColors[key].menuHover} !default;
            $subMenuActiveBg: ${themeColors[key].subMenuBg} !default;
            $menuText: ${themeColors[key].menuText} !default;
            $sidebarLogo: ${themeColors[key].sidebarLogo} !default;
            $menuTitleHover: ${themeColors[key].menuTitleHover} !default;
            $menuActiveBefore: ${themeColors[key].menuActiveBefore} !default;
        `,
    } as MultipleScopeVarsItem);
  });
  return result;
};
