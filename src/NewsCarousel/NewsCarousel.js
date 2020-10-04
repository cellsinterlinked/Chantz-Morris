import React, {useState} from 'react'
import NewsDisplay from './NewsDisplay';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import './NewsCarousel.css';
import news0 from '../Resources/news0.jpg';
import news1 from '../Resources/news1.jpg';
import news2 from '../Resources/news2.jpg';
import news3 from '../Resources/news3.jpg';
import news4 from '../Resources/news4.jpg';
import news5 from '../Resources/news5.jpeg';

const dummyStories = [
  {
   id: 0,
   image: news0,
   title: "How Solar Is Changing Your Utility Costs",
   date: "April 12th 2020" 
  },
  {
    id: 1,
    image: news1,
    title: "How Your Decor Tells You're A Hippy",
    date: "April 17th 2020" 
   },
   {
    id: 2,
    image: news2,
    title: "Weird 70's Cabinets In Expensive Houses",
    date: "April 24th 2020" 
   },
   {
    id: 3,
    image: news3,
    title: "Girl Was Actually Raised In A North Vernon Barn",
    date: "May 1st 2020" 
   },
   {
    id: 4,
    image: news4,
    title: "Is Your Kitchen So White It Hurts?",
    date: "May 4th 2020" 
   },
   {
    id: 5,
    image: news5,
    title: "Back Yard Big Enough For Bodies",
    date: "May 8thth 2020" 
   },
]

const NewsCarousel = props => {
  let itemArr = [
  <NewsDisplay 
   image={dummyStories[0].image}
   title={dummyStories[0].title}
   date={dummyStories[0].date}
  />,
  <NewsDisplay
  image={dummyStories[1].image}
   title={dummyStories[1].title}
   date={dummyStories[1].date}
  />,
  <NewsDisplay
  image={dummyStories[2].image}
   title={dummyStories[2].title}
   date={dummyStories[2].date}
    />,
  <NewsDisplay
  image={dummyStories[3].image}
   title={dummyStories[3].title}
   date={dummyStories[3].date}
    />,
  <NewsDisplay
  image={dummyStories[4].image}
   title={dummyStories[4].title}
   date={dummyStories[4].date}
    />,
  <NewsDisplay
  image={dummyStories[5].image}
   title={dummyStories[5].title}
   date={dummyStories[5].date}
    />,
  
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (itemArr.length - 1)) : setX(x + 100);
    console.log(x);
  };

  const goRight = () => {
    x === -100 * (itemArr.length - 1) ? setX(0) : setX(x - 100);
    console.log(x);
  };

  return(
    <div className="newsCarousel__container">
      <button id="news-item-slider__goLeft" onClick={goLeft}><FaChevronLeft className="arrow" style={{height:"auto", width: "1.5rem", color: "black"}} /></button>
      <div className="item__slider">
      {itemArr.map((item, index) => {
        return(
          <div
            key={index}
            className="item__Slide"
            style={{ transform: `translateX(${x}%)`}}
          >
          {item}
          </div>
        );
      })}

      </div>
      <button id="news-item-slider__goRight" onClick={goRight}><FaChevronRight className="arrow" style={{height:"auto", width: "1.5rem", color: "black"}} /></button>

    </div>
  )
}

export default NewsCarousel;