import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GameActionServiceService } from "./gameactionservice.service";
import { GameActionDto } from "../gameActionModule/GameActionDto";

@swagger.ApiTags("gameActionServices")
@common.Controller("gameActionServices")
export class GameActionServiceController {
  constructor(protected readonly service: GameActionServiceService) {}

  @common.Post("/handle-action")
  @swagger.ApiOkResponse({
    type: GameActionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleGameAction(
    @common.Body()
    body: GameActionDto
  ): Promise<GameActionDto> {
        return this.service.HandleGameAction(body);
      }
}
