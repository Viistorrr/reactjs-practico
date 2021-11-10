import React, {useState} from 'react';
import '../styles/ProductItem.scss';

import addToCart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {

	const [cart, setCart] = useState([])

	const {title, price, description} = product

	const handleClick = () =>{
		setCart([])
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
