import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center mb-5" style={{ color: "#424242", fontSize: "2rem" }}>
          People
        </h1>
      </div>

      <div className="row justify-content-center text-muted pb-5" style={{ fontSize: "16px", lineHeight: "1.8" }}>
        
        {/* Left Side: Name and Title */}
        <div className="col-md-4 text-md-center px-4 mb-4">
            <h4 className="fw-bold" style={{ color: "#424242", fontSize: "24px" }}>Swati Dubey</h4>
            <p className="mb-2">Software Engineer</p>
            <p className="text-muted" style={{ fontSize: "14px" }}>B.Tech CSE (2026)</p>
        </div>

        {/* Right Side: Bio, Skills, Experience */}
        <div className="col-md-6 px-4">
          <p>
            Software Engineer and B.Tech CSE student (2026) with strong problem-solving skills and hands-on experience in full-stack development, REST APIs, and scalable applications. Proficient in Python, Java, C++, Node.js, and React.js, with a strong interest in automation, system testing, and software engineering.
          </p>

        


        </div>
      </div>
    </div>
  );
}

export default Team;
