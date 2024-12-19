import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LocationRepositoryService } from "./locationrepository.service";

@swagger.ApiTags("locationRepositories")
@common.Controller("locationRepositories")
export class LocationRepositoryController {
  constructor(protected readonly service: LocationRepositoryService) {}
}
