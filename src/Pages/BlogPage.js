import React, { useEffect, useState } from 'react';
import { NavLink , useParams } from 'react-router-dom';

import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import './Landing.css';
import './AllPage.css';
import './BlogPage.css';
import { Parallax } from 'react-parallax';
import { IoIosArrowForward , IoIosArrowBack } from 'react-icons/io';

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
  const [blogList, setBlogList] = useState(null);
  const [blogIndex, setBlogIndex] = useState(0);
  //  const [nextBlogUrl, setNextBlogUrl] = useState()
  //  const [lastBlogUrl, setLastBlog] = useState();

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
      .then((data) => setBlogData(data[0]))
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
      .then(
        (data) => setBlogList(data)
        // thisFunction()
      )
      .catch(console.error);
  }, []);

  //  const thisFunction = () => {                            // same as below, different method
  //   const isCurrent = (element) => element.slug === slug
  //   const currentIndex = blogList.findIndex(isCurrent)
  //   setBlogIndex(currentIndex + 1)
  //   console.log(blogIndex)
  // }

  // const tryFunc = () => {   // trying to get a blog index to tell whether it is the first or last and base forward and backward buttons on that
  //   const isBlog = (element) => element.slug = slug
  //   const currentIndex = blogList.findIndex(isBlog)
  //   setBlogIndex(currentIndex + 1)

  // }

  const dateFunc = () => {
    const date = blogData.publishedAt.slice(0, 10);

    const blogDate = new Date(date);
    const nowDate = new Date();
    const diff = nowDate.getTime() - blogDate.getTime();
    const msInDay = 1000 * 3600 * 24;
    const total = diff / msInDay;
    const days = Math.floor(total);
    return days;
  };

  const showNextBlog = () => {
    // returns the name of the next blog to append to next blog url
    const isCurrent = (element) => element.slug === slug; // was =
    const blogNum = blogList.findIndex(isCurrent);
    if (blogNum !== blogList.length - 1) {
      const nextBlog = blogList[blogNum + 1].slug.current;
      console.log(nextBlog);
      return nextBlog;
    } 
      console.log('youre already at the end');
    
  };

  const showPrevBlog = () => {
    // returns the nane of the previouw blog to append to the previous blog url
    const isCurrent = (element) => element.slug === slug; // was =
    const blogNum = blogList.findIndex(isCurrent);
    if (blogNum !== 0) {
      return blogList[blogNum - 1].slug.current;
    } 
      console.log('youre at zero bro!');
    
  };

  if (!blogData) return <div>Loading...</div>;

  return (
    <div className="blogPageContainer">
      <Parallax bgImage={blogData.mainImage.asset.url} strength={500}>
        <div className="image-cover">
          <div style={{ height: 600 }}>
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>{blogData.title}</h1>
            </div>
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
            <p>{`${dateFunc()  } ` + `days ago`}</p>
          </div>
          <BlockContent
            blocks={blogData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
            className="workBody"
          />

          <div className="directButtonContainer">
            <div className="prevButtonContainer">
              <a>
                <IoIosArrowBack className="arrowed" />
                <p>Prev Blog</p>
              </a>
            </div>

            <div className="nextButtonContainer">
              <a href="">
                <p>Next Blog</p>
                <IoIosArrowForward className="arrowed" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button style={{ height: '3rem', width: '8rem' }} onClick={showNextBlog}>
        Fuck You
      </button>

      <Footer />
    </div>
  );
};

export default BlogPage;
