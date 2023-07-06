import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DaniService } from "./dani.service";
import { DaniControllerBase } from "./base/dani.controller.base";

@swagger.ApiTags("danis")
@common.Controller("danis")
export class DaniController extends DaniControllerBase {
  constructor(
    protected readonly service: DaniService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
