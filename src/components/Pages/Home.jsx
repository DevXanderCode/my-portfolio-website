import React from "react";
import Header from "../common/Header";
import image from "../assets/images/header-bg.jpg";
// re-useable component....
import Services from "../common/Services";
import Portfolio from "../common/Portfolio";

const Home = () => {
    return(
        <div>
            <Header 
                title="Welcome To Our Studio!" 
                subtitle="IT'S NICE TO MEET YOU" 
                link="/services"
                buttonText="Tell Me More"
                image={image}
                showButton={true}
            />
            <Services />
            <Portfolio />
        </div>
    );
}

export default Home;