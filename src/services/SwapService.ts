import axios from "axios"
import "dotenv/config"

interface IParams {
  from: String,
  to: String,
  amount?: number
}

export class SwapService {
  async execute({from, to, amount}: IParams){
    if(!from || !to) throw new Error("missing params")
    try{
      const response = await axios.get(
        `https://free.currconv.com/api/v7/convert${from}_${to}&compact=ultra&apiKey=${process.env.API_KEY}`
      )
      if(Object.keys(response.data).length === 0) throw new Error("something went wrong")
      if(response.status !== 200) throw new Error("something went wrong")
      const parsedValues: any = Object.values(response.data)[0]
      if(amount) {
        const result = amount * parsedValues
        if(isNaN(result)) throw new Error("amount must be an integer")
        return result.toFixed(2)
      }
      return parsedValues.toFixed(2)
    }catch(e){
      throw(e)
    }
  }
}