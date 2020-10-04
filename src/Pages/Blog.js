import React, {useState, useEffect} from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import { Parallax } from 'react-parallax';
import Blogimg from '../Resources/blog.jpg';
import Relationshipimg from '../Resources/relationshipblog.jpg';
import Restaurant from '../Resources/restaurantblog.jpg';
import Bar from '../Resources/brew.jpg';
import BlogTemplate from '../Reusable/Blog/BlogTemplate';
import './Landing.css';
import './AllPage.css';
import './Blog.css';
import {useHttpClient} from '../Reusable/Hooks/http-hook';

// const DUMMYBLOGS = [
//   {
//     title: "Understanding the Relationship Between Client and Broker",
//     date: "3/5/2020",
//     content: "The most important dynamic between any client broker relationship is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus orci ac auctor augue mauris. Urna molestie at elementum eu facilisis sed odio. Diam quis enim lobortis scelerisque fermentum. Vestibulum sed arcu non odio euismod lacinia. Eu scelerisque felis imperdiet proin fermentum leo. Massa eget egestas purus viverra accumsan in nisl nisi. Sit amet venenatis urna cursus eget. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nibh nisl condimentum id venenatis. Lobortis elementum nibh tellus molestie. Tellus elementum sagittis vitae et leo duis ut diam. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Amet volutpat consequat mauris nunc congue nisi. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Turpis cursus in hac habitasse. Tortor at auctor urna nunc id. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Sed ullamcorper morbi tincidunt ornare. Turpis egestas maecenas pharetra convallis. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Venenatis a condimentum vitae sapien. Dolor sit amet consectetur adipiscing elit ut aliquam. Commodo sed egestas egestas fringilla phasellus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Amet est placerat in egestas erat imperdiet sed. Tincidunt eget nullam non nisi est sit amet. A diam maecenas sed enim. Sed cras ornare arcu dui vivamus arcu.",
//     image: Relationshipimg,
//     preview: "This article discusses how the client broker relationship can be maximized."
//   },
//   {
//     title: "The Importance of Location in House Hunting",
//     date: "3/7/2020",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Facilisi etiam dignissim diam quis enim lobortis. Sapien nec sagittis aliquam malesuada. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Convallis posuere morbi leo urna molestie at elementum. Arcu non odio euismod lacinia at quis risus. Ac orci phasellus egestas tellus rutrum. Erat velit scelerisque in dictum non. Scelerisque eu ultrices vitae auctor eu. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Donec massa sapien faucibus et molestie ac feugiat sed. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Pellentesque sit amet porttitor eget dolor. Lorem ipsum dolor sit amet consectetur adipiscing elit. Fringilla urna porttitor rhoncus dolor purus non enim. Augue eget arcu dictum varius duis at.",
//     image: Restaurant,
//     preview: "Here I discuss the importance of being close to your favorite businesses and locations"
//   },
//   {
//     title: "On the Hunt for Your Locale's Best Brews",
//     date: "3/10/2020",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Odio aenean sed adipiscing diam. Euismod nisi porta lorem mollis aliquam ut. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sed pulvinar proin gravida hendrerit lectus. Id volutpat lacus laoreet non curabitur. Donec et odio pellentesque diam. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Lacus suspendisse faucibus interdum posuere lorem ipsum. Ultricies leo integer malesuada nunc vel risus commodo. Facilisis leo vel fringilla est. Pharetra sit amet aliquam id diam maecenas ultricies mi. Porttitor eget dolor morbi non. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Velit sed ullamcorper morbi tincidunt ornare massa eget. Nam at lectus urna duis convallis convallis tellus id interdum. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Sit amet nisl suscipit adipiscing bibendum est ultricies. Ante in nibh mauris cursus mattis molestie. Sollicitudin nibh sit amet commodo. Mauris nunc congue nisi vitae suscipit tellus mauris. Massa tincidunt dui ut ornare lectus sit amet est. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Pellentesque nec nam aliquam sem et tortor. Erat velit scelerisque in dictum non consectetur a erat. Sapien eget mi proin sed libero enim sed faucibus turpis. Urna neque viverra justo nec ultrices dui sapien eget. Leo vel orci porta non pulvinar neque laoreet suspendisse. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Rutrum quisque non tellus orci ac auctor augue mauris augue. Senectus et netus et malesuada fames. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. ",
//     image: Bar,
//     preview: "Come see my list of personal favorites when it comes to locally made spirits!"
//   }


//]

const introStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  color: "white",
  maxWidth: "40rem",
  textAlign: "center"
};

const Blog = props => {

const { isLoading, error, sendRequest, clearError } = useHttpClient();
const [blogs, setBlogs] = useState()

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const responseData = await sendRequest('http://localhost:5000/api/blogs'); //doesnt need method or headers because it is default get 

      setBlogs(responseData.allBlogs)
    } catch (err) {}
  };
  
  fetchBlogs()
  
}, [sendRequest]);



  return (
    <div className="blog-container">
    <Parallax bgImage={Blogimg} strength={500}>
    <div className="image-cover">
    <div style={{height: 600}}>
    <NavBar />
    <div style={introStyle} className="pageHead">
      <h1>Blog Title</h1>
      <p>Something About This Blog</p>
    </div>
    </div>
    </div>
    </Parallax>

    <div className="blogTitle"><h1>Follow Me on My Journey...</h1></div>
    <div className="blogInfo">
    <div className="blogBlock"><p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p></div>
    <div className="blogBlock"><p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p></div>
    </div>

    {!isLoading && blogs && <div className="blog-list-container">
      {blogs.map(blog => (
        <BlogTemplate
        key={blog.title} 
        image={blog.image}
        content={blog.content}
        date={blog.date}
        title={blog. title}
        preview={blog.description}
        />

      ))}
      

    </div>}
    
    
    
    
    <Footer />
    </div>
  )
}

export default Blog;
