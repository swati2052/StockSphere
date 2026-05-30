import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='container py-4 mb-4'>

      <div className='row text-center'>

        <img
          src='media/images/homeHero.png'
          alt='Home Hero'
          className='img-fluid mb-5 mx-auto'
          style={{ maxWidth: "65%" }}
        />

        <h1 className='mt-3 mb-3 fw-bold'>
          Invest in everything
        </h1>

        <p
          className='mb-4 text-muted'
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8rem"
          }}
        >
          Invest seamlessly in stocks, mutual funds, ETFs,
          bonds, and more — all on one powerful platform.
        </p>

        <Link
          to="/signup"
          className='btn btn-primary'
          style={{
            width: "160px",
            margin: "0 auto",
            padding: "10px",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Signup Now
        </Link>

      </div>

    </div>
  );
}

export default Hero;