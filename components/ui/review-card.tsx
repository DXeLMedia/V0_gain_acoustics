
import React from 'react';
import { StarIcon } from './star-icon';

export interface Review {
  author: string;
  details: string;
  photo?: string;
  reviewText: string;
  date: string;
  liked?: boolean;
}

export interface ReviewCardProps {
  review: Review;
  onClick: () => void;
}

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
          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{review.reviewText}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
      {review.liked && (
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <span className="mr-1">🙏</span>
          <span>1</span>
        </div>
      )}
    </div>
  );
};
