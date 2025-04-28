const tmdbnKey = import.meta.env.VITE_API_KEY;
const omdbApi = import.meta.env.VITE_OMDB_API_KEY;

const initialStateSeries = {
  series: [],
  isLoading: false,
  selectedSerie: null,
  error: "",
};

function seriesReducer(state = initialStateSeries, action) {
  switch (action.type) {
    case "series/loading":
      return { ...state, isLoading: true, selectedSerie: null, error: "" };
    case "series/dataReceived":
      return { ...state, isLoading: false, series: action.payload };
    case "series/getSerie":
      return {
        ...state,
        selectedSerie: action.payload,
        isLoading: false,
        error: "",
      };
    case "series/searchSeries":
      return { ...state, series: action.payload, isLoading: false };
    case "series/error":
      return {
        ...state,
        series: [],
        isLoading: false,
        selectedSerie: null,
        error: action.payload,
      };
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

export function searchSeries(query, signal) {
  return async function serach(dispatch, getState) {
    try {
      dispatch({ type: "series/loading" });
      if (!query) {
        dispatch(dataReceived());
        return;
      }
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${omdbApi}&s=${query}&type=series`,
        { signal }
      );
      if (!res.ok) throw new Error("Error occurred while fetching data");

      const data = await res.json();

      // console.log(data);

      if (data.Response === "True") {
        console.log(data.Search);
        dispatch({ type: "series/searchSeries", payload: data.Search });
      } else {
        console.log(data.Error);
        dispatch({ type: "series/error", payload: data.Error });
      }
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "series/error", payload: error.message });
    }
  };
}

export default seriesReducer;
