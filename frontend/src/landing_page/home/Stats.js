import React from 'react';

function Stats() {
  return (
    <div className='container p-5 mb-5'>

      <div className='row align-items-center'>

        {/* Left Side Content */}
        <div className='col-lg-6'>

          <h1 className='fw-bold mb-4'>
            The StockSphere Ecosystem
          </h1>

          <p
            className='text-muted mb-4'
            style={{ lineHeight: "1.8rem" }}
          >
            Explore our complete ecosystem designed to make
            investing and trading simple, fast, and secure.
          </p>

          <ul className='ps-3'>
            <li className='mb-3'>
              Powerful trading platforms for everyone
            </li>

            <li className='mb-3'>
              Smart tools for better investment decisions
            </li>

            <li className='mb-3'>
              Seamless experience across all devices
            </li>
          </ul>

        </div>

        {/* Right Side Image */}
        <div className='col-lg-6 text-center'>
          <img
            src='media/images/ecosystem.png'
            alt='Ecosystem'
            className='img-fluid p-3'
            style={{ width: "65%" }}
          />
        </div>

      </div>

    </div>
  );
}

export default Stats;