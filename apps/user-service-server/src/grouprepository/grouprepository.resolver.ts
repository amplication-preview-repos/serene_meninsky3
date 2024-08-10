import * as graphql from "@nestjs/graphql";
import { GroupRepositoryService } from "./grouprepository.service";

export class GroupRepositoryResolver {
  constructor(protected readonly service: GroupRepositoryService) {}
}
