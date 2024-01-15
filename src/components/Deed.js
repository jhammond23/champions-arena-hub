import React from 'react'
import Tilt from 'react-parallax-tilt';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook


const Deed = ({deed}) => {
  const navigate = useNavigate();  // Initialize the navigate function

  const goToInteractivePage = () => {
    navigate(`/deeds/${deed.name}/interactive`, { state: { flatImg: deed.flatImg } });
};

  let slides = [
    {
      key : 'photo1',
      content: <div className='carousel-img-background'>
                  <img className='carousel-img main-img' src={deed.threeDImg} alt="1" />
                </div>,
    },
    {
      key : 'photo2',
      content : <div className='carousel-img-background'>
                  <img className='carousel-img main-img' src={deed.Img} alt="2" />
                </div>,

    },
    {
      key : 'photo3',
      content : <InnerImageZoom className='carousel-img' src={deed.flatImg}  zoomSrc={deed.flatImg} alt='3'/>

    }
  ]

  return (
    <div className='r-deedOuterCont'>
      <div className='r-deedInfoCont'>
        <section id={deed.name} key={deed.id}>
          <div className='r-deedNameBanner'>
            <div className='r-deedName'>{deed.name}</div>
            <div className='r-deedDescription'>{deed.description}</div>
          </div>
          </section>
      </div>
    </div>
  )
}

export default Deed