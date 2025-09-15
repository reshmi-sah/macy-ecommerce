import React, { useState } from "react";

function ReviewSummary({ isVisible }) {
  const ratings = [
    { stars: 5, count: 336 },
    { stars: 4, count: 109 },
    { stars: 3, count: 39 },
    { stars: 2, count: 34 },
    { stars: 1, count: 47 },
  ];
  const totalReviews = ratings.reduce((acc, r) => acc + r.count, 0);

  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isVisible ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rating Distribution */}
          <div>
            <p className="mb-2 text-gray-700">
              Rating Distribution ({totalReviews} reviews)
            </p>
            {ratings.map((r, i) => {
              const percentage = ((r.count / totalReviews) * 100).toFixed(1);
              return (
                <div key={i} className="flex items-center mb-2">
                  <span className="w-12 text-sm">{r.stars} star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 mx-2">
                    <div
                      className="bg-orange-500 h-3 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-sm">{r.count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div>
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* Rating + Review Button */}
          <div className="flex items-center gap-3">
            <div className="text-orange-600 text-2xl sm:text-[26px]">★★★★☆</div>
            <span className="text-[16px] text-gray-600">(4.8)</span>
            <button
              className="text-sky-700 text-[16px]"
              onClick={() => setShowReviews(!showReviews)}
            >
              {showReviews ? "Hide Reviews" : "View Reviews"}
            </button>
          </div>
        </div>
      </div>

      {/* Review Section with Smooth Transition */}
      <ReviewSummary isVisible={showReviews} />
    </div>
  );
}
