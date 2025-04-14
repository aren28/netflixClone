import movie_two from "@assets/img/Header/movie-two.jpg";
import movie_two_logo from "@assets/img/Header/movie-two-logo.png";
import netflix_logo from "@assets/img/netflix-logo.png";

const IMAGES = {
  movie_two: new URL(`${movie_two}`, import.meta.url).href,
  movie_two_logo: new URL(`${movie_two_logo}`, import.meta.url).href,
  netflix_logo: new URL(`${netflix_logo}`, import.meta.url).href,
};

export default IMAGES;
