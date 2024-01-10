import { Router } from 'express';

import restaurantController from './controller/restaurantController.js';

const routes = new Router();

routes.get("/", restaurantController.getList);
routes.get("/get/:id", restaurantController.getRestaurant);
routes.post("/create", restaurantController.createRestaurant);
routes.put("/update", restaurantController.updateRestaurant);
routes.delete("/delete", restaurantController.deleteRestaurant);

export default routes;