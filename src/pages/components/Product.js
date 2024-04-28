export const Product = (props) => {
    return (
        <>
        <form>

            <label>Name: {props.name}</label>
            <input onChange={(e) => props.setName(e.target.value)} />

            <label>ID: {}</label>
            
            <label>Brand: {props.manufacturer}</label>
            <input onChange={(e) => props.setBrand(e.target.value)} />

            <label>Price: {props.price}</label>
            <input type="number" onChange={(e) => props.setPrice(e.target.value)} />
        </form>
        </>
    );
};