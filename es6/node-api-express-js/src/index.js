import express from "express";
import { DOMAIN, PORT } from "./config.js";
import { AppRoutes } from "./routes.js";

const app = express();
app.use("/", AppRoutes);
app.listen(PORT);
console.log(`应用启动成功 端口:${PORT}, domain:${DOMAIN}`);
