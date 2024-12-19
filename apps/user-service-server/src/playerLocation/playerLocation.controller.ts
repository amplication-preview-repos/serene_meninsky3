import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerLocationService } from "./playerLocation.service";
import { PlayerLocationControllerBase } from "./base/playerLocation.controller.base";

@swagger.ApiTags("playerLocations")
@common.Controller("playerLocations")
export class PlayerLocationController extends PlayerLocationControllerBase {
  constructor(
    protected readonly service: PlayerLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
