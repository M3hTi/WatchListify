// Normalize movie data from different APIs
export function normalizeMovieData(movieObj) {
  // Check if it's OMDB API data (has 'Title' property)
  if (movieObj.Title) {
    return {
      id: movieObj.imdbID,
      title: movieObj.Title,
      poster_path: movieObj.Poster,
      release_date: movieObj.Year + "-01-01", // OMDB only provides year
      vote_average: movieObj.imdbRating ? parseFloat(movieObj.imdbRating) : 0,
      // Add any other properties you need
    };
  }
  // If it's TMDB API data, return as is
  return movieObj;
}
