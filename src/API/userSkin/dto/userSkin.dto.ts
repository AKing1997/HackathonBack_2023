import { IsInt, IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Color, SkinType } from 'src/API/enums/enums';
export class UserSkinDto {
  @ApiProperty({
    description: "El ID de la userSkin (opcional).",
    required: false,
  })
  @IsOptional()
  Id?: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  SkinId: number;

  @ApiProperty({ example: 'Golden Godsend' })
  @IsString()
  Nombre: string;

  @ApiProperty({ example: 2250 })
  @IsNumber()
  Precio: number;

  @ApiProperty({ example: Color.GOLD })
  @IsEnum(Color)
  Color: Color;

  @ApiProperty({ example: SkinType.LEGENDARY })
  @IsEnum(SkinType)
  Tipos: SkinType;
}