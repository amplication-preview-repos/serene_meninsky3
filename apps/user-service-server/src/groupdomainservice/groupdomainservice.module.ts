import { Module } from "@nestjs/common";
import { GroupDomainServiceService } from "./groupdomainservice.service";
import { GroupDomainServiceController } from "./groupdomainservice.controller";
import { GroupDomainServiceResolver } from "./groupdomainservice.resolver";

@Module({
  controllers: [GroupDomainServiceController],
  providers: [GroupDomainServiceService, GroupDomainServiceResolver],
  exports: [GroupDomainServiceService],
})
export class GroupDomainServiceModule {}
