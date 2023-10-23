import { API } from "src/API/enums/enums";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: API.USER })
export class User {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column("varchar", { length: 50, unique: true })
    UserName: string;

    @Column("varchar", { length: 150, select: false })
    Password: string;

    @CreateDateColumn({ select: false })
    RegistredDate: Date;
}
