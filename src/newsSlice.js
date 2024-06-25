
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 /*const API_KEY = '8b513623293d75db8f4106a575ce69ec'; //GNEWS.IO TOKEN KEY*/
 const API_KEY = 'f774be93784035acc13cc1c2a13d46b5'; //GNEWS.IO TOKEN KEY

export const fetchNews = createAsyncThunk('news/fetchNews', async ({ example, page}) => {
  const params = {
    q: example,
    page: page,
    apikey: API_KEY,
    lang: 'en'
  };

  const response = await axios.get(`https://gnews.io/api/v4/search?country=in`, {params});
  console.log("data", response.data.articles);
  return {
    articles: response.data.articles
  };
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    totalPages: 4,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = newsSlice.actions;

export default newsSlice.reducer;
