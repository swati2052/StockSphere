import React from 'react';

function Awards() {
  return (
    <div className='container py-4'>

      <div className='row align-items-center'>

        {/* Left Side Image */}
        <div className='col-lg-6 text-center'>
          <img
            src='media/images/largestBroker.svg'
            alt='Largest Broker'
            className='img-fluid p-3'
            style={{ width: "65%" }}
          />
        </div>

        {/* Right Side Content */}
        <div className='col-lg-6 px-4'>

          <h1 className='mb-4 fw-bold'>
            Trust with confidence
          </h1>

          <p
            className='mb-4 text-muted'
            style={{
              lineHeight: "1.9rem",
              fontSize: "1.05rem"
            }}
          >
            That's why 1.6+ crore customers trust Zerodha with
            ~ ₹6 lakh crores of equity investments, making us
            India’s largest broker.
          </p>

          {/* Points Section */}
          <div className='row mt-4'>

            <div className='col-6'>
              <ul className='ps-3'>
                <li className='mb-3'>Do better with money</li>
                <li className='mb-3'>Customer-first always</li>
                <li className='mb-3'>No spam or gimmicks</li>
              </ul>
            </div>

            <div className='col-6'>
              <ul className='ps-3'>
                <li className='mb-3'>Good returns always</li>
                <li className='mb-3'>Built on trust</li>
                <li className='mb-3'>The Zerodha universe</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Awards;