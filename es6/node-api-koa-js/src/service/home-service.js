class HomeService {
  hello = () => {
    return new Promise((resolve) => resolve("hello world"));
  };
}
const homeService = new HomeService();
export { homeService };
