import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/work.jpg";
import image2 from "assets/img/chart.jpg";
import image3 from "assets/img/refer.jpg";

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <Carousel {...settings}>          
            <div>  
              <img
                src={image1}
                alt="First slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h1>    
                    <small style={{ fontSize:'50px'}}>
                        Let your money work for you! Invest in the future of currency. Invest in Cryptocurrency.
                    </small>
                </h1>
              </div>              
            </div>
            <div>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h1>    
                    <small style={{color:"white", fontSize:'50px'}}>
                        Invest Now! Earn 10% ROI monthly.
                    </small>
                </h1>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption" >
                <h1>    
                    <small style={{ fontSize:'50px'}}>
                    Refer Friends & Associates! 
                    Earn additional 1% commission monthly
                    </small>
                </h1>
              </div>
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  );
}