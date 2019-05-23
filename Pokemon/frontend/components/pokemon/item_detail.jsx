import React from 'react';

 const ItemDetail = (props) =>  {

     debugger

    const item = props.item || {};

    return (
       
        <>
        <li>{item.image_url}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.happiness}</li>
        </>
    )

}

export default ItemDetail;