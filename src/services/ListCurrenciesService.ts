import axios from "axios";

export class ListCurrenciesService{
  async execute(){
    try{
      const response = await axios.get(
        `https://free.currconv.com/api/v7/currencies?apiKey=${process.env.API_KEY}`
      )
      return response.data
    }catch(error){
      throw error
    }
  }
}