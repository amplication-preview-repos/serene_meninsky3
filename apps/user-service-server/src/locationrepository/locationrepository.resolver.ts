import * as graphql from "@nestjs/graphql";
import { LocationRepositoryService } from "./locationrepository.service";

export class LocationRepositoryResolver {
  constructor(protected readonly service: LocationRepositoryService) {}
}
