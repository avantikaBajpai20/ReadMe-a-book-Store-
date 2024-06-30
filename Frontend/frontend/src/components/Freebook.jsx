import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json';
import Cards from './Cards';
function Freebook() {
    //step1: filter free category books
    //react ibrary - slick slider 
    const filterData = list.filter((data)=> data.category === "Free");//filter is a array method , it filters the data from our array according to the conditions 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                <p>Discover a world of learning opportunities with our free courses designed to help you acquire new skills 
                    and knowledge.  
                    Start your learning journey today and unlock your potential!
                </p>
            </div>
            <div>
                <Slider {...settings}>
                    {filterData.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>
        </div>
        
    </>
  )
};

export default Freebook
//for making cardss