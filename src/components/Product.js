import '../styles/productInfo.css';

export const Product = (props) => {
    return (
        <>
        <form onSubmit={(e) => e.preventDefault()} className='product_form'>

            <label>Name: {props.name}</label>
            <input onChange={(e) => props.setName(e.target.value)} />

            <label>ID: {props.id}</label>
            
            <label>Brand: {props.manufacturer}</label>
            <input onChange={(e) => props.setManufacturer(e.target.value)} />

            <label>Price: {props.price}</label>
            <input type="number" onChange={(e) => props.setPrice(e.target.value)} />

            <button className='btn_submit' onClick={() => props.handleFormSubmit('update')}>Update</button>
            <button className='btn_submit' onClick={() => props.handleFormSubmit('delete')}>Delete</button>
        </form>
        </>
    );
};