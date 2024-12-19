import { Module } from "@nestjs/common";
import { GroupModuleService } from "./groupmodule.service";
import { GroupModuleController } from "./groupmodule.controller";
import { GroupModuleResolver } from "./groupmodule.resolver";

@Module({
  controllers: [GroupModuleController],
  providers: [GroupModuleService, GroupModuleResolver],
  exports: [GroupModuleService],
})
export class GroupModuleModule {}
