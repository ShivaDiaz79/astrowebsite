import axios from 'axios';

export const getNews = async () => {
  const apiKey = 'b869ea1db5c64947985bee6f54847a29';
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const response = await axios.get(url);
  return response.data.articles;
}
