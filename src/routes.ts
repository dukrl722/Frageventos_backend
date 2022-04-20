import UserRouter from "./controllers/user-controller";

const Routes = (app) => {
    app.use('/api/v1', UserRouter);
};

export default Routes
