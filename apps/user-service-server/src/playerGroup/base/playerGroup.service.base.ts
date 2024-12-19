/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PlayerGroup as PrismaPlayerGroup,
  Group as PrismaGroup,
  Player as PrismaPlayer,
} from "@prisma/client";

export class PlayerGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PlayerGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.playerGroup.count(args);
  }

  async playerGroups(
    args: Prisma.PlayerGroupFindManyArgs
  ): Promise<PrismaPlayerGroup[]> {
    return this.prisma.playerGroup.findMany(args);
  }
  async playerGroup(
    args: Prisma.PlayerGroupFindUniqueArgs
  ): Promise<PrismaPlayerGroup | null> {
    return this.prisma.playerGroup.findUnique(args);
  }
  async createPlayerGroup(
    args: Prisma.PlayerGroupCreateArgs
  ): Promise<PrismaPlayerGroup> {
    return this.prisma.playerGroup.create(args);
  }
  async updatePlayerGroup(
    args: Prisma.PlayerGroupUpdateArgs
  ): Promise<PrismaPlayerGroup> {
    return this.prisma.playerGroup.update(args);
  }
  async deletePlayerGroup(
    args: Prisma.PlayerGroupDeleteArgs
  ): Promise<PrismaPlayerGroup> {
    return this.prisma.playerGroup.delete(args);
  }

  async getGroup(parentId: string): Promise<PrismaGroup | null> {
    return this.prisma.playerGroup
      .findUnique({
        where: { id: parentId },
      })
      .group();
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.playerGroup
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
