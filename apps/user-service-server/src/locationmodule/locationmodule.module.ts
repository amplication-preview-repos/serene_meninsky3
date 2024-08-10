import { Module } from "@nestjs/common";
import { LocationModuleService } from "./locationmodule.service";
import { LocationModuleController } from "./locationmodule.controller";
import { LocationModuleResolver } from "./locationmodule.resolver";

@Module({
  controllers: [LocationModuleController],
  providers: [LocationModuleService, LocationModuleResolver],
  exports: [LocationModuleService],
})
export class LocationModuleModule {}
