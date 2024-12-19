import { Module } from "@nestjs/common";
import { LocationRepositoryService } from "./locationrepository.service";
import { LocationRepositoryController } from "./locationrepository.controller";
import { LocationRepositoryResolver } from "./locationrepository.resolver";

@Module({
  controllers: [LocationRepositoryController],
  providers: [LocationRepositoryService, LocationRepositoryResolver],
  exports: [LocationRepositoryService],
})
export class LocationRepositoryModule {}
