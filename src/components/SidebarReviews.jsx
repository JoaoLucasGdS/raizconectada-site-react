import ReviewListItem from "./ReviewListItem";
import "./css/SidebarReviews.css"

function SidebarReviews({ reviews = [], selectedId, onSelect }) {
  return (
    <aside className="border-start ps-4" style={{ minWidth: 260 }}>
      <div className="d-flex flex-column reviews-list-container">
        {reviews.map(r => (
          <div key={r.id} className="border-bottom">
            <ReviewListItem
              item={r}
              isActive={r.id === selectedId}
              onClick={onSelect}
            />
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SidebarReviews;