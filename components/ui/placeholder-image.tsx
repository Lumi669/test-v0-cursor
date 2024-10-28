export function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={`bg-gray-200 w-full h-40 flex items-center justify-center ${className}`}
    >
      <span>Image</span>
    </div>
  );
}
