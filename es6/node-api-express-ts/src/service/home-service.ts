import { Request, Response } from "express";

interface data {
  id: string;
  name: string;
}

class HomeService {

  hello = (req: Request , res: Response ) => {
    const datas = [{id: '0001', name: '0001'}];
    const resData: { datas: data[] } = {
      datas: [],
    };
    const url = req.url;
    const params = this.getRequest(url);
    resData.datas = datas.filter(
        (data) =>
          (!!params.id ? data.id.includes(params.id) : true) &&
        (!!params.name ? data.name.includes(params.name) : true),
    );
    // .sort((a, b) => a.id.toLowerCase() - b.id.toLowerCase());
    res.json(resData);
  };

  getRequest = (url: string) => {
    const RequestParams: data = {
      id: '',
      name: '',
    };
    if (url.includes('?')) {
      const str = url.split('?')[1];
      const strs = str.split('&');
      strs.map(
          (i: string) => (RequestParams[i.split('=')[0]] = decodeURI(i.split('=')[1])),
      );
    }
    return RequestParams;
  };
}
const homeService = new HomeService();
export {homeService};
