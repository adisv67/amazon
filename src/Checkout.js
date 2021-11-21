import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
           <div className="checkout__left">
               <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt="" />           
            
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
