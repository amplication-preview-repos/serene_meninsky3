import { Module } from "@nestjs/common";
import { GameActionModuleService } from "./gameactionmodule.service";
import { GameActionModuleController } from "./gameactionmodule.controller";
import { GameActionModuleResolver } from "./gameactionmodule.resolver";

@Module({
  controllers: [GameActionModuleController],
  providers: [GameActionModuleService, GameActionModuleResolver],
  exports: [GameActionModuleService],
})
export class GameActionModuleModule {}
