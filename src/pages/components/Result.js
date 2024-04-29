export const Result = (props) => {
    return (
        <div className="product_box">

            <div className="product_row">
                <h2 className="product_name">{props.name}</h2>
                <h3 className="product_name">{props.manufacturer}</h3>
            </div>

            <div className="sub_product_actions">
                <button className="btn_sub_product" onClick={() => props.handleViewDetails(props.product._id)}>View Product Details</button>
            </div>
        
        </div>
    );
};