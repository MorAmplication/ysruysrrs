import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { DaniInfo } from "./DaniInfo";

@Resolver(DaniInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => DaniInfo)
  async login(@Args() args: LoginArgs): Promise<DaniInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => DaniInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async daniInfo(@UserData() entityInfo: DaniInfo): Promise<DaniInfo> {
    return entityInfo;
  }
}
