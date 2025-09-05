import PropTypes from 'prop-types';

import "./css/ReviewListItem.css"

function ReviewListItem({
    item,
    isActive = false,
    onClick = () => {}
}) {
    const { id, name, avatarUrl, snippet, rating, isVerified } = item;

    return (
        <button
            type="button"
            className={`d-flex align-items-start gap-3 p-2 w-100 text-start review-list-item ${isActive ? 'active' : ''}`}
            onClick={() => onClick(id)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onClick(id);
            }}
            aria-pressed={isActive}
            aria-label={`Abrir review de ${name}`}
        >
            <img
                src={avatarUrl}
                alt={`${name} avatar`}
                className="rounded-circle"
                style={{ width: 56, height: 56, objectFit: 'cover', flexShrink: 0 }}
                loading="lazy"
            />

            <div className="flex-grow-1">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="fw-semibold small">{name}{isVerified && <span className="ms-1 text-primary" title="Vendedor Verificado"><i className="bi bi-patch-check-fill ms-1 text-primary" /></span>}</div>
                </div>
                
                {rating != null && (
                    <div className="small text-warning" style={{ lineHeight: 1}}>
                        {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
                    </div>
                )}
                
                <div className="small text-muted review-snippet" style={{ marginTop: 6}}>
                    {snippet}
                </div>
            </div>
        </button>
    )
}

ReviewListItem.propTypes = {

    item: PropTypes.shape({
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        snippet: PropTypes.string,
        timeAgo: PropTypes.string,
        rating: PropTypes.number,
        isVerified: PropTypes.bool
    }).isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func
    
};

export default ReviewListItem;