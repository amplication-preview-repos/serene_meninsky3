import * as graphql from "@nestjs/graphql";
import { GameActionDto } from "../gameActionModule/GameActionDto";
import { GameActionModuleService } from "./gameactionmodule.service";

export class GameActionModuleResolver {
  constructor(protected readonly service: GameActionModuleService) {}

  @graphql.Mutation(() => GameActionDto)
  async SubmitGameAction(
    @graphql.Args()
    args: GameActionDto
  ): Promise<GameActionDto> {
    return this.service.SubmitGameAction(args);
  }
}
