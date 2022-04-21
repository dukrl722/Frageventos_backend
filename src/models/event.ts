import {
    BeforeInsert,
    Column,
    Entity,
    ManyToOne,
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
    description: string

    @Column()
    @IsNotEmpty()
    place: string

    @Column({ name: "starts_on"})
    @IsNotEmpty()
    startsOn: Date

    @Column({ name: "ends_on" })
    endsOn: Date

    @Column({ name: "max_attendance", type: "int", default: 0})
    maxAttendance: number;

    // TODO: Como fazer relações no TYPEORM
    category_id: number
}