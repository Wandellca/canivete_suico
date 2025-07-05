import axios from "axios";

export async function getUrlEncurta (id: string) {
  return await axios.get(`https://localhost:7143/Post/${id}`,{    
      headers: {
          "Content-Type": "application/json"
      }
    }).then(response => {      
      return response.data.NovoTexto;
    })
    .catch(error => {
        console.error("Erro ao enviar o post:", error);
        throw error;
    });    
}