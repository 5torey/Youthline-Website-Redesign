import {useState, useEffect} from 'react'
import axios from 'axios';
import Post from './Post';


const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Advice = () => {

  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const endpoint = `${baseUrl}/advice?_embed`

 
  
  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      console.log(res)
      setPosts(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  function getFeaturedImage(post) {

          if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
              return post._embedded['wp:featuredmedia'][0].source_url;
  
          } else {
  
              return 'https://via.placeholder.com/150'
  
          }
  
      }

  const Posts = () => {
    const mappedPosts = posts.map((post, index) => {
      return (
        <div key={post.slug + "-" + index} className="post-container">
        {/* Card 1 */}  
        <div className="advice-card">
        <div className="service-img-1">
        <img src={getFeaturedImage(post)} alt="" id='postimg'/>
        </div>
        <h4 className="title">{post.title.rendered}</h4>
        <ul>
          <li key={post.slug + "-" + index}>
            {/* <a href={`#/post/${post.id}`}>Read More...</a> */}
            <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
          </li>
          </ul>
        </div>

        </div>
      )
    })
    
    return (
      <>
        {/* All our posts are here! */}
        {mappedPosts}
      </>
    )
  }

  return (
    <div className="advice-container">
    <h2 id='adviceTitle' className='advice-title'>Advice | Kupu Āwhina</h2>
    <div className="advice-sub-container">
    {!loading && <Posts/>}
    </div>
    </div>

  )
}

export default Advice