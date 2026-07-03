



/*
Saya mengusulkan kita membuatnya secara bertahap:

api.ts → belajar membuat generic response (PaginatedResponse<T>, ApiError).
movie.ts → belajar mengambil field yang benar-benar dibutuhkan dari endpoint movie.
person.ts → membuat tipe untuk cast dan crew.
video.ts → membuat tipe untuk trailer dan video.
index.ts → menggabungkan semua export.


person.ts → untuk Cast dan Crew.
video.ts → untuk Trailer dan video lain.
index.ts → untuk menggabungkan semua export.
Baru masuk ke movieService.ts, yaitu mulai mengambil data dari TMDB menggunakan Axios yang sudah kita siapkan.
*/

export * from "./api";
export * from "./movie";
export * from "./person";
export * from "./video";
export * from "./favorite";
