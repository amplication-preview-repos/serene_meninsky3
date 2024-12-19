import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GameActionModuleService } from "./gameactionmodule.service";
import { GameActionDto } from "../gameActionModule/GameActionDto";

@swagger.ApiTags("gameActionModules")
@common.Controller("gameActionModules")
export class GameActionModuleController {
  constructor(protected readonly service: GameActionModuleService) {}

  @common.Post("/submit-action")
  @swagger.ApiOkResponse({
    type: GameActionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitGameAction(
    @common.Body()
    body: GameActionDto
  ): Promise<GameActionDto> {
        return this.service.SubmitGameAction(body);
      }
}
