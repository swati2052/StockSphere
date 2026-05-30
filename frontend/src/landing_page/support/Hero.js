import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero" style={{backgroundColor: '#387ed1', color: 'white'}}>
            <div className="p-5" style={{padding: '50px 100px'}}>
                <div className="d-flex justify-content-between mb-5 px-5" style={{fontSize: '1.2rem', marginTop: "40px"}}>
                    <h4 className="fs-4">Support Portal</h4>
                    <a href="#" style={{color: 'white', textDecoration: 'underline'}}>Track tickets</a>
                </div>
                
                <div className="row px-5">
                    <div className="col-12 col-md-7 p-3">
                        <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h1>
                        <input 
                            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                            className="mt-2 mb-4" 
                            style={{
                                width: "100%",
                                padding: "18px 25px",
                                border: "none",
                                borderRadius: "3px",
                                outline: "none",
                                fontSize: "1rem"
                            }} 
                        />
                        <div className="d-flex flex-wrap gap-4 mt-3" style={{lineHeight: "1.5", fontSize: "1.1rem"}}>
                            <a href="#" style={{color: "white", textDecoration: "underline"}}>Track account opening</a>
                            <a href="#" style={{color: "white", textDecoration: "underline"}}>Track segment activation</a>
                            <a href="#" style={{color: "white", textDecoration: "underline"}}>Intraday margins</a>
                            <a href="#" style={{color: "white", textDecoration: "underline"}}>Kite user manual</a>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-5 p-4 mt-3 pl-5">
                        <h1 className="fs-3 mb-4">Featured</h1>
                        <ol className="mt-4" style={{lineHeight: "2", fontSize: "1.1rem"}}>
                            <li className="mb-3"><a href="#" style={{color: "white", textDecoration: "underline"}}>Surveillance measure on scrips - July 2024</a></li>
                            <li className="mb-3"><a href="#" style={{color: "white", textDecoration: "underline"}}>Latest Intraday leverages and Square-off timings</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
