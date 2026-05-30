import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fbfbfb",
        borderTop: "1px solid #eee",
        padding: "50px 0 20px",
        marginTop: "80px",
      }}
    >
      <div className="container">
        <div className="row">

          {/* Left Section */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/new.png"
              alt="logo"
              style={{ width: "60%", marginBottom: "20px" }}
            />

            <p style={{ color: "#666", fontSize: "15px" }}>
              © 2010 - 2026, StockSphere Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "28px",
                color: "#666",
                marginTop: "20px",
              }}
            >
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Account</h5>

            <p>Open demat account</p>
            <p>Minor demat account</p>
            <p>NRI account</p>
            <p>Commodity</p>
            <p>Funds transfer</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Support</h5>

            <p>Contact us</p>
            <p>Support portal</p>
            <p>How to file a complaint?</p>
            <p>Status of complaints</p>
            <p>Downloads</p>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Company</h5>

            <p>About</p>
            <p>Pricing</p>
            <p>Careers</p>
            <p>Products</p>
            <p>Press & media</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "12px", lineHeight: "1.6" }}>
          <p>
            StockSphere Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through StockSphere Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered Address: StockSphere Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@stocksphere.com, for DP related to dp@stocksphere.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="#" className="text-decoration-none text-primary">Smart Online Dispute Resolution</a> | <a href="#" className="text-decoration-none text-primary">Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. <a href="#" className="text-decoration-none text-primary">NSE broker factsheet</a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of StockSphere and offering such services, please <a href="#" className="text-decoration-none text-primary">create a ticket here</a>.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>
          <p>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. StockSphere Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "14px",
            fontWeight: "500",
            paddingTop: "20px",
            paddingBottom: "40px"
          }}
        >
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>NSE</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>BSE</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>MCX</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>MSEI</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>Terms & conditions</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>Policies & procedures</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>Privacy policy</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>Disclosure</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>For investor's attention</a>
          <a href="#" className="text-decoration-none" style={{ color: "#666" }}>Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;