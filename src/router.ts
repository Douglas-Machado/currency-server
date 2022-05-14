import { Router } from "express";
import { SwapController } from "./controllers/SwapController";

const router = Router()

router.post('/swap', new SwapController().handle)

export { router }