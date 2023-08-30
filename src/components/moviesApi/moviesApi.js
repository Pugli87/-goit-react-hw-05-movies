
import axios from 'axios';
import Notiflix from "notiflix";

const API_KEY = 'c0ec3039a6ea9335ddc382eb1bd446f2';
const BASE_URL = 'https://api.themoviedb.org/3';
export const baseImgURL = "https://image.tmdb.org/t/p/w300/"
export const defaultImg = 'https://via.placeholder.com/300x450.png?text=Not+Found+Image';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.warning('Error fetching movies:', error);
    throw error;
  }
};
