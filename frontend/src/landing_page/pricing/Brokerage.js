import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3> </a>
            <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "15px"}} className="text-muted">
              <li>For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).</li>
              <li>₹500 + GST as yearly account maintenance
              charges (AMC) charges.</li>
              <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
              <li>₹30 + GST per pledge request per ISIN.</li>
              <li>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</li>
              <li>₹9 + GST (Not levied on transfers done via UPI)</li>
            </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
