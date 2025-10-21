
import React from 'react';
import { ReviewCard, Review } from './ui/review-card';
import { ReviewModal } from './ui/review-modal';

const reviewsData: Review[] = [
  {
    author: 'Jeremy Bishop',
    details: 'Local Guide·14 reviews·1 photo',
    reviewText: 'Neil was very accommodating in ensuring that we got our acoustic panels exactly as we needed them. Swift manufacture and delivery, with great communication throughout. Will definitely use them again if we need more acoustic treatment in future. Thanks!',
    date: 'a month ago',
  },
  {
    author: 'Motar Mohidien',
    details: '3 reviews',
    reviewText: 'Neil did an amazing job on our Studio at In The Black records in Century City. He always goes the extra mile to make sure that his customer is more than happy. 100% would recommend him!',
    date: '4 months ago',
  },
  {
    author: 'Apollo Ray Music',
    details: '1 review·1 photo',
    reviewText: 'Thanks to Neil and his team at Gain Acoustics for a job well done on setting up my studio. Exactly what I wanted for acoustic treatment in my room and it looks gorgeous as well. You can immediately feel the difference it makes when you walk from the passage into the studio.',
    date: '3 years ago',
  },
];

export const Reviews: React.FC = () => {
  const [selectedReview, setSelectedReview] = React.useState<Review | null>(null);

  const openModal = (review: Review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} review={review} onClick={() => openModal(review)} />
          ))}
        </div>
        <ReviewModal review={selectedReview} onClose={closeModal} />
      </div>
    </section>
  );
};
