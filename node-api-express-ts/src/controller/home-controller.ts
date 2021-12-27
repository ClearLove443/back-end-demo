import { Request, Response } from 'express';
import {homeService} from '../service/home-service.js';
/**
 * Adds two numbers together.
 * @param {Request} req The first number.
 * @param {Response} res The second number.
 */
class HomeController {
  hello = (req: Request, res: Response) => {
    homeService.hello(req, res);
  };
}

const homeController = new HomeController();
export {homeController};
