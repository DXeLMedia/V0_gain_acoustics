
import React from 'react';
import { Review } from './review-card';
import { StarIcon } from './star-icon';

interface ReviewModalProps {
  review: Review | null;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ review, onClose }) => {
  if (!review) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-4">
          <div>
            <p className="font-bold text-xl text-gray-900 dark:text-white">{review.author}</p>
            <p className="text-md text-gray-600 dark:text-gray-400">{review.details}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
          ))}
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{review.reviewText}</p>
        <p className="text-md text-gray-500 dark:text-gray-400">{review.date}</p>
        {review.liked && (
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <span className="mr-1">🙏</span>
            <span>1</span>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
