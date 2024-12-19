import { Module } from "@nestjs/common";
import { GameActionServiceService } from "./gameactionservice.service";
import { GameActionServiceController } from "./gameactionservice.controller";
import { GameActionServiceResolver } from "./gameactionservice.resolver";

@Module({
  controllers: [GameActionServiceController],
  providers: [GameActionServiceService, GameActionServiceResolver],
  exports: [GameActionServiceService],
})
export class GameActionServiceModule {}
