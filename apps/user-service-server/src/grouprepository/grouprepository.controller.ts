import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GroupRepositoryService } from "./grouprepository.service";

@swagger.ApiTags("groupRepositories")
@common.Controller("groupRepositories")
export class GroupRepositoryController {
  constructor(protected readonly service: GroupRepositoryService) {}
}
