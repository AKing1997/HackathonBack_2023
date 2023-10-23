import { API, ApiEndPoint } from "src/API/enums/enums";
import { User } from "src/API/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Logs" })
export class Log {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn()
    User: User;

    @Column({
        type: "enum",
        enum: API,
        default: API.AUTH
    })
    Api: API;

    @Column({
        type: "enum",
        enum: ApiEndPoint,
        default: ApiEndPoint.AUTH
    })
    Enpoint: ApiEndPoint;

    @CreateDateColumn()
    DateTime: Date;
}
