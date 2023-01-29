import { RouteLocation } from "vue-router";
module.exports = {
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
  },
};

const haveAuthGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  console.log(to, from, next);

  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    next();
  } else {
    next({ name: "login" });
  }
};

export default haveAuthGuard;
