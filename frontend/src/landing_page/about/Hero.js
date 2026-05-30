import React from "react";

function Hero() {
  return (
    <div className="container">

      {/* Top Heading Section */}
      <div className="row text-center justify-content-center py-5 mt-5">
        <div className="col-10">
          <h1
            style={{
              fontSize: "2rem",
              lineHeight: "1.6",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-top" style={{ borderColor: "#eee", margin: "60px 0" }}></div>

      {/* Bottom Content Section */}
      <div className="row justify-content-center pb-5">

        {/* Left Paragraph */}
        <div className="col-md-5 px-4" style={{ fontSize: "16px", lineHeight: "1.8", color: "#424242" }}>
          <p className="mb-4">
            We kick-started operations with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.
          </p>

          <p className="mb-4">
            We named the company StockSphere, envisioning a comprehensive ecosystem for all your trading needs.
          </p>

          <p className="mb-4">
            Today, our disruptive pricing models and in-house technology have made us one of the most trusted stock brokers in India.
          </p>

          <p className="mb-4">
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing a significant portion of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Paragraph */}
        <div className="col-md-5 px-4" style={{ fontSize: "16px", lineHeight: "1.8", color: "#424242" }}>
          <p className="mb-4">
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>

          <p className="mb-4">
            <span style={{ color: "#387ed1", fontWeight: "500" }}>StockSphere's</span> innovation lab has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>

          <p className="mb-4">
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;