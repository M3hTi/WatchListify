const key = import.meta.env.VITE_API_KEY;
console.log(key);
const omdbApi = import.meta.env.VITE_OMDB_API_KEY;
const initialMovieState = {
  movies: [],
  isLoading: false,
  selectedMovie: null,
};

function movieReducer(state = initialMovieState, action) {
  switch (action.type) {
    case "movie/loading":
      return { ...state, isLoading: true, selectedMovie: null };
    case "movie/dataReceived":
      return { ...state, movies: action.payload, isLoading: false };
    case "movie/getDetail":
      return { ...state, selectedMovie: action.payload, isLoading: false };
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

export function getDetail(movieObj) {
  return async function movieDetail(dispatch, getState) {
    const { title, release_date: date } = movieObj;
    dispatch({ type: "movie/loading" });
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${omdbApi}&t=${title}&y=${
        date.split("-")[0]
      }&type=movie`
    );
    const data = await res.json();
    // console.log(data);
    dispatch({ type: "movie/getDetail", payload: data });
  };
}

export default movieReducer;
