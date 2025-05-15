export const RouteUtils = {
  formatRoute(alias1) {
    return alias1.split(" ").join("-").toLowerCase();
  },
  formatRoute2(alias1, alias2) {
    return (
      alias1.split(" ").join("-").toLowerCase() +
      "/" +
      alias2.split(" ").join("-").toLowerCase()
    ).trim();
  },
};
