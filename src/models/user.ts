import crypto from "crypto"
import * as argon2 from "argon2";
import {
    BeforeInsert,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm"
import { IsEmail, IsNotEmpty } from "class-validator"

/**
 * Modelo que vai ser usado para representar os usuários do sistema.
 */
@Entity()
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    @IsNotEmpty()
    name: string

    @Column()
    @IsNotEmpty()
    surname: string

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @Column({ select: false })
    @IsNotEmpty()
    password: string

    @Column({ name: "password_salt", select: false })
    passwordSalt: string

    @Column({ name: "is_active", default: true})
    isActive: boolean

    @BeforeInsert()
    public async hashPassword(): Promise<void> {
        this.passwordSalt = User.generateSalt();
        this.password = await User.hashPassword(this.password, this.passwordSalt);
    }

    private static hashPassword(password: string, salt: string): Promise<string> {
        return new Promise((resolve, reject) => {
            argon2.hash(password + salt)
                .then(hash => resolve(hash))
                .catch(err => reject(err))
        })
    }

    private static generateSalt(): string {
        const SALT_SIZE = 64
        return crypto
            .randomBytes(Math.ceil(SALT_SIZE / 2))
            .toString("hex")
            .slice(0, SALT_SIZE)
    }
}
