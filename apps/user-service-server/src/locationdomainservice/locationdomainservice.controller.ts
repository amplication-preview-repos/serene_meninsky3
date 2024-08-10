import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LocationDomainServiceService } from "./locationdomainservice.service";

@swagger.ApiTags("locationDomainServices")
@common.Controller("locationDomainServices")
export class LocationDomainServiceController {
  constructor(protected readonly service: LocationDomainServiceService) {}
}
