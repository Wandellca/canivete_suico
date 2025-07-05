import axios from "axios";

export async function postEncurtadorUrl (uri: string, onError?: (msg: string) => void): Promise<string>{
  return await axios.post(`http://localhost:8081/encurtar`,{
      urlLong:uri 
    },{
      headers: {
          "Content-Type": "application/json"
      }
    }).then(response => {      
      return response.data.urlEncurtada;
    })
    .catch(error => {       
        const msg = error.response?.data?.message || error.message || `Erro ${error.status || error}` 
        onError?.(msg)
        throw error;
    });    
}