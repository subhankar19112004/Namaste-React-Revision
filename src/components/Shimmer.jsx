const ShimmerCard = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Image Skeleton */}
      <div className="h-48 w-full animate-pulse bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-4">
        <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>

        <div className="mb-3 h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>

        <div className="mb-3 flex gap-2">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

const Shimmer = ({ count = 12 }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Optional Heading Skeleton */}
      <div className="mb-8 h-8 w-64 animate-pulse rounded bg-gray-200"></div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(count)
          .fill("")
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
