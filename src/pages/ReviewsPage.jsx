import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom"; // Importe os hooks do router
import SidebarReviews from "../components/SidebarReviews";
import DisplayReview from "../components/DisplayReview";
import OtherProducts from '../components/OtherProducts';

import "./css/ReviewsPage.css";

import mockReviews from "../data/mockReviews";
import sampleProducts from "../data/sampleProducts";

function ReviewsPage() {

  const { t } = useTranslation();
  
  const { id } = useParams();
  
  const navigate = useNavigate();

  const selectedId = id ? Number(id) : null;

  const selectedReview = mockReviews.find(review => review.id === selectedId);

  const handleSelect = (newId) => {
    navigate(`/reviews/${newId}`);
  };

  return (
    <div className="container-fluid mt-4">
        
      <p className="titleReviewsPage">{t("reviewsPage.reviewTitle")}</p>

      <div className="row">

        <div className="col-md-8">
          
          <DisplayReview review={selectedReview} />

          <hr className="my-4" />

          {selectedReview && (
            <div className="text-center">
              <hr className="my-4" />
              <h4>{t("reviewsPage.otherProducts")}</h4>
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
            onSelect={handleSelect}
          />
        </div>

      </div>
    </div>
  );
}

export default ReviewsPage;