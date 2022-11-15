import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket, user}, dispatch]= useStateValue();
  return (
    <div className='payment'>
        <div className='payment_container'>
            {/* payment section */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Old Town road </p>
                        <p>San Antonio, TX</p>
                    </div>
                </div>
            </div>
            {/* reving section */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_item">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            {/* paymeny method  */}
            <div className="payment_section">
                <h3>Payment Method</h3>
                </div>
                <div className="paymeny_details">
                    {/* stripe */}
                </div>

        </div>

    </div>
  )
}

export default Payment