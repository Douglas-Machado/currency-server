import axios from "axios";

export class ListCurrenciesService{
  async execute(){
    try{
      const response = await axios.get(
        `${process.env.URL}${process.env.LIST_QUERY}${process.env.API_KEY}`
      )
      return response.data
    }catch(error){
      throw error
    }
  }
}