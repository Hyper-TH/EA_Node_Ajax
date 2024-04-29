import '../styles/productInfo.css';

export const Product = (props) => {
    return (
        <>
        <form onSubmit={(e) => e.preventDefault()} className='product_form'>

            <label>Name: {props.name}</label>

            <label>ID: {props.id}</label>
            
            <label>Brand: {props.manufacturer}</label>

            <label>Price: {props.price}</label>

            <button className='btn_submit' onClick={() => props.handleFormSubmit()}>Add to Cart</button>
        </form>
        </>
    );
};