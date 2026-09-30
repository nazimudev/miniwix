export const getTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  return localStorage.getItem("theme") || "light";
};
