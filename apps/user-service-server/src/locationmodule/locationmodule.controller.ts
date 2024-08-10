import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LocationModuleService } from "./locationmodule.service";

@swagger.ApiTags("locationModules")
@common.Controller("locationModules")
export class LocationModuleController {
  constructor(protected readonly service: LocationModuleService) {}
}
