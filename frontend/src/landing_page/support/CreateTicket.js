import React from 'react';

function CreateTicket() {
    return (
        <div className="container mt-5 mb-5 p-5">
            <h1 className="fs-3 text-muted mb-5 fw-normal">To create a ticket, select a relevant topic</h1>
            
            <div className="row mt-5 mb-5">
                <div className="col-4 p-4">
                    <h4 className="mb-4 fs-5 fw-normal"><i className="fa fa-plus-circle" aria-hidden="true" style={{marginRight: "10px"}}></i> Account Opening</h4>
                    <div className="d-flex flex-column ticket-links" style={{lineHeight: "2.5"}}>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Getting started</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Online</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Offline</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Charges</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Company, Partnership and HUF</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Non Resident Indian (NRI)</a>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <h4 className="mb-4 fs-5 fw-normal"><i className="fa fa-user" aria-hidden="true" style={{marginRight: "10px"}}></i> Your StockSphere Account</h4>
                    <div className="d-flex flex-column ticket-links" style={{lineHeight: "2.5"}}>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Login credentials</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Your Profile</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Account modification and segment addition</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>CMR & DP ID</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Nomination</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Transfer and conversion of shares</a>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <h4 className="mb-4 fs-5 fw-normal"><i className="fa fa-bar-chart" aria-hidden="true" style={{marginRight: "10px"}}></i> Trading and Markets</h4>
                    <div className="d-flex flex-column ticket-links" style={{lineHeight: "2.5"}}>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Trading FAQs</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Kite</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Margins</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Product and order types</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Corporate actions</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Kite features</a>
                    </div>
                </div>
            </div>
            
            <div className="row mb-5">
                <div className="col-4 p-4">
                    <h4 className="mb-4 fs-5 fw-normal"><i className="fa fa-briefcase" aria-hidden="true" style={{marginRight: "10px"}}></i> Funds</h4>
                    <div className="d-flex flex-column ticket-links" style={{lineHeight: "2.5"}}>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Fund withdrawal</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Adding funds</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Adding bank accounts</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>eMandates</a>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <h4 className="mb-4 fs-5 fw-normal"><i className="fa fa-pie-chart" aria-hidden="true" style={{marginRight: "10px"}}></i> Console</h4>
                    <div className="d-flex flex-column ticket-links" style={{lineHeight: "2.5"}}>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>IPO</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Portfolio</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Funds statement</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Profile</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Reports</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Referral program</a>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <h4 className="mb-4 fs-5 fw-normal"><i className="fa fa-circle-o-notch" aria-hidden="true" style={{marginRight: "10px"}}></i> Coin</h4>
                    <div className="d-flex flex-column ticket-links" style={{lineHeight: "2.5"}}>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Understanding mutual funds</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Coin app</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Coin web</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>Transactions and reports</a>
                        <a href="#" style={{textDecoration: "none", color: "#387ed1"}}>National Pension Scheme (NPS)</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
