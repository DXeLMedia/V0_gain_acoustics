
import React from 'react';
import { ReviewCard, Review } from './ui/review-card';
import { ReviewModal } from './ui/review-modal';

const reviewsData: Review[] = [
  {
    author: 'Jeremy Bishop',
    details: 'Local Guide·14 reviews·1 photo',
    reviewText: 'Neil was very accommodating in ensuring that we got our acoustic panels exactly as we needed them. Swift manufacture and delivery, with great communication throughout. Will definitely use them again if we need more acoustic treatment in future. Thanks!',
    date: 'a month ago',
    liked: true,
  },
  {
    author: 'Motar Mohidien',
    details: '3 reviews',
    reviewText: 'Neil did an amazing job on our Studio at In The Black records in Century City. He always goes the extra mile to make sure that his customer is more than happy. 100% would recommend him!',
    date: '4 months ago',
    liked: true,
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
    <section id="reviews" className="py-24 bg-muted/30 fluid-animate opacity-0 translate-y-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20 cascade-animate opacity-0 translate-y-[30px]">
          <h2 className="heading-secondary text-4xl lg:text-5xl text-foreground">Reviews</h2>
          <div className="section-divider max-w-20 mx-auto"></div>
        </div>
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
