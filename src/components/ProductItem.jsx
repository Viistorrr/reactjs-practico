import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {

	const {addToCart} = useContext(AppContext);

	const {title, price, description} = product

	const handleClick = (item) =>{
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={()=>handleClick(product)}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
