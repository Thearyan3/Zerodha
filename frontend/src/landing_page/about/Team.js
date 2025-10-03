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
          <h6>Full Stack Developer</h6>
        </div>
        <div className="col-6 pt-4" style={{fontSize: "1.1em", lineHeight: "1.5"}}>
          <p>
            As a Web Developer, Aryan is passionate about building full-stack applications<br /> that solve real-world problems. Currently studying BCA, he specializes in<br />
            the MERN stack and has built several notable projects, including a Zerodha <br />
            clone and a Wanderlust property platform.
          </p>

          <p>
            He is always eager to learn and grow, currently diving into the world<br/> of Generative AI.
          </p>

          <p>Outside of coding, you might find him on the football field as a <br/>National Football Player, traveling, or listening to music.</p>

          <p>Connect on <a href="" style={{textDecoration: "none"}}>Homepage</a> / <a href="" style={{textDecoration: "none"}}>GitHub</a> / <a href="" style={{textDecoration: "none"}}>LinkedIn</a></p>
          </div>
        <div className="col-1"></div>    
      </div>
    </div>
  );
}

export default Team;
