import * as graphql from "@nestjs/graphql";
import { PlayerModuleService } from "./playermodule.service";

export class PlayerModuleResolver {
  constructor(protected readonly service: PlayerModuleService) {}
}
