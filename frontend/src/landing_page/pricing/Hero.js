import React from 'react';

function Hero() {
    return (
        <div className="container mt-5 p-3">
            <div className="row text-center border-bottom pb-5">
                <h1 className="mt-4 mb-3">Pricing</h1>
                <h3 className="text-muted mt-3 mb-4 fs-4">Free equity investments and flat ₹20 intraday and F&O trades</h3>
            </div>
            
            <div className="row text-center mt-5 p-5">
                <div className="col-4 p-4">
                    <img src="/media/images/pricingEquity.svg" alt="Free Equity" />
                    <h2 className="mb-4 mt-4 fs-3">Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="/media/images/intradayTrades.svg" alt="Intraday trades" />
                    <h2 className="mb-4 mt-4 fs-3">Intraday and F&O trades</h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="/media/images/pricingMF.svg" alt="Free Mutual Funds" />
                    <h2 className="mb-4 mt-4 fs-3">Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
