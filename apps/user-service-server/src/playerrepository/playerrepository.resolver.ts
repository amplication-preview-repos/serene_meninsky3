import * as graphql from "@nestjs/graphql";
import { PlayerRepositoryService } from "./playerrepository.service";

export class PlayerRepositoryResolver {
  constructor(protected readonly service: PlayerRepositoryService) {}
}
