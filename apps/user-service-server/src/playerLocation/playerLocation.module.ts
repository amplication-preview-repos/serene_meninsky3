import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerLocationModuleBase } from "./base/playerLocation.module.base";
import { PlayerLocationService } from "./playerLocation.service";
import { PlayerLocationController } from "./playerLocation.controller";
import { PlayerLocationResolver } from "./playerLocation.resolver";

@Module({
  imports: [PlayerLocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerLocationController],
  providers: [PlayerLocationService, PlayerLocationResolver],
  exports: [PlayerLocationService],
})
export class PlayerLocationModule {}
