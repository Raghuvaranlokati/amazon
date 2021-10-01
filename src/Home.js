import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container"> 
            <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            <div className="home_row">
                <Product id="12321341"
                title="The learn startup"
                price={29.99} 
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"  
               rating={5} />
                <Product 
                
                id="49538095"
                title="Kenwood KMix stand mixer for baking"
                price={239.0}
                image="http://images-na.ssl-image-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
                rating={4}
                />

            </div>    

            <div className="home_row">
                <Product id="49538094"
                title="Samsung led gaming monitor"
                price={199.0}
                image="http://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={4}/>
                <Product id="23445930"
                title="amazon echo"
                price={98.99}
                image="http://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
                rating={4}/>
                <Product id="3254354345"
                title="new app ipad pro"
                price={598.0}
                image="http://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                rating={4}/>

            </div>

            <div className="home_row">
                <Product id="90829332"
                title="Kenwood KMix stand mixer for baking"
                price={239.0}
                image="http://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
                
                rating={4}/>
            </div>

            </div>
        </div>
    );
}

export default Home;
