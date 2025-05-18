import axios from "axios";

export async function postEncurtadorUrl (uri: string) {
  try {
    const response = await axios.post(`http://localhost:8081/encurtar`,{
      urlLong:uri
    });       
    console.info('Criado com sucesso:', response.data);  
    return "Nova Url Gerada Com Sucesso! 👑";
  } catch (error) {
    console.error("Erro ao criar a url: ", error);    
    return "Ocorreu Um Erro Ao Gerar a Url";
  }
}