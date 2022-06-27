import { Request, Response } from "express";
import { SwapData } from "./SwapRepository";
import { SwapService } from "./SwapService";

export class SwapController {
  constructor(
    private swapRepository: SwapService
  ){}
  async handle(request: Request, response: Response) {
    const { from, to, amount }: SwapData = request.body;
    try{
      const result = await this.swapRepository.execute({from, to, amount})

      return response.json({value: result})
    }catch(e: any){
      return response.status(e.response.status).json({error: e.message})
    }
  }
}