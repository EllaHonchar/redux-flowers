import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Flower = ({flower}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div>
        <img src={`${flower.img}.jpeg`} alt="flower"/>
        <h2>{flower.name}</h2>
        <p>₴ {flower.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={()=> {dispatch(addItemToCart({flower, quantity}));
    }}>Додати в кошик </button>
        </div>)
}
export default Flower;