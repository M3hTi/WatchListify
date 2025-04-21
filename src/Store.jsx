import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movies/MovieSlice";

const store = configureStore({
  reducer: {
    moviesState: movieReducer,
    // series: seriesReducer,
    // wishList: whishListReducer,
  },
});

export default store;
