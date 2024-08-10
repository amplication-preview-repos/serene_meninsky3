import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerGroupModuleBase } from "./base/playerGroup.module.base";
import { PlayerGroupService } from "./playerGroup.service";
import { PlayerGroupController } from "./playerGroup.controller";
import { PlayerGroupResolver } from "./playerGroup.resolver";

@Module({
  imports: [PlayerGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerGroupController],
  providers: [PlayerGroupService, PlayerGroupResolver],
  exports: [PlayerGroupService],
})
export class PlayerGroupModule {}
