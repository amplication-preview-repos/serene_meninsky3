/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GroupService } from "../group.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GroupCreateInput } from "./GroupCreateInput";
import { Group } from "./Group";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupWhereUniqueInput } from "./GroupWhereUniqueInput";
import { GroupUpdateInput } from "./GroupUpdateInput";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { PlayerGroupFindManyArgs } from "../../playerGroup/base/PlayerGroupFindManyArgs";
import { PlayerGroup } from "../../playerGroup/base/PlayerGroup";
import { PlayerGroupWhereUniqueInput } from "../../playerGroup/base/PlayerGroupWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GroupControllerBase {
  constructor(
    protected readonly service: GroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Group })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGroup(@common.Body() data: GroupCreateInput): Promise<Group> {
    return await this.service.createGroup({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Group] })
  @ApiNestedQuery(GroupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async groups(@common.Req() request: Request): Promise<Group[]> {
    const args = plainToClass(GroupFindManyArgs, request.query);
    return this.service.groups({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async group(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    const result = await this.service.group({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGroup(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() data: GroupUpdateInput
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGroup(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/locations")
  @ApiNestedQuery(LocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async findLocations(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Location[]> {
    const query = plainToClass(LocationFindManyArgs, request.query);
    const results = await this.service.findLocations(params.id, {
      ...query,
      select: {
        createdAt: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async connectLocations(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async updateLocations(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async disconnectLocations(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/playerGroups")
  @ApiNestedQuery(PlayerGroupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlayerGroup",
    action: "read",
    possession: "any",
  })
  async findPlayerGroups(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<PlayerGroup[]> {
    const query = plainToClass(PlayerGroupFindManyArgs, request.query);
    const results = await this.service.findPlayerGroups(params.id, {
      ...query,
      select: {
        createdAt: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/playerGroups")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async connectPlayerGroups(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: PlayerGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerGroups: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playerGroups")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async updatePlayerGroups(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: PlayerGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerGroups: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playerGroups")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async disconnectPlayerGroups(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: PlayerGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerGroups: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }
}
