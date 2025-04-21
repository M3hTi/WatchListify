const key = import.meta.env.VITE_API_KEY;
console.log(key);
const initialMovieState = {
  movies: [],
  isLoading: false,
};

function movieReducer(state = initialMovieState, action) {
  switch (action.type) {
    case "movie/loading":
      return { ...state, isLoading: true };
    case "movie/dataReceived":
      return { ...state, movies: action.payload, isLoading: false };
    default:
      return state;
  }
}

export function dataReceived() {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "movie/loading" });
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1
`
      );
      const data = await res.json();

      dispatch({ type: "movie/dataReceived", payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };
}

export default movieReducer;
