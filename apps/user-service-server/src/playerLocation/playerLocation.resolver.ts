import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerLocationResolverBase } from "./base/playerLocation.resolver.base";
import { PlayerLocation } from "./base/PlayerLocation";
import { PlayerLocationService } from "./playerLocation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerLocation)
export class PlayerLocationResolver extends PlayerLocationResolverBase {
  constructor(
    protected readonly service: PlayerLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
