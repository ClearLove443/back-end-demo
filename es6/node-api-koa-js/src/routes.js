import { homeController } from "./controller/home-controller.js";

const AppRoutes = [
  {
    path: "/test",
    method: "get",
    action: homeController.hello,
  },
];

export { AppRoutes };
