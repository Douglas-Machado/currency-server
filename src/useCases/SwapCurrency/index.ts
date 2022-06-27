import { SwapController } from "./SwapController";
import { SwapService } from "./SwapService";

const swapService = new SwapService

export const swapController = new SwapController(
  swapService
)