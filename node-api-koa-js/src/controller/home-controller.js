import { homeService } from "../service/home-service.js";

class HomeController {
  hello = async (ctx) => {
    ctx.body = await homeService.hello();
  };
}

const homeController = new HomeController();
export { homeController };
