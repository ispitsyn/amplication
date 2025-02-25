/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSkillProficiency } from "./EnumSkillProficiency";
import { EnumSkillSkillProficiency } from "./EnumSkillSkillProficiency";

@ObjectType()
class Skill {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSkillProficiency,
  })
  @IsEnum(EnumSkillProficiency)
  @IsOptional()
  @Field(() => EnumSkillProficiency, {
    nullable: true,
  })
  proficiency?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skillName!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSkillSkillProficiency,
  })
  @IsEnum(EnumSkillSkillProficiency)
  @IsOptional()
  @Field(() => EnumSkillSkillProficiency, {
    nullable: true,
  })
  skillProficiency?: "Option1" | null;
}

export { Skill as Skill };
