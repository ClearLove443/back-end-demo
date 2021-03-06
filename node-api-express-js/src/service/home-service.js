class HomeService {
  hello = (req, res) => {
    const datas = [{ id: "0001", name: "0001" }];
    const resData = {};
    const url = req.url;
    const params = this.getRequest(url);
    resData.datas = datas
      .filter(
        (data) =>
          (!!params.id ? data.id.includes(params.id) : true) &&
          (!!params.kaishaMei ? data.name.includes(params.name) : true)
      )
      .sort((a, b) => a.id.toLowerCase() - b.id.toLowerCase());
    res.json(resData);
  };

  getRequest = (url) => {
    const RequestParams = {};
    if (url.includes("?")) {
      const str = url.split("?")[1];
      const strs = str.split("&");
      strs.map(
        (i) => (RequestParams[i.split("=")[0]] = decodeURI(i.split("=")[1]))
      );
    }
    return RequestParams;
  };
}
const homeService = new HomeService();
export { homeService };
