import { useState, useEffect } from 'react';
import axios from "axios"
// Import Components
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';
import Advice from '../components/Advice';
import Footer from '../components/Footer';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Home = () => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const endpoint = `${baseUrl}/posts?_embed`
  
  
  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      console.log(res)
      setPosts(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  
  
  return (
   <div className='container' >
    <Hero/>
    <Services/>
    <Contact/>
    <About/>
    <Advice/>
   
    </div>
 );
}




export default Home;