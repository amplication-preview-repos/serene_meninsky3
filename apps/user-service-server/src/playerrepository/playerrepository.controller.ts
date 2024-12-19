import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlayerRepositoryService } from "./playerrepository.service";

@swagger.ApiTags("playerRepositories")
@common.Controller("playerRepositories")
export class PlayerRepositoryController {
  constructor(protected readonly service: PlayerRepositoryService) {}
}
