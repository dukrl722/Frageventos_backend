import User from "../models/user";
import AppDataSource from "../app-data-source";
import express, { Request, Response } from 'express'

const UserRouter = express.Router()

UserRouter.get("/user", async function (_req: Request, res: Response) {
    const users = await AppDataSource.getRepository(User).find()
    res.json(users)
})

UserRouter.get("/user/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
})

UserRouter.post("/user", async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).create(req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
})

UserRouter.put("/user/:id", async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    AppDataSource.getRepository(User).merge(user, req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
})

UserRouter.delete("/user/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
})

export default UserRouter
