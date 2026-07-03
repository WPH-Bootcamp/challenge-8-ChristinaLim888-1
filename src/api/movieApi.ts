// Saya tahu bagaimana mengambil movie dari server.
/* Kenapa memakai function?
Karena kita ingin membuat sebuah function.
Tidak ada hubungannya dengan React Query. Ini murni JavaScript.


*/

import type { MovieResponse } from "@/types/movie";
import api from "../lib/axios";

export async function getPopularMovies() {
    const response = await api.get<MovieResponse>("/movie/popular");

    return response.data;
}







