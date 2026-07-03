interface MovieTitleProps {
  title: string;
}

export default function MovieTitle({
  title,
}: MovieTitleProps) {
  return (
    <h3 className="line-clamp-2 text-lg font-semibold text-white">
      {title}
    </h3>
  );
}
/*
Kenapa line-clamp?

Misalnya.

Harry Potter and the Deathly Hallows Part II

Kalau tidak dibatasi.

Card menjadi tinggi sendiri.

Nanti kita install plugin line-clamp kalau belum ada.
*/