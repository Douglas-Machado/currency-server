import { Request, Response } from "express";
import { ListCurrenciesService } from "./ListCurrenciesService";

export class ListCurrenciesController {
  constructor(
    private listCurrenciesRepository: ListCurrenciesService
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try{
      const result = await this.listCurrenciesRepository.execute()
  
      return response.json(result)
    }catch(e: any){
      return response.status(e.response.status).send({error: e.message})
    }
  }
}