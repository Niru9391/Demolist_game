import axios from 'axios';

const API_KEY = 'a6969c6f83774c48bade07b4dffad9dc';
const BASE_URL = 'https://api.rawg.io/api/'; 


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});


const getPopularGames = () => axiosInstance.get('games');
const getMovieDetails = (id) => axiosInstance.get(`games/${id}/movies`);
const getGameListByGenreId = (id) => axiosInstance.get('games', {
  params: {
    genres: id,
  },
});

export default {
  getPopularGames,
  getMovieDetails,
  getGameListByGenreId,
};
