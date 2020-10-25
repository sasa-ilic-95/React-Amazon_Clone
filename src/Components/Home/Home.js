import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src={require("../../Assets/Img/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg")}
                    alt="banner"
                />

                <div className="home_row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image={require("../../Assets/Img/51Zymoq7UnL._AC_SY400_.jpg")}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image={require("../../Assets/Img/81O+GNdkzKL._AC_SX450_.jpg")}
                    />
                    <Product
                        id="58562634"
                        title="Apple AirPods with Charging Case (Wired)"
                        price={101.15}
                        rating={5}
                        image={require("../../Assets/Img/AirPods.JPG")}
                    />
                    <Product
                        id="00579862"
                        title="Nintendo Switch Pro Controller"
                        price={56.99}
                        rating={4}
                        image={require("../../Assets/Img/41lo7JOm0UL._AC_US218_.jpg")}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image={require("../../Assets/Img/71Swqqe7XAL._AC_SX466_.jpg")}
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image={require("../../Assets/Img/P6LTG_SQ1_0000000071_CHARCOAL_SLf.jpg")}
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image={require("../../Assets/Img/816ctt5WV5L._AC_SX385_.jpg")}
                    />
                    <Product
                        id="884562358"
                        title="Lenovo IdeaPad 3 14 Laptop, FHD 1920 x 1080 Display, AMD Ryzen 5 3500U"
                        price={299.99}
                        rating={4}
                        image={require("../../Assets/Img/71qWXG8fdiL._AC_UL270_SR270,270_.jpg")}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="324569110"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image={require("../../Assets/Img/6125mFrzr6L._AC_SX355_.jpg")}
                    />
                    <Product
                        id="90829332"
                        title="Sceptre 34-inch Curved UltraWide 21: 9 Creative LED Monitor 2560x1080 Frameless HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C345W-2560UN)"
                        price={296.05}
                        rating={3}
                        image={require("../../Assets/Img/71VyzCYM6fL._AC_UY218_.jpg")}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
