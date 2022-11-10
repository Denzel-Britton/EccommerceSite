import React from 'react'
import './Home.css'
import Product from './Product';



function Home() {
 
  return (
   
    <div className='home'>
      
     
<div className="home_container">
<h1> STILL BEING WORKED ON. FEEL FREE TO LOOK AROUND </h1>
    <img className='home_image'
    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
    />

    <div className="home_row">
    
    
       <Product  id="1" title="WiFi enabled Complete set of Dell OptiPlex Dual Core Windows 10 Desktop PC Computer" image="https://images-na.ssl-images-amazon.com/images/I/41x81v5aR8L._AC_.jpg" price={85} rating={5} />
       <Product  id="2" title="USB C Cable, JSAUX (2m 2-Pack) Type C Fast Charger Charging Cable Braided " image="https://images-na.ssl-images-amazon.com/images/I/61kEKkw2D%2BL._SX425_.jpg" price={6.99} rating={5} />
   </div>
   <div className="home_row">
   <Product id="3" title={`Samsung 50" TU8000 HDR Smart 4K TV with Tizen OS [Energy Class A]`} image="https://images-na.ssl-images-amazon.com/images/I/81wu6OvfcNL._AC_SX679_.jpg" price={450} rating={4} />
   <Product id="4" title="Google Chromecast Smart TV Streaming Stick" image="https://images-na.ssl-images-amazon.com/images/I/51eLlTTHpAL._AC_SL1000_.jpg" price={3.99} rating={1} />
   <Product id="5" title={`ELEPHAS Projector, GC333 Portable Projector with 4500 Lumens and Full HD`} image="https://images-na.ssl-images-amazon.com/images/I/61CDSCGhozL._AC_SX679_.jpg" price={29.99} rating={4} />
 

   </div>
   <div className="home__row"> 
   
     
        </div>

        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
    
    </div>
    <div className="home_row">
                <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor" 
                price={199.99} 
                image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL.AC_SX466_.jpg"} 
                rating={3}
                 />
                <Product
                id="2344593"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
                price={98.99} 
                image={"https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"} 
                rating={5}
                 />
                <Product 
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                price={598.99} 
                image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"} 
                rating={4}
                />
            </div>
</div>
    </div>
  );
}
export default Home;