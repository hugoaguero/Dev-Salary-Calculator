import { Application } from "express";
import CommonRoutes from "./common.routes";
import ListRatesAction from "../actions/rates/list.rates.action";
import CreateRatesAction from "../actions/rates/create.rates.action";
import UpdateRatesAction from "../actions/rates/update.rates.action";
import DeleteRatesAction from "../actions/rates/delete.rates.action";
import FilterRatesAction from "../actions/rates/filter.rates.action";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rate');
  }

  setUpRoutes(): Application {
    this.app.get('/rates', ListRatesAction.run);

    this.app.get('/rates/:id', ListRatesAction.run);

    this.app.post('/rates', CreateRatesAction.run);

    this.app.post('/rates/filter', FilterRatesAction.run)

    this.app.put('/rates/:id', UpdateRatesAction.run);

    this.app.delete('/rates/:id', DeleteRatesAction.run);

    return this.app;
  }
}

export default RateRoutes;
