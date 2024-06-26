import '../styles/productInfo.css';

export const Product = (props) => {
    return (
        <>
        <form onSubmit={(e) => e.preventDefault()} className='product_form'>

            <label>Name: {props.name}</label>

            <label>ID: {props.id}</label>
            
            <label>Brand: {props.manufacturer}</label>

            <label>Price: ${props.price}</label>

            <label>Shipping: ${props.shipping}</label>

            <label>
                <a 
                    href={props.url}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer">
                    See official product page here
                </a>
            </label>

            <button className='btn_submit' onClick={() => props.handleFormSubmit()}>Add to Cart</button>
        </form>
        </>
    );
};