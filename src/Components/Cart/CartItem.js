import dataFlowers from "../../data/dataFlowers";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {

    const flowers = dataFlowers.find(item => item.id === cartItem.flowerId)
    const dispatch = useDispatch();
    return(<div>
        <p>{flowers.name}</p>
        <p>{cartItem.quantity}шт.</p>
        <p>Вартість: ₴ {flowers.price * cartItem.quantity}</p>
        <span onClick = {() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img1.freepng.ru/20180422/cte/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8b84b75.3905043415244259287549.jpg"/>
        </span>
    </div>


    )
}

export default CartItem;