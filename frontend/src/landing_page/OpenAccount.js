import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount(){
    return (
       <div className='container py-4 mb-4'>

      <div className='row text-center'>

        <h1 className='mt-3 mb-3 fw-bold'>
          Open a StockSphere account
        </h1>

        <p
          className='mb-4 text-muted'
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8rem"
          }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
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
          Sign up for free
        </Link>

      </div>

    </div>
  
    );
}
export default OpenAccount;
