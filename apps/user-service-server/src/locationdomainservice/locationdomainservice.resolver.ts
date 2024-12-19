import * as graphql from "@nestjs/graphql";
import { LocationDomainServiceService } from "./locationdomainservice.service";

export class LocationDomainServiceResolver {
  constructor(protected readonly service: LocationDomainServiceService) {}
}
