/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DaniWhereUniqueInput } from "./DaniWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DaniUpdateInput } from "./DaniUpdateInput";

@ArgsType()
class UpdateDaniArgs {
  @ApiProperty({
    required: true,
    type: () => DaniWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DaniWhereUniqueInput)
  @Field(() => DaniWhereUniqueInput, { nullable: false })
  where!: DaniWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DaniUpdateInput,
  })
  @ValidateNested()
  @Type(() => DaniUpdateInput)
  @Field(() => DaniUpdateInput, { nullable: false })
  data!: DaniUpdateInput;
}

export { UpdateDaniArgs as UpdateDaniArgs };
