import { useState } from 'react';
import SidebarReviews from "../components/SidebarReviews";
import DisplayReview from "../components/DisplayReview";
import OtherProducts from '../components/OtherProducts';

import "./css/ReviewsPage.css"

import mockReviews from "../data/mockReviews";
import sampleProducts from "../data/sampleProducts"

function ReviewsPage() {

  const [selectedId, setSelectedId] = useState(null);

  const selectedReview = mockReviews.find(review => review.id === selectedId);

  return (
    <div className="container-fluid mt-4">
      
      <p className="titleReviewsPage">PRODUTOS E MERCADORES</p>

      <div className="row">

        <div className="col-md-8">

          <DisplayReview review={selectedReview} />

          <hr className="my-4" />

          {selectedReview && (
            <div className="text-center">
              <hr className="my-4" />
              <h4>PRODUTOS SEMELHANTES</h4>
              <OtherProducts 
                products={sampleProducts} 
                visible={4} 
                startKey={selectedId}
              />
            </div>
          )}

        </div>

        <div className="col-md-4">
          <SidebarReviews
            reviews={mockReviews}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

      </div>
    </div>
  );
}

export default ReviewsPage;