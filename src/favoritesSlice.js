
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: JSON.parse(localStorage.getItem('favorites')) || [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
    removeFavorite: (state, action) => {
      const index = state.findIndex((article) => article.url === action.payload.url);
      state.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
