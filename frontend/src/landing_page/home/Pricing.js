import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price <br />
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6 mt-5">
          <div className="row">
            <div className="col">
              <span style={{ fontSize: "10px"}} className="text-muted">
                <img
                  src="\media\images\pricing0.svg"
                  alt="pricing0"
                  style={{ width: "60%" }}
                />
                Free account opening
              </span>
            </div>
            <div className="col">
              <span style={{ fontSize: "10px" }} className="text-muted">
                <img
                  src="\media\images\pricingEquity.svg"
                  alt="pricingEquity"
                  style={{ width: "60%" }}
                />
                Free equity delivery and direct mutual funds
              </span>
            </div>
            <div className="col">
              <span style={{ fontSize: "10px" }} className="text-muted">
                <img
                  src="\media\images\Pricing20.svg"
                  alt="pricingEquity"
                  style={{ width: "60%" }}
                />
                Intraday and F&O
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
