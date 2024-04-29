import '../styles/productInfo.css';

export const CartItem = (props) => {
    return (
        <>
        <form onSubmit={(e) => e.preventDefault()} className='product_form'>

            <label>Name: {props.product.name}</label>

            <label>Price: {props.price}</label>

            <button className='btn_submit' onClick={() => props.remove(props.product.id)}>Remove from cart</button>
        </form>
        </>
    );
};