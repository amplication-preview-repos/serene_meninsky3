import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerGroupService } from "./playerGroup.service";
import { PlayerGroupControllerBase } from "./base/playerGroup.controller.base";

@swagger.ApiTags("playerGroups")
@common.Controller("playerGroups")
export class PlayerGroupController extends PlayerGroupControllerBase {
  constructor(
    protected readonly service: PlayerGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
