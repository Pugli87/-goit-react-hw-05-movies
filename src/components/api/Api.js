import axios, { Axios } from "axios";
import Notiflix from "notiflix";

const API_KEY = 'c0ec3039a6ea9335ddc382eb1bd446f2';

export const fecthThemovieedbQuery = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/${id}'
    );
    
  } catch (error) {
    Notiflix.Notify.warning('Error fetching movie:', error);
    throw error;
    
  }
}