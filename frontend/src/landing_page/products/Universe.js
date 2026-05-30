import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row text-center mb-5">
                <h2 className="mb-4 mt-5">The StockSphere Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/smallcaseLogo.png" alt="Smallcase" style={{width: '150px'}} />
                    <p className="text-small text-muted mt-3">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/streakLogo.png" alt="Streak" style={{width: '150px'}} />
                    <p className="text-small text-muted mt-3">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/sensibullLogo.svg" alt="Sensibull" style={{width: '200px'}} />
                    <p className="text-small text-muted mt-3">Options trading platform</p>
                </div>
                
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{width: '200px'}} />
                    <p className="text-small text-muted mt-3">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/goldenpiLogo.png" alt="GoldenPi" style={{width: '150px'}} />
                    <p className="text-small text-muted mt-3">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/dittoLogo.png" alt="Ditto" style={{width: '120px'}} />
                    <p className="text-small text-muted mt-3">Insurance</p>
                </div>
                <div className="col-12 mt-5">
                    <Link className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto", textDecoration: "none"}} to="/signup">Sign up now</Link>
                </div>
            </div>
        </div>
    );
}

export default Universe;
