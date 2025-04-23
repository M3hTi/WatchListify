import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movies/MovieSlice";
import seriesReducer from "./features/series/SeriesSlice";

const store = configureStore({
  reducer: {
    moviesState: movieReducer,
    seriesState: seriesReducer,
  },
});

export default store;
