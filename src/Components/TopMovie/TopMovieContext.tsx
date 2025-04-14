import { createContext } from "react";

const TopMovieContext = createContext<unknown>(undefined);

export const TopMovieContextValueProvider = TopMovieContext.Provider;

export default TopMovieContext;
