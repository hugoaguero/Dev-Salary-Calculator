import { Application } from "express";
import CommonRoutes from "./common.routes";
import ListTechnologiesAction from "../actions/technology/list.technologies.action";
import CreateTechnologyAction from "../actions/technology/create.technology.action";
import DeleteTechnologyAction from "../actions/technology/delete.technology.action";
import updateTechnologyAction from "../actions/technology/update.technology.action";

class TechnologyRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Technology');
  }

  setUpRoutes(): Application {
    this.app.get('/technologies', ListTechnologiesAction.run);


    this.app.put('/technologies/:id', updateTechnologyAction.run);

    this.app.post('/technologies', CreateTechnologyAction.run);

    this.app.delete('/technologies/:id', DeleteTechnologyAction.run);

    return this.app;
  }
}

export default TechnologyRoutes;
