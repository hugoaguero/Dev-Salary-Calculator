import express from 'express';
import { log } from 'debug';
import cors from 'cors';
import expressWinston from 'express-winston';
import winston from 'winston';
import CommonRoutes from './http/routes/common.routes';
import RateRoutes from './http/routes/rate.routes';
import TechnologyRoutes from './http/routes/technology.routes';

const app: express.Application = express();

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hola');
})

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));



const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

routes.push(new RateRoutes(app));
routes.push(new TechnologyRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});