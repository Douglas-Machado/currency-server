import { Request, Response } from "express";
import { SwapService } from "../services/SwapService";

export class SwapController {
  async handle(req: Request, res: Response) {
    try{
      const { from, to, amount } = req.body;

      const service = new SwapService()
      const result = await service.execute({from, to, amount})

      return res.json({value: result})
    }catch(e: any){
      return res.status(400).json({error: e.message})
    }
  }
}