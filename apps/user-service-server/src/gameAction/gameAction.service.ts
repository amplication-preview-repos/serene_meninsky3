import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameActionServiceBase } from "./base/gameAction.service.base";

@Injectable()
export class GameActionService extends GameActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
