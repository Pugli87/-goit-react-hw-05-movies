
import axios from 'axios';
import Notiflix from "notiflix";

const API_KEY = 'c0ec3039a6ea9335ddc382eb1bd446f2';
const BASE_URL = 'https://api.themoviedb.org/3';
export const baseImgURL = "https://image.tmdb.org/t/p/w300/"
export const defaultImg = 'https://via.placeholder.com/300x450.png?text=Not+Found+Image';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    //return response.data.results;
    const limitedMovies = response.data.results.slice(0, 12);
    return limitedMovies;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.warning('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieById = async (movieId) => {
  try{
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    return response.data
  }catch(error){
    console.error(error);
    Notiflix.Notify.warning('Error fetching movie by ID:', error);
    throw error;
  }

};


