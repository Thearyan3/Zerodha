import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="text-center" style={{fontSize: "25px"}}>People</h1>
      </div>

      <div className="row p-3 text-muted ms-5">
        <div className="col-5 text-center">
          <img
            src="media/images/aryan.jpg"
            alt="Aryan"
            style={{
              borderRadius: "50%",
              width: "300px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <h4 className="mt-5">Aryan</h4>
          <h6>Web Developer</h6>
        </div>
        <div className="col-6 pt-4" style={{fontSize: "1.1em", lineHeight: "1.5"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/>
            hurdles he faced during his decade long stint as a trader. Today,<br/>
            Zerodha has changed the landscape of the Indian broking industry.<br/>
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee<br/>
            (SMAC) and the Market Data Advisory Committee (MDAC).<br/>
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <a href="" style={{textDecoration: "none"}}>Homepage</a> / <a href="" style={{textDecoration: "none"}}>TradingQnA</a> / <a href="" style={{textDecoration: "none"}}>Twitter</a></p>
          </div>
        <div className="col-1"></div>    
      </div>
    </div>
  );
}

export default Team;
