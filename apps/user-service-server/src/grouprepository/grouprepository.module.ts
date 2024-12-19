import { Module } from "@nestjs/common";
import { GroupRepositoryService } from "./grouprepository.service";
import { GroupRepositoryController } from "./grouprepository.controller";
import { GroupRepositoryResolver } from "./grouprepository.resolver";

@Module({
  controllers: [GroupRepositoryController],
  providers: [GroupRepositoryService, GroupRepositoryResolver],
  exports: [GroupRepositoryService],
})
export class GroupRepositoryModule {}
