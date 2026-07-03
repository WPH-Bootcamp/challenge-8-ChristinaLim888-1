interface SpinnerProps {
  size?: number;
}

export default function Spinner({
  size = 48,
}: SpinnerProps) {
  return (
    <div
      className="animate-spin rounded-full border-4 border-zinc-700 border-t-red-600"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}