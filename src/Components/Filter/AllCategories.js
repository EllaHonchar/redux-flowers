import Filter from "./Filter";

const AllCategories = () => {
    return (<div>
        <h1>Які квіти вам подобаються?</h1>
        {['ТРОЯНДИ', 'ПІВОНІЇ', 'ТЮЛЬПАНИ', 'ГЕРБЕРИ', 'ПОЛЬОВІ та САДОВІ', 'БУКЕТИ', 'КВІТИ'].map ((category, item) => 
        <Filter key={item} category={category}/>)}
        </div>)
}
export default AllCategories;