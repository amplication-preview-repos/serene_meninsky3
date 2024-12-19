import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GroupDomainServiceService } from "./groupdomainservice.service";

@swagger.ApiTags("groupDomainServices")
@common.Controller("groupDomainServices")
export class GroupDomainServiceController {
  constructor(protected readonly service: GroupDomainServiceService) {}
}
