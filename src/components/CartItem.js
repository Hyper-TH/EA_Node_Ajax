import '../styles/shoppingCartItem.css';

export const CartItem = (props) => {
    return (
        <>
        <div className="sub_product">
            <form onSubmit={(e) => e.preventDefault()} className='product_form'>

                <h2 className="product_name">{props.product.name}</h2>
                <h2 className="product_name">Price: ${props.product.price}</h2>
                <h2 className="product_name">Shipping: ${props.product.shipping}</h2>
                <h2 className="product_name">Quantity: {props.product.quantity}</h2>

                <button className='btn_submit' onClick={() => props.remove(props.product.id)}>Remove from cart</button>
            </form>
        </div>
        </>
    );
};