import React from 'react';

function Brokerage() {
    return (
        <div className="container mt-5 p-5 border-top">
            <div className="row mt-5">
                <div className="col-8">
                    <h3 className="fs-5 mb-4 text-center"><a href="#" style={{textDecoration:"none"}}>Brokerage Calculator</a></h3>
                    <ul className="text-muted mt-5" style={{lineHeight: "1.8", fontSize:"0.9rem"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="fs-5 mb-4 text-center"><a href="#" style={{textDecoration:"none"}}>List Of charges</a></h3>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
