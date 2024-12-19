import * as graphql from "@nestjs/graphql";
import { LocationModuleService } from "./locationmodule.service";

export class LocationModuleResolver {
  constructor(protected readonly service: LocationModuleService) {}
}
