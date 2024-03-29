import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import './Landing.css';
import './AllPage.css';
import './BlogPage.css';
import { Parallax, Background } from 'react-parallax';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import LoadingSpinner from '../Reusable/Loading/LoadingSpinner';
import Footer from '../Nav/Footer';
import NavBar from '../Nav/NavBar';
import sanityClient from '../client';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const BlogPage = (props) => {
  const [blogData, setBlogData] = useState(null);
  const { slug } = useParams();
  const [blogList, setBlogList] = useState([]);
  const [blogIndex, setBlogIndex] = useState(0);
  const [time, setTime] = useState();
  const [timeDisplay, setTimeDisplay] = useState();

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        slug,
        description,
        publishedAt,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`
      )
      .then((data) => {
        console.log(data[0]);
        setBlogData(data[0]);

        const date = data[0].publishedAt.slice(0, 10);
        const blogDate = new Date(date);
        const blogTime = blogDate.getTime();
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
        } else if (time - blogTime <= 31536000000) {
          setTimeDisplay('thisYear');
          setTime(time - blogTime);
        } else {
          setTimeDisplay('longTime');
          setTime(time - blogTime);
        }
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          description,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => {
        setBlogList(data);
        console.log(data);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    let target;
    let currentIndex = 0;
    const isCurrent = (element) => {
      const blogSlugTitles = blogList.map((post) => post.slug.current);

      const currentBlog = blogList.filter(
        (post) => post.slug.current === element.slug.current
      );

      const currentBlogTitle = currentBlog[0].slug.current;
      const location = blogSlugTitles.indexOf(currentBlogTitle);

      currentIndex = location;
    };

    if (blogData !== null) {
      target = isCurrent(blogData);
    }

    setBlogIndex(currentIndex);
  }, [blogList, slug]);

  



  if (!blogData)
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );

  const generateNextURL = () => {
    let targetIndex;

    if (blogIndex + 1 > blogList.length - 1) {
      targetIndex = 0;
    } else {
      targetIndex = blogIndex + 1;
    }

    if (blogList.length > 0) {
      const title = blogList[targetIndex].slug.current;
      console.log(title);
      console.log(`${process.env.REACT_APP_BLOG_DIRECT_URL}${title}`);
      return `https://nervous-agnesi-29fb05.netlify.app/blog/${title}`;
    }
  };

  const generatePrevURL = () => {
    let targetIndex;

    if (blogIndex < blogList.length - 1) {
      targetIndex = 0;
    } else {
      targetIndex = blogIndex - 1;
    }

    if (blogList.length > 1) {
      const title = blogList[targetIndex].slug.current;
      return `https://nervous-agnesi-29fb05.netlify.app/blog/${title}`;
    }
  };

  return (
    <div className="blogPageContainer">
      <Parallax className="testBanner" strength={500}>
        <Background className="custom-bg">
          <div className="fuckImage_container">
            <img
              src={blogData.mainImage.asset.url}
              alt="fill murray"
              className="fuckImage"
            />
            <div className="image-cover"></div>
          </div>
        </Background>

        <div className="height-controller">
          <NavBar />
          <div style={introStyle} className="pageHead">
            <h1>{blogData.title}</h1>
          </div>
        </div>
      </Parallax>
      <div className="bodyParent">
        <div className="blogBodyContainer">
          <div className="author-blog">
            <div className="author-pic-container">
              <img src={urlFor(blogData.authorImage).url()} alt="" />
            </div>
            <h4>{blogData.name}</h4>

            {timeDisplay && time && (
              <div className="blogPageTime">
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
                    {months[parseInt(blogData.publishedAt.slice(5, 7) - 1)]}{' '}
                    {parseInt(blogData.publishedAt.slice(8, 10))}{' '}
                    {blogData.publishedAt.slice(0, 4)}
                  </p>
                )}
                {timeDisplay === 'longTime' && (
                  <p>
                    {months[parseInt(blogData.publishedAt.slice(5, 7) - 1)]}{' '}
                    {parseInt(blogData.publishedAt.slice(8, 10))}{' '}
                    {blogData.publishedAt.slice(0, 4)}
                  </p>
                )}
              </div>
            )}

            {/* <p>{`${dateFunc()} ` + `days ago`}</p> */}
          </div>
          <BlockContent
            blocks={blogData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
            className="workBody"
          />

          <div className="directButtonContainer">
            <div className="prevButtonContainer">
              
                <a className="de-underline" href="/blog">
                  <IoIosArrowBack className="arrowed" />
                  <p>Back to Blogs</p>
                </a>
            
            </div>

            {/* <div className="nextButtonContainer">
              {blogList.length > 1 && blogIndex < blogList.length - 1 && (
                <a className="de-underline" href={generateNextURL()}>
                  <p>Next Blog</p>
                  <IoIosArrowForward className="arrowed" />
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
