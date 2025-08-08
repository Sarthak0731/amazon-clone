import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>

      <div className='home_container'>
        <img
         className='home_image'
         src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/PD25/Payal/GW-Hero-Pc-01_GOLD._CB790067108_.jpg" alt=""/>
         <div className='home_row'>
          <Product title='Daikin 1.5 Ton 3 Star Inverter Split AC (Copper, PM 2.5 Filter, Triple Display, Dew Clean Technology, Coanda Airflow, 2024 Model, MTKL50U, White)' 
          price="442.11"
          rating={4} 
          image="https://m.media-amazon.com/images/I/61JyEPdw3UL._SL1500_.jpg"/>
          <Product title='Philips HL7756/01 750 Watt Mixer Grinder, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)
          '
          price="34.98" 
          rating={4}
          image="https://m.media-amazon.com/images/I/71mL2bdyRdL._SL1500_.jpg"/>
          
          
          

         </div>
         <div className='home_row'>
          <Product
          title='Samsung Galaxy Watch 7 (40mm, Cream, BT+LTE) with 3nm Processor,IP68..'
          
          price="349.66" 
          rating={5}
          image="https://m.media-amazon.com/images/I/719Y7BShE+L._SL1500_.jpg"/>
          <Product
          title='TAPARIA Screw Driver Set with Bulb - 840 (Neon, Silver and Green)'
          price="3.36" 
          rating={4}
          image="https://m.media-amazon.com/images/I/81NuX5ddHkL._SL1500_.jpg"
          />
          <Product
          title='Amazon Echo (4th Gen) | Premium sound powered by Dolby and Alexa (Black)'
          price="58.28"
          rating={4}
          image="https://m.media-amazon.com/images/I/61dgl2srHDL._SY355_.jpg"
          />
          
          
         </div>
         <div className='home_row'>
          <Product
          title='Samsung 34"(86.42cm) Odyssey G5 Curved Gaming Monitor|WQHD 3440 x 1440|1000R|165Hz|1ms|21:9|Wall Mountable|FreeSync Premium|Ports-DP, HDMI, Headphone|DP Cable|Eye-Saver|LC34G55TWWWXXL|Black'
          price="347.33"
          rating={4}
          image="https://m.media-amazon.com/images/I/71it2biogSS._SL1500_.jpg"
          />
          <Product
          title='Xiaomi Pad 7 Nano Texture Display [Smartchoice] | Snapdragon 7+ Gen 3| 3.2K Display (28.44 cm /11.2") Tablet| 12GB, 256GB| Anti-Reflective| Anti-Glare| HyperOS 2| Dolby Vision Atmos | Graphite Grey'
          price="361.32"
          rating={4}
          image="https://m.media-amazon.com/images/I/71yZPdov-SL._SL1500_.jpg"
          />

          
         </div>
        


      </div>
      
    </div>
  )
}

export default Home
