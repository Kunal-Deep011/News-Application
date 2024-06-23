
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/*import axios from 'axios';*/

 /* const API_KEY = '9602a2f2011c4c608e18f3f59a6557b5';*/
 const API_KEY = '3ce542c9a605408d8a6cf2952c4336c8';
 /*const API_KEY = 'af5b2c0b030e4ece8c5aa3bb00ec4019';*/
 /*const PAGE_SIZE = 10;*/
  


export const fetchNews = createAsyncThunk('news/fetchNews', async ({ keyword}) => {
 /* const params = {
    q: keyword,
    page: page,
    pageSize: 10, // number of articles per page
    apiKey: API_KEY
  };*/

  /*const response = await axios.get(`https://newsapi.org/v2/everything?`, {params});
  console.log("data", response.data.articles);
  return {
    articles: response.data.articles,
    totalResults: response.data.totalResults,
  };*/

  const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`);
  if(!response.ok){
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
    return {
      articles: data.articles,
      totalResults: data.totalResults,
    };
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    totalResults: 0,
   /* currentPage: 1,*/
  },
  /*reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },*/
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = newsSlice.actions;

export default newsSlice.reducer;
