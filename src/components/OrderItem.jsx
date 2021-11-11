import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = ({item}) => {
	
	const {title,price} = item
	return (
		<div className="OrderItem">
			<figure>
				<img src={item.images[0]} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src="./icons/icon_close.png" alt="close" />
		</div>
	);
}

export default OrderItem;
