import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GroupModuleService } from "./groupmodule.service";

@swagger.ApiTags("groupModules")
@common.Controller("groupModules")
export class GroupModuleController {
  constructor(protected readonly service: GroupModuleService) {}
}
