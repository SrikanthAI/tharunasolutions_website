import React, { useState, useEffect } from "react";
import "./Home.css";

// Function to dynamically import images from a folder
const importImages = (context) => context.keys().map(context);

// Import all trading images
const tradingImages = importImages(require.context("../assets", false, /tradingimage_\d+\.jpeg$/));
// Import all work-life images
const workLifeImages = importImages(require.context("../assets", false, /worklife_\d+\.jpeg$/));

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWorkLifeIndex, setCurrentWorkLifeIndex] = useState(0);

  // Hero Section Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tradingImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Work Life Section Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkLifeIndex((prevIndex) => (prevIndex + 1) % workLifeImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Hero Section with Slideshow */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${tradingImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content">
          <h1>Building the next generation of trading technologies</h1>
          <p>Bringing together the brightest minds to tackle the toughest problems in financial markets.</p>
          <a href="/about" className="btn">More about us</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-box">
          <h2>Seeded In 2023</h2>
          <p>Tharuna Solutions was seeded by a group of Four Traders who crossed paths on a prominent trading platform.</p>
        </div>
        
        <div className="about-box">
          <h2>Evolving Ever Since</h2>
          <p>Our Co-founders’ combined expertise, coupled with a relentless drive to stay ahead of market trends, has propelled the company to the forefront of the trading industry.</p>
        </div>
        
        <div className="about-box">
          <h2>Growth Trajectory</h2>
          <p>We relentlessly combine technology and expertise to seize industry opportunities and drive growth with unwavering determination.</p>
        </div>
      </section>
        {/* Experience & Traders Section */}
<section className="experience-traders">
  <div className="experience-text">
    <h2>Building a Legacy in Trading</h2>
    <p>
      For over a decade, we have been shaping the financial markets with our 
      expertise in algorithmic trading and market-making strategies. Our team of
      skilled traders and technologists continually push boundaries to deliver 
      high-performance trading solutions.
    </p>
    <div className="stats">
      <div className="stat-box">
        <h3>2+</h3>
        <p>Years of Experience</p>
      </div>
      <div className="stat-box">
        <h3>100+</h3>
        <p>Traders Associated</p>
      </div>
    </div>
  </div>
  <div className="experience-image">
    <img src={require("../assets/experiencetrading_1.jpeg")} alt="Trading Experience" />
  </div>
</section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We uphold the highest standards of honesty and ethics.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We push boundaries to develop cutting-edge trading solutions.</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We strive to be the best in everything we do.</p>
          </div>
        </div>
      </section>

      {/* Work Life Section */}
      <section className="work-life">
        <div className="work-life-text">
          <h2>Work Life at Tharuna Solutions</h2>
          <p>
            At Tharuna Solutions, we create a dynamic and collaborative environment where innovation thrives.
            Our workplace encourages growth, teamwork, and a balance between professional and personal life.
          </p>
        </div>
        <div className="work-life-slideshow">
          <img src={workLifeImages[currentWorkLifeIndex]} alt="Work Life" />
          <div className="dots">
            {workLifeImages.map((_, index) => (
              <span
                key={index}
                className={index === currentWorkLifeIndex ? "dot active" : "dot"}
                onClick={() => setCurrentWorkLifeIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
