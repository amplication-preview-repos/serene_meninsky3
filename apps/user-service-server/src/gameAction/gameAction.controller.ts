import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameActionService } from "./gameAction.service";
import { GameActionControllerBase } from "./base/gameAction.controller.base";

@swagger.ApiTags("gameActions")
@common.Controller("gameActions")
export class GameActionController extends GameActionControllerBase {
  constructor(
    protected readonly service: GameActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
