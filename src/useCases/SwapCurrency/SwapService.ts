import axios from "axios"
import "dotenv/config"
import { amount, value, SwapData, SwapRepository } from "./SwapRepository"

export class SwapService implements SwapRepository {
  async execute({from, to, amount}: SwapData){
    if(!from || !to) throw new Error("missing params")
    try{
      const response = await axios.get(
        `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${process.env.API_KEY}`
      )
      if(Object.keys(response.data).length === 0) throw new Error("something went wrong")

      if(response.status !== 200) throw new Error("something went wrong")

      const value = Object.values<number>(response.data)[0]
      
      if(amount) {
        if(typeof(amount) === 'number') {
          const result = this.calculateValue(amount, value)
          return result.toFixed(2)
        }
      }
      return value.toFixed(2)
    }catch(e){
      throw(e)
    }
  }

  calculateValue(amount: amount, value: value){
    return amount * value
  }
}