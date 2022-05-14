import axios from "axios"
import "dotenv/config"

// interface IParams {
//   from: String;
//   to: String;
//   amount: Number
// }

// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=d70140fd3dc3f3227cd3

export class SwapService {
  async execute(from: string, to: string, amount: string){
    // console.log(process.env.FREE_URL)
    const result = await axios.get(`${process.env.FREE_URL}BRL_USD
    ${process.env.URL_PARAMS}${process.env.API_KEY}`)
    console.log(result.data)
  }
}