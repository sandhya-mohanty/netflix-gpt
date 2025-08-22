import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcommingMovies: null,
    trandingMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies= action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addNowUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
},
addNowTendingMovies:(state,action)=>{
state.trandingMovies = action.payload;
}
  }
})
export const { addNowPlayingMovies,addTrailerVideo,addNowPopularMovies,addNowUpcommingMovies,addNowTendingMovies   } = moviesSlice.actions;
export default moviesSlice.reducer;