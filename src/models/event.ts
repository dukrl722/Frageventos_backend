import {
    BeforeInsert,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    place: string

    @Column({ name: "starts_on"})
    startsOn: Date

    @Column({ name: "ends_on" })
    endsOn: Date

    @Column({ name: "max_attendance", type: "int", default: 0})
    maxAttendance: number;

    // TODO: Como fazer relações no TYPEORM
    category_id: number
}
