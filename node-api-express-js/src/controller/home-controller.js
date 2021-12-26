import { homeService } from "../service/home-service.js";

class HomeController {
  hello = (req, res) => {
    homeService.hello(req, res);
  };
}

const homeController = new HomeController();
export { homeController };
