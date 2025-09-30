import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center g-2 justify-content-center align-items-center">
        <h1 className="fs-3 text-muted">The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-md-4 mt-3">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ height: "55px", width: "198px" }}
          />
          <p className="text-muted mt-3" style={{fontSize: "13px", fontWeight: "500"}}>
            Our asset management venture
            <br /> that is creating simple and transparent index
            <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-md-4 mt-3">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ height: "40px", width: "228px" }}
          />
          <p className="text-muted mt-3" style={{fontSize: "13px", fontWeight: "500"}}>
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
            <br />
          </p>
        </div>
        <div className="col-md-4 mt-3">
          <img
            src="media\images\goldenpiLogo.png"
            style={{ height: "55px", width: "190px" }}
          />
          <p className="text-muted mt-3" style={{fontSize: "13px", fontWeight: "500"}}>
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
            <br />
            
          </p>
        </div>
        <div className="col-md-4 mt-3">
          <img
            src="media\images\streakLogo.png"
            style={{ height: "55px", width: "166px" }}
          />
          <p className="text-muted mt-3" style={{fontSize: "13px", fontWeight: "500"}}>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
            <br />
          </p>
        </div>
        <div className="col-md-4 mt-3">
          <img
            src="media\images\smallcaseLogo.png"
            style={{ height: "55px", width: "210px" }}
          />
          <p className="text-muted mt-3" style={{fontSize: "13px", fontWeight: "500"}}>
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
            <br />
          </p>
        </div>
        <div className="col-md-4 mt-3">
          <img
            src="media\images\dittoLogo.png"
            style={{ height: "55px", width: "143px" }}
          />
          <p className="text-muted mt-3" style={{fontSize: "13px", fontWeight: "500"}}>
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
            <br />
          </p>
              </div>
               <button
          className="p-2 btn btn-primary fs-5 mt-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
