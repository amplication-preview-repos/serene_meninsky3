import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerGroupServiceBase } from "./base/playerGroup.service.base";

@Injectable()
export class PlayerGroupService extends PlayerGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
