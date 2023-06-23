import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Home() {
  return(
    <>
      <NavBar />
      <main className="home-main">
        <section>
          <h1>Unveil your travel dreams, we'll unveil the perfect hotel for you!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate expedita dolorum, illum aspernatur nobis?</p>
          <button>Find Hotel</button>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default Home;