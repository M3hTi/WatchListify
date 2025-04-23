const tmdbnKey = import.meta.env.VITE_API_KEY;
const omdbApi = import.meta.env.VITE_OMDB_API_KEY;

const initialStateSeries = {
  series: [],
  isLoading: false,
  selectedSerie: null,
};

function seriesReducer(state = initialStateSeries, action) {
  switch (action.type) {
    case "series/loading":
      return { ...state, isLoading: true, selectedSerie: null };
    case "series/dataReceived":
      return { ...state, isLoading: false, series: action.payload };
    case "series/getSerie":
      return { ...state, selectedSerie: action.payload, isLoading: false };
    default:
      return state;
  }
}

export function dataReceived() {
  return async function getSeries(dispatch, getState) {
    dispatch({ type: "series/loading" });
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${tmdbnKey}&language=en-US&page=1`
    );
    const data = await res.json();
    dispatch({ type: "series/dataReceived", payload: data.results });
  };
}

export function getSerie(serieObj) {
  return async function getDatil(dispatch, getState) {
    const { name: title, first_air_date: date } = serieObj;
    dispatch({ type: "series/loading" });
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${omdbApi}&t=${title}&y=${
        date.split("-")[0]
      }&type=series`
    );
    const data = await res.json();
    dispatch({ type: "series/getSerie", payload: data });
  };
}

export default seriesReducer;
