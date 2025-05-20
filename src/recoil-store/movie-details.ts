import { atom } from 'recoil';
import { MovieDataType } from '../assets/data';

export const movieDetals = atom({
  key: 'movie_details',
  default: {} as MovieDataType,
});