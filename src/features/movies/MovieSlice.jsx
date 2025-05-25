const key = import.meta.env.VITE_API_KEY;
console.log(key);
const omdbApi = import.meta.env.VITE_OMDB_API_KEY;
const initialMovieState = {
  movies: [],
  isLoading: false,
  selectedMovie: null,
  error: null,
};

function movieReducer(state = initialMovieState, action) {
  switch (action.type) {
    case "movie/loading":
      return { ...state, isLoading: true, selectedMovie: null, error: null };
    case "movie/dataReceived":
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
        error: null,
      };
    case "movie/getDetail":
      return {
        ...state,
        selectedMovie: action.payload,
        isLoading: false,
        error: null,
      };
    case "movie/searchMovie":
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
        error: null,
      };
    case "movie/error":
      return { ...state, error: action.payload, isLoading: false, movies: [] };
    default:
      return state;
  }
}

export function dataReceived() {
  return async function getMovies(dispatch, getState) {
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

export function getDetail(movieObj) {
  return async function movieDetail(dispatch, getState) {
    const { title, release_date: date } = movieObj;
    dispatch({ type: "movie/loading" });
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${omdbApi}&t=${title}&y=${
        date.split("-")[0]
      }&type=movie`
    );
    const data = await res.json();
    // console.log(data);
    dispatch({ type: "movie/getDetail", payload: data });
  };
}

export function searchMovie(query, signal) {
  return async function getMovie(dispatch, getState) {
    if (!query.trim()) {
      // If query is empty, fetch popular movies instead
      dispatch(dataReceived());
      return;
    }

    dispatch({ type: "movie/loading" });
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${omdbApi}&s=${query}&type=movie`,
        { signal }
      );
      const data = await res.json();
      console.log(data);

      if (data.Response === "False") {
        dispatch({
          type: "movie/error",
          payload: data.Error || "No movies found",
        });
        return;
      }

      dispatch({
        type: "movie/searchMovie",
        payload: data.Search,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "movie/error",
        payload: error.message || "An error occurred while searching",
      });
    }
  };
}

export default movieReducer;
