import 'dotenv/config'
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: process.env.DATABASE_TYPE || "postgres",
    host: process.env.DATABASE_HOST || "localhost",
    port: +process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USERNAME || "postgres",
    password: process.env.DATABASE_PASSWORD || "postgres",
    database: process.env.DATABASE_NAME || "frageventos_database",
    entities: ["src/models/*.ts"],
    logging: true,
    synchronize: true,
})

export default AppDataSource
