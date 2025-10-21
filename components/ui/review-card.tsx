
import React from 'react';

export interface Review {
  author: string;
  details: string;
  photo?: string;
  reviewText: string;
  date: string;
}

export interface ReviewCardProps {
  review: Review;
  onClick: () => void;
}

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-yellow-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
);

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-center mb-4">
        <div>
          <p className="font-bold text-lg text-gray-900 dark:text-white">{review.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{review.details}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{review.reviewText}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
      <div className="flex items-center text-gray-500 dark:text-gray-400">
        <span className="mr-1">🙏</span>
        <span>1</span>
      </div>
    </div>
  );
};
