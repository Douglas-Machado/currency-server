import { Request, Response } from "express";
import { ListCurrenciesService } from "../services/ListCurrenciesService";

export class ListCurrenciesController {
  async handle(req: Request, res: Response) {
    try{
      const service = new ListCurrenciesService()
      const result = await service.execute()
  
      return res.json(result)
    }catch{
      return res.status(400).send({error: "Something went wrong"})
    }
  }
}