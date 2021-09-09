import React, { useRef } from 'react';
import '../css/navCart.css';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { useDispatch } from 'react-redux';
import { clearCart } from '../actions/addToCart';
import { setOrder } from '../actions/setOrder';
import { useHistory } from 'react-router-dom';
import trash from '../assets/graphics/trash.svg';
import { toggleAction } from '../actions/navAction';

export default function Cart({ selectedItemsQyn, totalCost }) {
	const cartItems = useSelector((state) => state.cart);
	const navToggle = useSelector((state) => state.nav.isOpen);
	const dispatch = useDispatch();
	const history = useHistory();
	const overlayNode = useRef();

	const toggle = (e) => {
		dispatch(toggleAction());
		overlayNode.current.offsetParent.classList.toggle('overlay');
	};

	const takeOrderClick = () => {
		if (cartItems.items.length < 1) {
      alert('Your cart is empty, our Drone is not for sale!');
		} else {
			dispatch(setOrder(cartItems));
			history.push('/status');
			toggle();
		}
	};

	return (
		<div ref={overlayNode} className="cart-wrap">
			<button className="navCart" onClick={toggle}>
				<div className="navCartIcon">
					<span className="cartCount">{selectedItemsQyn}</span>
				</div>
			</button>
			<div className={`popup-menu ${navToggle ? 'shown' : ' '}`}>
				<div className="cart-control">
					<div className="close-popup-menu" onClick={toggle}>
						+
					</div>
					<a className="emptyCart" onClick={() => dispatch(clearCart())}>
						<img src={trash} />
					</a>
				</div>
				<div className="cart-title">
					<h1>Din beställning</h1>
					{cartItems.items.map((item) => (
						<CartItem key={item.item.id} item={item.item} quantity={item.itemQuantity} />
					))}
				</div>
				<div className="totalCost">
					<div className="totalText">
						<h2>Total</h2>
						<p>inkl moms + drönarleverans</p>
					</div>
					<div className="t-cost-p">{totalCost}</div>
				</div>
				<button className="cart-btn" onClick={takeOrderClick}>
					Take my money!
				</button>
			</div>
		</div>
	);
}
