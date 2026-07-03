// membuat TypeScript mengenali Environment Variables.
/* Biasanya isinya
/// <reference types="vite/client" />
Kita tambahkan interface.


*/

interface ImportMetaEnv {
  readonly VITE_TMDB_API_TOKEN: string;
  readonly VITE_TMDB_BASE_URL: string;
  readonly VITE_TMDB_IMAGE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/* Kenapa Perlu Interface?
Tanpa ini TypeScript hanya tahu
import.meta.env

tetapi tidak tahu : VITE_TMDB_API_TOKEN

Dengan interface TypeScript menjadi pintar.
Misalnya salah ketik: 
import.meta.env.VITE_TMBD_API_TOKEN
(TypeScript akan langsung memberi tahu bahwa nama variabel salah.)

*/