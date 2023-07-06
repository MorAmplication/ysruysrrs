import { Field, ObjectType } from "@nestjs/graphql";
import { Dani } from "../dani/base/Dani";

@ObjectType()
export class DaniInfo implements Partial<Dani> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
