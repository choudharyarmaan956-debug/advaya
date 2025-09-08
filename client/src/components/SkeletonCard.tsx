export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="aspect-square bg-gray-200 skeleton"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded skeleton mb-3"></div>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded skeleton"></div>
            ))}
          </div>
          <div className="w-20 h-4 bg-gray-200 rounded skeleton ml-2"></div>
        </div>
        <div className="w-24 h-6 bg-gray-200 rounded skeleton mb-4"></div>
        <div className="w-full h-12 bg-gray-200 rounded-lg skeleton"></div>
      </div>
    </div>
  );
}