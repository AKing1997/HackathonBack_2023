import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsNotEmpty, IsString, IsOptional, IsPositive, IsEnum } from "class-validator";
import { Color, SkinType } from "src/API/enums/enums";

function getEnumDescription(enumObject: Record<string, string>): string {
    return `Valores válidos: ${Object.values(enumObject).join(', ')}.`;
}

export class SkinDto {
    @ApiProperty({
        description: "El ID de la skin (opcional).",
        required: false,
    })
    @IsOptional()
    Id?: number;

    @ApiProperty({
        description: "El nombre de la skin.",
    })
    @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres." })
    @MaxLength(30, { message: "El nombre no puede tener más de 30 caracteres." })
    @IsNotEmpty({ message: "El nombre no puede estar vacío." })
    @IsString({ message: "El nombre debe ser una cadena de texto." })
    Nombre: string;

    @ApiProperty({
        description: "El precio de la skin.",
    })
    @IsPositive()
    Precio: number;

    @ApiProperty({
        description: `El color de la skin. ${getEnumDescription(Color)}`,
    })
    @IsEnum(Color)
    Color: Color;

    @ApiProperty({
        description: `El tipo de la skin. ${getEnumDescription(SkinType)}`,
    })
    @IsEnum(SkinType)
    Tipos: SkinType;
}