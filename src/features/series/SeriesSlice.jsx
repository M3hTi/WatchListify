const tmdbnKey = import.meta.env.VITE_API_KEY;

const initialStateSeries = {
  series: [],
  isLoading: false,
};

function seriesReducer(state = initialStateSeries, action) {
  switch (action.type) {
    case "series/loading":
      return { ...state, isLoading: true };
    case "series/dataReceived":
      return { ...state, isLoading: false, series: action.payload };
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

export default seriesReducer;
