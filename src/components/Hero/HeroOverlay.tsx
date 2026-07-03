export default function HeroOverlay() {
  return (
    <>
      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/45
        "
      />

      {/* Left Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/40
          to-transparent
        "
      />

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-60
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />
    </>
  );
}