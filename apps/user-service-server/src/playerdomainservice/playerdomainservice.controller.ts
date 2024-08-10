import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlayerDomainServiceService } from "./playerdomainservice.service";

@swagger.ApiTags("playerDomainServices")
@common.Controller("playerDomainServices")
export class PlayerDomainServiceController {
  constructor(protected readonly service: PlayerDomainServiceService) {}
}
