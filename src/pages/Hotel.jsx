import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import data from "../assets/data/data";
import HotelCard from "../components/HotelCard";
import { useState } from "react";



const Hotel = () => {
  const [hotelData, setHotelData] = useState(data);


  const handleAbove1000 = () => {
    let newData = hotelData.filter((data)=>{
      return data.price >= 1000;
    });

    if(newData.length === 0){
      let newData = data.filter((data)=>{
        return data.price >= 1000;
      });

      return setHotelData(newData);
    }
    
    setHotelData(newData);
  };

  const handleBelow1000 = () => {
    let newData = hotelData.filter((data)=>{
      return data.price < 1000;
    });

    if(newData.length === 0){
      let newData = data.filter((data)=>{
        return data.price < 1000;
      });

      return setHotelData(newData);
    }

    setHotelData(newData);
  };
  return (
    <>
      <NavBar />
      <main className="hotel-main">
        <header>
          <h1>Explore our hotel options:</h1>
          <button onClick={handleAbove1000}>Above 1000</button>
          <button onClick={handleBelow1000}>Below 1000</button>
          <button onClick={()=>{setHotelData(data)}}>Clear</button>
        </header>
        <section>
          {hotelData.map((data)=>{
            const {id} = data;
            return(
              <HotelCard {...data} key={id}/>
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  )
};



export default Hotel;