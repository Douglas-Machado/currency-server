import { Router } from "express";
import { listCurrenciesController } from "./useCases/ListCurrencies";
import { swapController } from "./useCases/SwapCurrency";

const router = Router()

router.get('/currencies', (request, response) => {
  return listCurrenciesController.handle(request, response)
})

router.post('/swap', (request, response) => {
  return swapController.handle(request, response)
})

router.get('/', (request, response) => {
  return response.json( {
    status: "OK"
  })
})

export { router }
