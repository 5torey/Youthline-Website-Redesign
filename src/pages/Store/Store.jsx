import {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/Store.scss';

const Store = () => {

  // Product Page
  const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;

  const [donations, setDonations] = useState(null)
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${productsUrl}`)
        .then((res) => {

          // lists to separate product type
          const donationList = [];
          const productList = [];
          // looping over all products 
          res.data.forEach(product => {
            // checking category of each product
            product.categories.forEach(category => {
              // sorting product based on category of donation vs merchandise product
              if(category.name == 'Donation'){
                // pushing product to separate list based on category
                donationList.push(product)
              }
              // sorting merchandise
              else {
                productList.push(product) 
                console.log(product);
              }
              
            }) 
          })
            //  setting useState by list type
            setProducts(productList);
            setDonations(donationList)
            setLoading(false);
            
        })
      .catch((err) => console.error(err));

  }, [])
  

  const Products = ({ products }) => {
    const mappedProducts = products.map((product, index) => {

      function getFeaturedImage(product) {
                if (product && product.images && product.images[0]) {
                    return product.images[0].src;
                } else {
                    return 'http://via.placeholder.com/150'
                }
      }
      
      return (
        <Link className="product-link"
          to={`/product/${product.id}`}  key={index}>
          {/* Product Container */}
          <div className="product-container">
          {/* Product Image */}
          {/* <div className="product-image"> */}
            <img src={getFeaturedImage(product)} alt="Product Image" />
          {/* </div> */}
          {/* Detail Container */}
          <div className="details-container">
          <h4 id='prodname'className="name">{product.name}</h4>
          <h3 id='prodprice'className="name">${product.prices.price/100} {product.prices.currency_code}</h3>
          </div>
          {/* End of Product Container */}
          </div>
          </Link>
      )

    })

    return (
      <>{mappedProducts}</>
    )
  }

  return (
    
      <div className='store-container'>
        <div className="title-container">
          <h2 id='storetitle'>Youthline Store | Toa Raina Rangatahi </h2>
        </div>
        {!loading && 
        <>   
        <div className='donation-container'>
        <div className="title-container">
        <h3 id='subtitle'>Donate | Koha</h3>
        </div>
        <div className='prod-container'>
                {loading ? null : <Products products={donations}/>}
                </div>
          </div>
                 <div className="merchandise-container">
                  <div className="title-container">
                    <h3 id='subtitle'>Merchandise | Hoko</h3>
                    </div>
                    <div className='prod-container'>
                 {loading ? null : <Products products={products}/>}
                 </div>
                 </div>
                 </>
          }

               
      </div>
    
  )
}



export default Store