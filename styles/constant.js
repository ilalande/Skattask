const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};
const QUERIES = {
  mobileAndLess: `(max-width: ${BREAKPOINTS.tabletMin}px)`,
  tablettAndLess: `(max-width: ${BREAKPOINTS.laptopMin}px)`,
  laptopAndLes: `(max-width: ${BREAKPOINTS.desktopMin}px)`,
};
export default QUERIES;
