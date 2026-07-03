import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/components/constants/queryKeys";
import { movieService } from "@/services/movieService";

export function usePopularMovies(page = 1) {
  return useQuery({
    queryKey: queryKeys.movies.popular(page),

    queryFn: () =>
      movieService.getPopularMovies(page),
  });
}

/*
Kenapa queryKey Array?
["popular-movies", page]

Misalnya:

Page 1

↓

["popular-movies",1]

Page 2

↓

["popular-movies",2]

React Query akan menyimpan cache yang berbeda.

Kalau hanya:

["popular-movies"]

Page 1 dan Page 2 dianggap sama.

*/