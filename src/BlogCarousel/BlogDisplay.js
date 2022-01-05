import React, {useState, useEffect} from 'react';
import './BlogDisplay.css';
import { NavLink } from 'react-router-dom';


const BlogDisplay = (props) => {

  const [timeDisplay, setTimeDisplay] = useState("")
  const [time, setTime] = useState()

  const blogDateFunc = () => {
    const {date} = props;
    const blogDate = new Date(date);
    const nowDate = new Date();
    const diff = nowDate.getTime() - blogDate.getTime();
    const msInDay = 1000 * 3600 * 24;
    const total = diff / msInDay;
    const days = Math.floor(total);
    return days;
  };

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  useEffect(() => {
    const {date} = props
    const blogDate = new Date(date)
    const blogTime = blogDate.getTime()
    const now = new Date();
    const time = now.getTime();
    if (time - blogTime <= 3600000) {
      setTimeDisplay('minutesAgo');
      setTime(time - blogTime);
    } else if (time - blogTime <= 86400000) {
      setTimeDisplay('today');
      setTime(time - blogTime);
    } else if (time - blogTime <= 604800000) {
      setTimeDisplay('thisWeek');
      setTime(time - blogTime);
    } else if (time - blogTime<= 31536000000) {
      setTimeDisplay('thisYear');
      setTime(time - blogTime);
    } else {
      setTimeDisplay('longTime');
      setTime(time - blogTime);
    }
  }, [props]);

  return (
    <div className='blogDisplay__container' >
      <div className="blogImageContainer">
        <img src={props.image} alt="oops" />
      </div>
      <div className="blogDetails">
      <div className="blogDisplayTitle">
        <p>{props.title}</p>
      </div>
      {props.children}
      </div>
      {/* <div className="blogDate"> */}

      {timeDisplay && time && (
              <div className="blogDate">
                {timeDisplay === 'minutesAgo' && (
                  <p>{Math.floor(time / 60000)} MINUTES AGO</p>
                )}
                {timeDisplay === 'today' && (
                  <p>{Math.floor(time / 3600000)} HOURS AGO</p>
                )}
                {timeDisplay === 'thisWeek' && (
                  <p>{Math.floor(time / 86400000)} DAYS AGO</p>
                )}
                {timeDisplay === 'thisYear' && (
                  <p>
                    {months[parseInt(props.date.slice(5, 7) - 1)]} {parseInt(props.date.slice(8, 10))} {props.date.slice(0, 4)}
                  </p>
                )}
                {timeDisplay === 'longTime' && (
                  <p>
                    {months[parseInt(props.date.slice(5, 7) - 1)]} {parseInt(props.date.slice(8, 10))} {props.date.slice(0, 4)}
                  </p>
                )}
              </div>
            )}





        {/* <p>{`${blogDateFunc()} ` + `Days Ago`}</p> */}
      {/* </div> */}
      <NavLink to={`/blog/${props.slug}`}className="blogDisplayButton">
        <button type="button">Read More</button>
      </NavLink>
    </div>
  );
};

export default BlogDisplay;
