import React from "react";
import "./css/ExpandableRecipeItem.css"; 

export function ExpandableRecipeItem({ item, idx, openIndex, toggle, svgFallback }) {
  const isOpen = openIndex === idx;

  return (
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id={`heading${item.id}`}>
        <button
          type="button"
          className={`accordion-button d-flex align-items-center ${isOpen ? "" : "collapsed"}`}
          aria-expanded={isOpen}
          aria-controls={`collapse${item.id}`}
          onClick={() => toggle(idx)}
        >
          <img
            src={item.image}
            alt={`${item.title} thumbnail`}
            loading="lazy"
            className="me-3 rounded recipe-thumb-img"
            onError={(e) => {
              e.currentTarget.src = svgFallback(64, 64, "No image");
            }}
          />

          <div className="flex-grow-1 text-start">
            <strong>{item.title}</strong>
            <div className="small text-muted">{item.subtitle}</div>
          </div>
        </button>
      </h2>

      <div
        id={`collapse${item.id}`}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={`heading${item.id}`}
        data-bs-parent="#recipesAccordion"
      >
        <div className="accordion-body">
          <div className="row align-items-start">
            <div className="col-md-4 mb-3 mb-md-0">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="img-fluid rounded recipe-detail-img"
                onError={(e) => {
                  e.currentTarget.src = svgFallback(600, 400, "Image not found");
                }}
              />
            </div>

            <div className="col-md-8">
              <h5>Quick details</h5>
              <p>{item.description}</p>
              <div className="d-flex gap-2">
                <a className="btn btn-sm btn-view-recipe" href={item.link} target="_blank" rel="noreferrer">
                  View recipe site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}