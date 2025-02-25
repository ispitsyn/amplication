/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsOptional, IsEnum } from "class-validator";
import { EnumSkillProficiency } from "./EnumSkillProficiency";
import { EnumSkillSkillProficiency } from "./EnumSkillSkillProficiency";

@InputType()
class SkillCreateInput {
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
  name?: string | null;

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
  skillName?: string | null;

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

export { SkillCreateInput as SkillCreateInput };
