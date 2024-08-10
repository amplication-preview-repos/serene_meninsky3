import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerLocationServiceBase } from "./base/playerLocation.service.base";

@Injectable()
export class PlayerLocationService extends PlayerLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
