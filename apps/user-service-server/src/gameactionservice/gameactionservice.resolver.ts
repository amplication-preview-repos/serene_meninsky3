import * as graphql from "@nestjs/graphql";
import { GameActionDto } from "../gameActionModule/GameActionDto";
import { GameActionServiceService } from "./gameactionservice.service";

export class GameActionServiceResolver {
  constructor(protected readonly service: GameActionServiceService) {}

  @graphql.Mutation(() => GameActionDto)
  async HandleGameAction(
    @graphql.Args()
    args: GameActionDto
  ): Promise<GameActionDto> {
    return this.service.HandleGameAction(args);
  }
}
