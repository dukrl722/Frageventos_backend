import express, { Express, Request, Response, json, urlencoded } from "express"
import morgan from 'morgan'
import swaggerUi from "swagger-ui-express"
import "reflect-metadata"
import AppDataSource from "./app-data-source"
import swaggerFile from "../doc/swagger_output.json"
import Routes from "./routes"

AppDataSource.initialize()
    .then(() => console.log("Iniciando data source"))
    .catch((err) => console.error(err))

const app: Express = express()

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(morgan('tiny'))
app.use(json())
app.use(urlencoded({ extended: true }))

app.get("/", (_req: Request, res: Response) => {
    res.redirect('/doc')
})

Routes(app)

export default app
