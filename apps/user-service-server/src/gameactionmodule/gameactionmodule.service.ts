import { Injectable } from "@nestjs/common";
import { GameActionDto } from "../gameActionModule/GameActionDto";

@Injectable()
export class GameActionModuleService {
  constructor() {}
  async SubmitGameAction(args: GameActionDto): Promise<GameActionDto> {
    throw new Error("Not implemented");
  }
}
