import UserRouter from "./controllers/user-controller";
import EventRouter from "./controllers/event-controller";

const Routes = (app) => {
    app.use('/api/v1', UserRouter);
    app.use('/api/v1', EventRouter);
};

export default Routes
