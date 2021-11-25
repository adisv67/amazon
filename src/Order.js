import React, { useState,useEffect } from 'react'
import { db } from './firebase';
import {created, onSnapShot} from 'firebase';
import './Order.css'
import {useStateValue} from './StateProvider'

function Order() {
    const[{basket,user}, dispatch] = useStateValue();
    const[order, setOrder] = useState([]);

    useEffect(() =>{
       if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('order')
            .orderBy(created, 'desc')
            onSnapShot(snapshot =>(
                setOrder(snapshot.docs.map(doc =>({
                    id:doc.id,
                    data: doc.data()
                })))
            ))
       }else{
           setOrder([])
       }
    }, [user])
    
    return (
        <div class="order">
            <h1>Your Orders</h1>    
                <div class="order__orders">
                    {order?.map(orders => (
                     <Order order={order}/>
                    ))}
                </div> 
        </div>
    )
}

export default Order;
