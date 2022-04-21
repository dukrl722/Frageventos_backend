import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import AppDataSource from "src/app-data-source"
import User from "src/models/user"

export default function verifyToken(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ) {
        jwt.verify(
            req.headers.authorization.split(" ")[1],
            process.env.API_SECRET,
            function (err, decode) {
                if (err) req.user = undefined
                AppDataSource.getRepository(User)
                    .findOneBy({
                        id: decode.id,
                    })
                    .then((user) => {
                        req.user = user
                        next()
                    })
                    .catch((err) => res.status(500).send({ message: err }))
            }
        )
    } else {
        req.user = undefined
        // talvez tenha que levar pra fora da chave ou adicionar next no if da linha 20
        // mais isso só vou saber rodando
        next()
    }
}

export function hasPermission(req: Request, res: Response, next: NextFunction): void {
    console.log(`hasPermission not implemented: ${req} ${res} ${next}`)
}
