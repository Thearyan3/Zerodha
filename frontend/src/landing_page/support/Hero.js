import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>
      <div className="row">
        <div className="col-6" id="cols1">
          <h4 style={{lineHeight: 1.5}}>Search for an answer or browse help topics to create a ticket</h4>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected."
          />
          <br />
          <div id="anchors" style={{lineHeight: 2}}>
            <a href="" style={{ padding: "10px"}}>
              Track account opening
            </a>
            <a href="" style={{ padding: "10px"}}>Track segment activation</a>
            <a href="" style={{ padding: "10px"}}>Intraday margins</a>
            <a href="" style={{ paddingRight: "370px"}}>Kite user manual</a>
          </div>
        </div>
        <div className="col-6 ps-5">
          <h2>Featured</h2>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2025</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
