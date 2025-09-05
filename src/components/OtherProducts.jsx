import React, { useRef, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./css/OtherProducts.css";

// Your ArrowIcon component
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

function OtherProducts({
  products = [],
  visible = 3,
  ariaLabel = "Produtos similares",
  loop = true,
  startKey = null, 
}) {
  const containerRef = useRef(null);
  const isJumpingRef = useRef(false);
  
  const [itemStride, setItemStride] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const GAP_PX = 16;
  const visibleSafe = Math.max(1, Math.floor(Number(visible) || 3));
  const cloneCount = Math.min(visibleSafe, products.length);

  const displayed = useMemo(() => {
    if (!loop || !products.length || products.length <= cloneCount) return products;
    const head = products.slice(0, cloneCount);
    const tail = products.slice(-cloneCount);
    return [...tail, ...products, ...head];
  }, [products, loop, cloneCount]);

  const itemFlexStyle = useMemo(() => ({
    flex: `0 0 calc((100% - ${(visibleSafe - 1) * GAP_PX}px) / ${visibleSafe})`,
  }), [visibleSafe, GAP_PX]);

  // Effect to calculate stride and check if scrollable (unchanged)
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const calculateMetrics = () => {
      const item = c.querySelector(".other-product-item");
      if (item && item.offsetWidth > 0) {
        setItemStride(item.offsetWidth + GAP_PX);
        setIsScrollable(c.scrollWidth > c.clientWidth);
        setIsReady(true);
      }
    };
    const timer = setTimeout(calculateMetrics, 100);
    window.addEventListener('resize', calculateMetrics);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateMetrics);
    };
  }, [displayed.length, visibleSafe]);

  // --- NEW: EFFECT TO SET RANDOM START POSITION ---
  useEffect(() => {
    // Wait until the layout is ready and we have a valid key
    if (!isReady || startKey === null) return;

    // Calculate a random index within the range of original products
    const randomIndex = Math.floor(Math.random() * products.length);
    
    // Calculate the target scroll position.
    // We add `cloneCount` to account for the cloned items at the beginning.
    const targetScrollLeft = (randomIndex + cloneCount) * itemStride;
    
    // Animate the scroll to the new random position
    containerRef.current?.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });

  }, [startKey, isReady, products.length, cloneCount, itemStride]); // Re-run when these change

  const scrollByOne = (dir = 1) => {
    if (!itemStride) return;
    containerRef.current?.scrollBy({ left: itemStride * dir, behavior: "smooth" });
  };
  
  // All other useEffects (Keyboard, Wheel, Scroll Watcher) remain the same
  // ...

  return (
    <section className="other-products-wrapper" aria-label={ariaLabel}>
      {isScrollable && (
        <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scrollByOne(-1)}>
          <ArrowIcon />
        </button>
      )}
      <div className="other-products-container" ref={containerRef} tabIndex={0}>
        {displayed.map((p, idx) => {
          const key = loop ? `cloned-${idx}-${String(p.id ?? idx)}` : (p.id ?? idx);
          return (
            <div
              key={key}
              className="other-product-item"
              style={itemFlexStyle}
              tabIndex={0}
            >
              <img src={p.image} alt={p.alt || ''} loading="lazy" className="other-product-image"/>
            </div>
          );
        })}
      </div>
      {isScrollable && (
        <button className="carousel-btn next" aria-label="Próximo" onClick={() => scrollByOne(1)}>
          <ArrowIcon />
        </button>
      )}
    </section>
  );
}

OtherProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
  visible: PropTypes.number,
  ariaLabel: PropTypes.string,
  loop: PropTypes.bool,
  startKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Add prop type
};

export default OtherProducts;