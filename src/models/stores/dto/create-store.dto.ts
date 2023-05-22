import { Trim } from 'class-sanitizer';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateStoreDto {
  @Trim()
  @IsString()
  @MinLength(8)
  public readonly name: string;

  @IsString()
  @MinLength(8)
  @IsOptional()
  public readonly description: string;
}
