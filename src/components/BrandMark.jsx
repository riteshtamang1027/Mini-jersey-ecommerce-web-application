export default function BrandMark() {
  return (
    <main className="flex items-center gap-2">
      <div className="relative px-2 py-1 w-8 h-8 bg-secondary rounded-sm rotate-45">
        <span className="absolute text-2xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          K
        </span>
      </div>
      <span className="text-3xl font-bold">KITHAUS</span>
    </main>
  );
}
