import { makeVar, useReactiveVar } from "@apollo/client";

export const themeVar = makeVar(localStorage.getItem("theme") || "light");

export const tokenVar = makeVar(localStorage.getItem("token") || "");

export const useThemeVar = () => {
  return useReactiveVar(themeVar);
};

export const useTokenVar = () => {
  return useReactiveVar(tokenVar);
};
