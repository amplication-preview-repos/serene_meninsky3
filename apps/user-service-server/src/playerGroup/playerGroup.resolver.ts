import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerGroupResolverBase } from "./base/playerGroup.resolver.base";
import { PlayerGroup } from "./base/PlayerGroup";
import { PlayerGroupService } from "./playerGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerGroup)
export class PlayerGroupResolver extends PlayerGroupResolverBase {
  constructor(
    protected readonly service: PlayerGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
