import * as graphql from "@nestjs/graphql";
import { GroupModuleService } from "./groupmodule.service";

export class GroupModuleResolver {
  constructor(protected readonly service: GroupModuleService) {}
}
