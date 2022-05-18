import { Router } from "express";
import { ListCurrenciesController } from "./controllers/ListCurrenciesController";
import { SwapController } from "./controllers/SwapController";

const router = Router()

router.post('/swap', new SwapController().handle)
router.get('/currencies', new ListCurrenciesController().handle)

export { router }