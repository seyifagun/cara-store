import {
    ArrowBackIosNew,
    ArrowForwardIos,
  } from "@mui/icons-material";
  import "@styles/WorkCard.scss";
  import { useState } from "react";
  import images from "../public/images";
  //import { CardImage } from "./HeroImages"
  
  const DummyCard = ({ img, amount, title, creator, category, alt }) => {
    //console.log(work);
    /* SLIDER FOR PHOTOS */
    const [currentIndex, setCurrentIndex] = useState(0);

    const CardImages = [
        {
          image : 'public/Afro_art/3_women.jpg',
        },
        {
          image : 'public/Afro_art/drummer_boys.jpg',
        }

      ]

    return (
      <div
        className="work-card"
        onClick={() => {
        }}>
        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {CardImages.map((photo, index) => (
              <div className="slide" key={index}>
                <img src={photo.image} alt="work" />
                <div
                  className="prev-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevSlide(e);
                  }}
                >
                  <ArrowBackIosNew sx={{ fontSize: "15px" }} />
                </div>
                <div
                  className="next-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextSlide(e);
                  }}
                >
                  <ArrowForwardIos sx={{ fontSize: "15px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="info">
          <div>
            <h3>{title}</h3>
            <div className="creator">
              <img src={img} alt={alt} />
              <span>{creator}</span> in <span>{category}</span>
            </div>
          </div>
          <div className="price">${amount}</div>
        </div>
      </div>
    );
  };
  
  export default DummyCard;
  