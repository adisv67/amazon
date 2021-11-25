import React from 'react'
import Checkout from './Checkout'
import CheckoutProduct from './CheckoutProduct'
import Order from './Order'
import  "./Orders"

function Orders() {
    return (
        <div className="orders">
           <p>{moment.unix(Order.data.created).format("MMMM Do YYYY,h:mma")}</p> 
           <p className="order__id">
               <small>{Order.id}</small>
           </p>
           {Order.data.basket?.map(item =>(
               <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating} />
           ))}
        </div>
    )
}

export default Orders
