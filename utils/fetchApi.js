import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2759f2579emsheff93a3f1206101p1ce8bejsn7600d5d5890c' ,
    },
  });
    
  return data;
}