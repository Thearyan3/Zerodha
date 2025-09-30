import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5" >
      <div className="row text-center" >
        <h1 className="mt-5 mb-3">Open a Zerodha Account</h1>
        <p className="text-muted mb-4" style={{fontSize: "17.5px"}}>
          Modern platforms and apps, $0 investments, and flat $0.40 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
