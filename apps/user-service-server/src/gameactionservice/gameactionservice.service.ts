import { Injectable } from "@nestjs/common";
import { GameActionDto } from "../gameActionModule/GameActionDto";

@Injectable()
export class GameActionServiceService {
  constructor() {}
  async HandleGameAction(args: GameActionDto): Promise<GameActionDto> {
    throw new Error("Not implemented");
  }
}
