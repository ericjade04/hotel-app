import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import aboutImage from "../assets/images/about-image.jpg";


const About = () => {
  return (
    <>
      <NavBar />
      <main>
        <article className="about-article">
          <figure>
            <img src={aboutImage} alt="Hotel" />
          </figure>
          <section className="about-mission">
            <header>
              <h1>Discover Unmatched Comfort: Where Excellence Meets Hospitality</h1>
            </header>
            <p>
              Our mission is to provide an exceptional hospitality experience, where excellence and quality are seamlessly woven into every aspect of our service. We are dedicated to offering unmatched comfort to our guests, ensuring their stay is nothing short of extraordinary. By carefully selecting top-tier hotels and prioritizing excellence in service, we strive to create a welcoming environment that exceeds expectations and leaves a lasting impression. 
            </p>
            <br />
            <p>
              Our commitment to excellence and hospitality drives us to consistently deliver personalized and memorable experiences, making us the preferred choice for discerning travelers seeking the utmost in comfort and satisfaction.
            </p>
            <div>
              <h1>Unveil Your Dream Destination. Embrace Exquisite Hospitality.</h1>
              <button>Explore our hotel</button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
};


export default About;