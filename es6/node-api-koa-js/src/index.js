import Koa from "koa";
import Router from "koa-router";
import { PORT } from "./config.js";
import { AppRoutes } from "./routes.js";

const app = new Koa();
const router = new Router();

//路由
AppRoutes.forEach((route) => router[route.method](route.path, route.action));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(`应用启动成功 端口:${PORT}`);
