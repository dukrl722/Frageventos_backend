import User from "../models/user";
import AppDataSource from "../app-data-source";
import express, { Request, Response } from 'express'

const UserRouter = express.Router()

/**
 * Rotas de fato:
 * 
 * PUT:    /user/:user_id
 * DELETE: /user/:user_id
 * POST:   /user/disable -> Talvez seja mais interessante apenas desabilitar o
 *                          usuário e não deletar ele de uma vez, assim dá 
 *                          chance de ele voltar novamente
 * POST:   /user/login   -> Retorna JWT?
 * POST:   /user/password_reset/
 * POST:   /user/password_reset/validate_token/ 
 * POST:   /user/password_reset/confirm/ 
 */ 

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
