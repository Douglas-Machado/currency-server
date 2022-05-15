import axios from "axios"
import "dotenv/config"

const url = "https://free.currconv.com/api/v7/convert?q="
const urlParam = "&compact=ultra&apiKey="

export class SwapService {
  async execute(from: string, to: string, amount: number){
    const response: any = await axios.get(
      `${url}${from}_${to}${urlParam}${process.env.API_KEY}`
    )
    const parsedValues:any = Object.values(response.data)[0]
    const result = amount * parsedValues
    return result
  }
}