import axios from "axios";
import { ListCurrency } from "./ListCurrenciesRepository";

export class ListCurrenciesService implements ListCurrency{
  async execute(){
    try{
      const result = await axios.get(
        `https://free.currconv.com/api/v7/currencies?apiKey=${process.env.API_KEY}`
      )
      return result.data
    }catch(error){
      throw error
    }
  }
}