import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import OtherProducts from './OtherProducts';

import sampleProducts from '../data/sampleProducts';

function DisplayReview({ review }) {

   const { t } = useTranslation();

  if (!review) {
    return (
      <div className="p-3 border rounded">
        <h3>{t("reviews.clickSeller")}</h3>
        <p>{t("reviews.clickSellerDetails")}</p>
      </div>
    );
  }

  const { id, name, avatarUrl, snippet, timeAgo, rating, isVerified } = review;

  return (
    <div className="p-3 border rounded d-flex flex-column gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="rounded-circle"
          style={{ width: 64, height: 64, objectFit: 'cover' }}
        />
        <div className="d-flex flex-column">
          <div className="fw-bold fs-5">
            {name}{isVerified && <span className="ms-2 text-primary" title="Verified"><i className="bi bi-patch-check-fill ms-1" /></span>}
          </div>
          <small className="text-muted">{timeAgo}</small>
          {rating != null && (
            <div className="small text-warning" style={{ lineHeight: 1 }}>
              {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
            </div>
          )}
        </div>
      </div>
      <hr className="my-2" />
      <div className="review-body">
        <p>{snippet}</p>
        <OtherProducts 
          products={sampleProducts} 
          visible={3} 
          startKey={id}
        />
      </div>
    </div>
  );
}

DisplayReview.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    snippet: PropTypes.string,
    timeAgo: PropTypes.string,
    rating: PropTypes.number,
    isVerified: PropTypes.bool,
  }),
};

export default DisplayReview;