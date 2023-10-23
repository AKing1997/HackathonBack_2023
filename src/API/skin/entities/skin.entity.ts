import { API, Color, SkinType } from "src/API/enums/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: API.SKIN })
export class Skin {
    @PrimaryGeneratedColumn()
    Id: number;

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
}
