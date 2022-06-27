import { ListCurrenciesController } from "./ListCurrenciesController";
import { ListCurrenciesService } from "./ListCurrenciesService";

const listCurrenciesService = new ListCurrenciesService

export const listCurrenciesController = new ListCurrenciesController(
  listCurrenciesService
)