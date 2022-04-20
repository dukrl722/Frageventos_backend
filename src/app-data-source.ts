import { DataSource } from "typeorm"
import User from "./models/user";

/*
const AppDataSourcePostgres = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "frageventos_database",
    entities: ["src/models/*.ts"],
    logging: true,
    synchronize: true,
})
 */

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "../database.sqlite",
    entities: [User],
    synchronize: true,
})

export default AppDataSource
