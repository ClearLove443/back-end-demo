import {homeService} from '../service/home-service.js';
/**
 * Adds two numbers together.
 * @param {any} req The first number.
 * @param {any} res The second number.
 */
class HomeController {
  hello = (req: any, res: any) => {
    homeService.hello(req, res);
  };
}

const homeController = new HomeController();
export {homeController};
