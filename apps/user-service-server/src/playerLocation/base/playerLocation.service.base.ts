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
  PlayerLocation as PrismaPlayerLocation,
  Location as PrismaLocation,
  Player as PrismaPlayer,
} from "@prisma/client";

export class PlayerLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PlayerLocationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.playerLocation.count(args);
  }

  async playerLocations(
    args: Prisma.PlayerLocationFindManyArgs
  ): Promise<PrismaPlayerLocation[]> {
    return this.prisma.playerLocation.findMany(args);
  }
  async playerLocation(
    args: Prisma.PlayerLocationFindUniqueArgs
  ): Promise<PrismaPlayerLocation | null> {
    return this.prisma.playerLocation.findUnique(args);
  }
  async createPlayerLocation(
    args: Prisma.PlayerLocationCreateArgs
  ): Promise<PrismaPlayerLocation> {
    return this.prisma.playerLocation.create(args);
  }
  async updatePlayerLocation(
    args: Prisma.PlayerLocationUpdateArgs
  ): Promise<PrismaPlayerLocation> {
    return this.prisma.playerLocation.update(args);
  }
  async deletePlayerLocation(
    args: Prisma.PlayerLocationDeleteArgs
  ): Promise<PrismaPlayerLocation> {
    return this.prisma.playerLocation.delete(args);
  }

  async getLocation(parentId: string): Promise<PrismaLocation | null> {
    return this.prisma.playerLocation
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.playerLocation
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
