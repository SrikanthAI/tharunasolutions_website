import React, { useState, useEffect } from "react";
import { FaShieldAlt, FaLightbulb, FaStar } from "react-icons/fa";
import "./Home.css";

/* ============================
   IMAGE IMPORTS (MUST BE TOP)
=============================== */
import tradingImage1 from "../assets/tradingimage_1.jpeg";
import tradingImage2 from "../assets/tradingimage_2.jpeg";
import tradingImage3 from "../assets/tradingimage_3.jpeg";

import workLifeImage1 from "../assets/worklife_1.jpeg";
import workLifeImage2 from "../assets/worklife_2.jpeg";
import workLifeImage3 from "../assets/worklife_3.jpeg";

import experienceImage from "../assets/experiencetrading_1.jpeg";

/* ============================
   STATIC DATA
=============================== */
const tradingImages = [
  tradingImage1,
  tradingImage2,
  tradingImage3,
];

const workLifeImages = [
  workLifeImage1,
  workLifeImage2,
  workLifeImage3,
];

const coreValues = [
  {
    icon: FaShieldAlt,
    title: "Integrity",
    text:
      "We uphold the highest standards of honesty and ethics in every trade and decision.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    text:
      "We relentlessly push technological boundaries to develop cutting-edge trading solutions.",
  },
  {
    icon: FaStar,
    title: "Excellence",
    text:
      "We strive for operational excellence, delivering high-performance and reliable trading platforms.",
  },
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWorkLifeIndex, setCurrentWorkLifeIndex] = useState(0);

  /* ============================
     HERO SLIDESHOW
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % tradingImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ============================
     WORK LIFE SLIDESHOW
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkLifeIndex(
        (prev) => (prev + 1) % workLifeImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${tradingImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <h1>
            Pioneering Algorithmic Finance.
            <br />
            Precision in Every Trade.
          </h1>
          <p>
            We combine cutting-edge technology and human ingenuity to solve the
            most complex challenges in financial markets.
          </p>
          <a href="/about" className="btn">
            Discover Our Expertise
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-box">
          <h2>Seeded In 2023</h2>
          <p>
            Trade Sense was seeded by a group of four seasoned traders who
            crossed paths on a prominent trading platform.
          </p>
        </div>

        <div className="about-box">
          <h2>Evolving Ever Since</h2>
          <p>
            Our co-founders’ combined expertise, coupled with a relentless drive
            to stay ahead of market trends, has propelled the company to the
            forefront of the trading industry.
          </p>
        </div>

        <div className="about-box">
          <h2>Growth Trajectory</h2>
          <p>
            We relentlessly combine technology and expertise to seize industry
            opportunities and drive growth with unwavering determination.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-traders">
        <div className="experience-text">
          <h2>Building a Legacy in Trading</h2>
          <p>
            For over a decade, we have been shaping the financial markets with
            our expertise in algorithmic trading and market-making strategies.
            Our team of skilled traders and technologists continually push
            boundaries to deliver high-performance trading solutions.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Traders Associated</p>
            </div>
          </div>
        </div>

        <div className="experience-image">
          <img src={experienceImage} alt="Trading Experience" />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                <value.icon />
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK LIFE */}
      <section className="work-life">
        <div className="work-life-text">
          <h2>Work Life at Trade Sense</h2>
          <p>
            At Trade Sense, we create a dynamic and collaborative
            environment where innovation thrives. Our workplace encourages
            growth, teamwork, and a balance between professional and personal
            life.
          </p>
        </div>

        <div className="work-life-slideshow">
          <img
            src={workLifeImages[currentWorkLifeIndex]}
            alt="Work Life"
          />
          <div className="dots">
            {workLifeImages.map((_, index) => (
              <span
                key={index}
                className={
                  index === currentWorkLifeIndex ? "dot active" : "dot"
                }
                onClick={() => setCurrentWorkLifeIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
