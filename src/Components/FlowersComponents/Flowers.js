import Flower from "./Flower";
import dataFlowers from "../../data/dataFlowers";
import { getSelectedCategory } from "../../redux/flowersSlice";
import { useSelector } from "react-redux";

const Flowers = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return (<div>
        {dataFlowers
        .filter(flower => {
            if (selectedCategory=== 'КВІТИ') return true;
            return selectedCategory === flower.category;
        })
        .map((flower, index) => <Flower key={index} flower={flower}/>)}
    </div>)
}
export default Flowers;