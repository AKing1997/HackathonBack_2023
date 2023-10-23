import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Column } from 'typeorm';
import { User } from 'src/API/user/entities/user.entity';
import { API, Color, SkinType } from 'src/API/enums/enums';

@Entity({ name: API.USER_SKIN })
export class UserSkin {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column("integer")
    SkinId: number;

    @Column("varchar", { length: 50 })
    Nombre: string;

    @Column("double precision")
    Precio: number;

    @Column({
        type: "enum",
        enum: Color,
        default: Color.RED
    })
    Color: Color;

    @Column({
        type: "enum",
        enum: SkinType,
        default: SkinType.COMMON
    })
    Tipos: SkinType;

    @CreateDateColumn({ select: false })
    BuyDate: Date;

    @CreateDateColumn({ select: false })
    UpdateDate: Date;

    @ManyToOne(() => User, { nullable: false })
    User: User;
}

