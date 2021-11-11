import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({item}) => {

	const {removeFromCart} = useContext(AppContext)

	const handleRemove = product =>{
		removeFromCart(product)
	}
	
	const {title,price} = item
	return (
		<div className="OrderItem">
			<figure>
				<img src={item.images[0]} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={close} alt="close" onClick={()=>handleRemove(item)} />
		</div>
	);
}

export default OrderItem;
