import * as express from 'express';
import {PORT} from './config';
import {AppRoutes} from './routes';

const app = express();
app.use('/', AppRoutes);
app.listen(PORT);
console.log(`应用启动成功 端口:${PORT}`);
