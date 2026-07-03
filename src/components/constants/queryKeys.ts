export const queryKeys = {
  movies: {
    popular: (page: number) =>
      ["movies", "popular", page] as const,

    nowPlaying: (page: number) =>
      ["movies", "now-playing", page] as const,

    detail: (movieId: number) =>
      ["movies", "detail", movieId] as const,

    credits: (movieId: number) =>
      ["movies", "credits", movieId] as const,

    videos: (movieId: number) =>
      ["movies", "videos", movieId] as const,

    similar: (movieId: number) =>
      ["movies", "similar", movieId] as const,

    search: (
      query: string,
      page: number
    ) =>
      ["movies", "search", query, page] as const,
  },
};