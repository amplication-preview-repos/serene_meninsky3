import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameActionModuleBase } from "./base/gameAction.module.base";
import { GameActionService } from "./gameAction.service";
import { GameActionController } from "./gameAction.controller";
import { GameActionResolver } from "./gameAction.resolver";

@Module({
  imports: [GameActionModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameActionController],
  providers: [GameActionService, GameActionResolver],
  exports: [GameActionService],
})
export class GameActionModule {}
