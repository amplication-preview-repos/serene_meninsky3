import { Module } from "@nestjs/common";
import { PlayerDomainServiceService } from "./playerdomainservice.service";
import { PlayerDomainServiceController } from "./playerdomainservice.controller";
import { PlayerDomainServiceResolver } from "./playerdomainservice.resolver";

@Module({
  controllers: [PlayerDomainServiceController],
  providers: [PlayerDomainServiceService, PlayerDomainServiceResolver],
  exports: [PlayerDomainServiceService],
})
export class PlayerDomainServiceModule {}
