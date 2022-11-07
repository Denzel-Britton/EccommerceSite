import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
import { store } from 'react-notifications-component';
import { actionTypes } from './reducer';



function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();
  // console.log('basket', basket)
  const addToBasket = () => {
      // dispatch ADD_TO_BASKET action with item
      dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
              id,
              title,
              image,
              price,
              rating
          }
      })

  }

  return (
    <div className="product"  >
       
      <div className="product_info">
        <p>{title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating).fill().map((_, i)=>(
                <p>⭐</p>
            ))}
            
            
            
        </div>
        </div>
        <img
        src={image}
        />

        <button onClick={addToBasket}>Add to Basket</button>

     
    </div>
  );
}


export default Product

