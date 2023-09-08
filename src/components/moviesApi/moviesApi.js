
import axios from 'axios';
import Notiflix from "notiflix";

const API_KEY = 'c0ec3039a6ea9335ddc382eb1bd446f2';
const BASE_URL = 'https://api.themoviedb.org/3';
export const baseImgURL = "https://image.tmdb.org/t/p/w300/"
export const defaultImg = 'https://via.placeholder.com/300x200/ccc/333?text=Not+Found+Image';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    //return response.data.results;
    const limitedMovies = response.data.results.slice(0, 20);
    return limitedMovies;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.warning('Error fetching movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const limitedMovies = response.data.results.slice(0, 20);
    return limitedMovies;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.warning('Error searching movies:', error);
    throw error;
  }
};

export const movieById = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data
  } catch (error) {
    console.log(error);
  }
} 

export const movieByCast = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?language=en-US?api_key=${API_KEY}`
    );
    return response.data
    console.log(response.data.cast);
  } catch (error) {
    console.log(error);
  }
} 