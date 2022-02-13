import express from 'express';
import { log } from 'debug';
import cors from 'cors';
import expressWinston from 'express-winston';
import winston from 'winston';
import CommonRoutes from './http/routes/common.routes';
import RateRoutes from './http/routes/rate.routes';
import TechnologyRoutes from './http/routes/technology.routes';

// settings
const app: express.Application = express();
const port: number = 3000;

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Response: Server Ok!');
});

// middlewares
/// Request Logging
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  )
};

/// when not debugging, log requests as one-liners
if (!process.env.DEBUG) {
    loggerOptions.meta = false; 
}

app.use(expressWinston.logger(loggerOptions));
app.use(cors());
app.use(express.json());

// routes
const routes: Array<CommonRoutes> = [];
routes.push(new RateRoutes(app));
routes.push(new TechnologyRoutes(app));

// start server
app.listen(port, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log(`Server listening on port ${port}`);
});