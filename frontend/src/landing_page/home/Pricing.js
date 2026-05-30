import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Side Text */}
        <div className="col-md-4 mb-4">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">See pricing →</a>
        </div>

        {/* Right Side Cards */}
        <div className="col-md-8">
          <div className="row text-center">

            <div className="col-md-4 mb-3">
              <h1>₹0</h1>
              <p>Free account opening</p>
            </div>

            <div className="col-md-4 mb-3">
              <h1>₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>

            <div className="col-md-4 mb-3">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;