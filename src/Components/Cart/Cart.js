import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (<div>
        <img className="cartIcon" src="https://cdn.icon-icons.com/icons2/1796/PNG/512/shoppingbasket2_114884.png" alt="cart"/>
        <h3>Всього: ₴ {totalPrice}</h3>
        {cartItems.map(cartItem =>
        <CartItem cartItem={cartItem}/>)}
        </div>)
}
export default Cart;