import { Module } from "@nestjs/common";
import { PlayerModuleService } from "./playermodule.service";
import { PlayerModuleController } from "./playermodule.controller";
import { PlayerModuleResolver } from "./playermodule.resolver";

@Module({
  controllers: [PlayerModuleController],
  providers: [PlayerModuleService, PlayerModuleResolver],
  exports: [PlayerModuleService],
})
export class PlayerModuleModule {}
