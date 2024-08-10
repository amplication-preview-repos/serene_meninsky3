import { Module } from "@nestjs/common";
import { PlayerRepositoryService } from "./playerrepository.service";
import { PlayerRepositoryController } from "./playerrepository.controller";
import { PlayerRepositoryResolver } from "./playerrepository.resolver";

@Module({
  controllers: [PlayerRepositoryController],
  providers: [PlayerRepositoryService, PlayerRepositoryResolver],
  exports: [PlayerRepositoryService],
})
export class PlayerRepositoryModule {}
