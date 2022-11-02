import React from 'react'
import './Home.css'
import Product from './Product';


function Home() {
  return (
    <div className='home'>
<div className="home_container">
    <img className='home_image'
    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
    alt="the bacground"  />

    <div className="home_row">
     
    <Product 
    id=""
    title= "2022 Air Jordan 4 Retro SE 'Black Canvas"
     price={431.00}
    image= {"https://www.snksus.com/pub/media/catalog/product/cache/d07feaef194ff8656e6d5cfff9dd3cf0/a/i/air-jordan-4-black-canvas-dh7138-006-1_1.jpg"}
    rating={4} />


    <Product
    id=""
    title="Jordan 1 Retro High Chicago 2015 Edition "
    price={235.00}
    rating={5}
    image="https://cdn-images.farfetch-contents.com/13/15/76/97/13157697_21516295_600.jpg"
    />
      
    </div>

    <div className="home_row">
    <Product
    id=""
    title="2021
    Dunk Low 'Black White'"
    rating={2}
    image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/4371ac31-97cd-4057-bd6e-41440e39f3b9/dunk-low-big-kids-shoes-Ss5wx2.png"
    />
    {/* <Product
    id=""
    title=""
    rating={}
    image=""
    />
     <Product
     id=""
     title=""
     rating={}
     image=""
     />
    </div>

    <div className="home_row">
    <Product 
    id=""
    title=""
    rating={}
    image=""
    /> */}
    
    </div>
</div>
    </div>
  );
}
export default Home;