import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Side Image */}
        <div className="col-md-6 text-start mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid p-3"
            style={{ width: "65%" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-md-6">

          <h1 className="mb-3">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="d-block mb-3">
            Varsity →
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="#">
            TradingQ&A →
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;