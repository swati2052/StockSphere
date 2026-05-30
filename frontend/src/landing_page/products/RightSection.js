import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center mb-5 p-5">
                <div className="col-4">
                    <h2 className="mb-4">{productName}</h2>
                    <p className="mb-4" style={{lineHeight: "1.8"}}>{productDescription}</p>
                    <div className="mb-4">
                        <a href={learnMore} style={{textDecoration: "none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <img src={imageURL} alt={productName} style={{maxWidth: '100%'}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
