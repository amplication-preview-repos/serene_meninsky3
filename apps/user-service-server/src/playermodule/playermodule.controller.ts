import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlayerModuleService } from "./playermodule.service";

@swagger.ApiTags("playerModules")
@common.Controller("playerModules")
export class PlayerModuleController {
  constructor(protected readonly service: PlayerModuleService) {}
}
