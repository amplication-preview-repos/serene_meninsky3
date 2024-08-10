import { Module } from "@nestjs/common";
import { LocationDomainServiceService } from "./locationdomainservice.service";
import { LocationDomainServiceController } from "./locationdomainservice.controller";
import { LocationDomainServiceResolver } from "./locationdomainservice.resolver";

@Module({
  controllers: [LocationDomainServiceController],
  providers: [LocationDomainServiceService, LocationDomainServiceResolver],
  exports: [LocationDomainServiceService],
})
export class LocationDomainServiceModule {}
