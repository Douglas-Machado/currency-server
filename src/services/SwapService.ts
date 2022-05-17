import axios from "axios"
import "dotenv/config"

interface IParams {
  from: string,
  to: string,
  amount: number
}

const url = "https://free.currconv.com/api/v7/convert?q="
const urlParam = "&compact=ultra&apiKey="

export class SwapService {
  async execute({from, to, amount}: IParams){
    try{
      const response = await axios.get(
        `${url}${from}_${to}${urlParam}${process.env.API_KEY}`
      )
      const parsedValues: any = Object.values(response.data)[0]
      const result = amount * parsedValues
      return result
    }catch(e){
      console.log(e)
    }
  }
}