import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import './Landing.css';
import './AllPage.css';
import './BlogPage.css';
import { Parallax } from 'react-parallax';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

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
      .then((data) => {
        setBlogData(data[0]);
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
      .then((data) => setBlogList(data))
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

  if (!blogData) return <div>Loading...</div>;

  const generateNextURL = () => {
    let targetIndex;

    if (blogIndex + 1 > blogList.length - 1) {
      targetIndex = 0;
    } else {
      targetIndex = blogIndex + 1;
    }

    if (blogList.length > 0) {
      const title = blogList[targetIndex].slug.current;
      return `http://localhost:3000/blog/${title}`;
    }
  };

  const generatePrevURL = () => {
    let targetIndex;

    if (blogIndex  < blogList.length - 1) {
      targetIndex = 0;
    } else {
      targetIndex = blogIndex - 1;
    }

    if (blogList.length > 0) {
      const title = blogList[targetIndex].slug.current;
      return `http://localhost:3000/blog/${title}`;
    }
  };

  return (
    <div className="blogPageContainer">
      <Parallax className="testBanner" bgImage={blogData.mainImage.asset.url} strength={500}>
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
            <p>{`${dateFunc()} ` + `days ago`}</p>
          </div>
          <BlockContent
            blocks={blogData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
            className="workBody"
          />

          <div className="directButtonContainer">
            <div className="prevButtonContainer">
              <a className="de-underline"href={generatePrevURL()}>
                <IoIosArrowBack className="arrowed" />
                <p>Prev Blog</p>
              </a>
            </div>
            
            <div className="nextButtonContainer">
              <a className="de-underline"href={generateNextURL()}>
                <p>Next Blog</p>
                <IoIosArrowForward className="arrowed" />
              </a>
            </div>


          </div>
        </div>
      </div>

    

      <Footer />
    </div>
  );
};

export default BlogPage;
