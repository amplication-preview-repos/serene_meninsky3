import * as graphql from "@nestjs/graphql";
import { PlayerDomainServiceService } from "./playerdomainservice.service";

export class PlayerDomainServiceResolver {
  constructor(protected readonly service: PlayerDomainServiceService) {}
}
