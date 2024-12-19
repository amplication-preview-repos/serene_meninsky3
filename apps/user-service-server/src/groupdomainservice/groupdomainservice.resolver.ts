import * as graphql from "@nestjs/graphql";
import { GroupDomainServiceService } from "./groupdomainservice.service";

export class GroupDomainServiceResolver {
  constructor(protected readonly service: GroupDomainServiceService) {}
}
