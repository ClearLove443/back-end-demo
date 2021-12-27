import HomeService from '../service/home-service';
/**
 * Adds two numbers together.
 * @param {body} ctx The first number.
 * @param {int} num2 The second number.
 * @return {int} The sum of the two numbers.
*/
class HomeController {
  private service: HomeService = new HomeService();

  hello = async (ctx: { body: unknown; }) => {
    ctx.body = await this.service.hello();
  };
}

export default new HomeController();
