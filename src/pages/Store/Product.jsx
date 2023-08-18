import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from 'react-helmet'

// Product page
const productsURL = import.meta.env.VITE_WC_PRODUCTS_URL;

const Product = (props) => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // product endpoint
  const endpoint = `${productsURL}/${id}`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                setProduct(res.data);
                setLoading(false);
                console.log(res.data);
              
            })
        .catch((err) => {
            console.log(err);
         
        })
    }, [endpoint])

    function getFeaturedImage(product) {
      if (product && product.images && product.images[0]) {
          return product.images[0].src;
      } else {
          return 'http://via.placeholder.com/150'
      }
  }


  return (
      <>
      <Helmet>
        <title>Youthline</title>
        <meta name='description' content='Youthline is a non-profit dedicated to providing free mental health resources and counselling to young people'/>  
        <meta name="keywords" content='youthline, mental health, donations, charity, youth, fundraising'/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.youthline.co.nz/"></meta>
      </Helmet>
      {!loading &&  
      <div className="single-product-container">
        <div className="product-description">
        {/* Product Name */}
        <h3 className='title'>{product.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        {/* Product Price */}
        <h5>${product.prices.price/100}</h5>
        {/* Add to Cart BTN */}
        <button>Add To Cart</button>
        </div>
        {/* Product Image */}
        <div className="product-image">
        <img className='product-image' src={getFeaturedImage(product)} alt='Product Image' />
        </div>
        </div>
          }
          </>
  )
  
}

export default Product;