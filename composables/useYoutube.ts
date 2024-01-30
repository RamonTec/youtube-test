import axios from 'axios';

export const useYoutube = () => {
  const apiKey = process.env.YOUTUBE_API_KEY;

  async function getAuthInstance() {
    try {
      // Realizar la solicitud a la API de YouTube
      const response = await axios.get(
        `https://www.googleapis.com/auth/youtube.force-ssl`
      );

      // Devolver los resultados de la búsqueda
      console.log('-- auth instance:', response);
      return response
    } catch (error) {
      console.error('Error get auth instance:', error);
      throw error;
    }
  }


  async function getVideos(keyword: any, maxResults: number) {
    try {
      // Realizar la solicitud a la API de YouTube
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0KaHGWyysc__9jn8MP9AhLaLEIFADnFg=${keyword}&part=snippet,id&order=date&maxResults=${maxResults}`
      );

      return response.data.items;
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw error;
    }
  }

  return {
    getAuthInstance,
    getVideos,
  };
};