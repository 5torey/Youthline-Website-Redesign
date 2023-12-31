import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Post.scss'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;


const Post = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  
  const endpoint = `${baseUrl}/posts/${id}?_embed`
  
  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      console.log(res)
      setPost(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [id])

  console.log(post);

  if (loading) {
    return <>Loading...</>
  }
  
  return (
   <div className='container'>
      <h2>Single Post:</h2>
      <div key={post.slug} className="post-container">
          <h4 id='post-title' className="post-title">{post.title.rendered}</h4>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <div>Key: {post.slug}</div>
      </div>
    </div>
 );
}

export default Post;