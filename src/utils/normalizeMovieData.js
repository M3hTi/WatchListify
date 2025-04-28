// Normalize movie data from different APIs
export function normalizeMovieData(movieObj) {
  // Check if it's OMDB API data (has 'Title' property)
  if (movieObj.Title) {
    return {
      id: movieObj.imdbID,
      name: movieObj.Title, // Add name for TV series components
      title: movieObj.Title,
      poster_path: movieObj.Poster,
      first_air_date: movieObj.Year.split("–")[0] + "-01-01", // Format year for TV series
      release_date: movieObj.Year.split("–")[0] + "-01-01",
      vote_average: movieObj.imdbRating ? parseFloat(movieObj.imdbRating) : 0,
    };
  }

  // If it's TMDB API data
  return {
    id: movieObj.id,
    name: movieObj.title || movieObj.name || "", // Ensure name exists
    title: movieObj.title || movieObj.name || "",
    poster_path: movieObj.poster_path || "",
    first_air_date: movieObj.first_air_date || movieObj.release_date || "",
    release_date: movieObj.release_date || movieObj.first_air_date || "",
    vote_average: movieObj.vote_average || 0,
  };
}
