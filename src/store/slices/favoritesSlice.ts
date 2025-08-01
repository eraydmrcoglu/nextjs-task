import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesState = {
  ids: number[];
};

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const index = state.ids.indexOf(action.payload);
      if (index >= 0) {
        state.ids.splice(index, 1);
      } else {
        state.ids.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
