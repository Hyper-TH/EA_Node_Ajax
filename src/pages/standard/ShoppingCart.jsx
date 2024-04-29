import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { UserAuth } from '../../components/context/AuthContext.js';
import { CartItem } from '../../components/CartItem.js';
import '../../styles/shoppingCart.css';
import Axios from 'axios';

const ShoppingCart = ({ backTo }) => {
    const { user } =  UserAuth();
    const [productList, setProductList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const getProducts = useCallback(async () => {
        setIsLoading(true);
        setError("");

        try {
            const response = await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/getCart`, {
                    params: { email: user.email }
                }
            );
            
            // Directly accessing data and count from response.data
            // Where response.data is a temporary json
            const { products, totalPrice } = response.data;
            
            if (products && totalPrice) {
                setProductList(products);
                setTotalPrice(totalPrice);
            } else {
                setProductList([]);
            }
        } catch (error) {
            console.error(`Axios Error: ${error}`);
            setError("Failed to load shopping cart.");
        } 
                    
        setIsLoading(false);
    }, [user.email]);


    const remove = async (product) => {
        try {
            await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/delete`,
                {
                    params: { user: user.email, id: product.id }
                }
            );

        } catch (error) {
            console.error(`Axios Error: ${error}`);
            setError("Local Server Error");
        }

        getProducts();
    };
    

    useEffect(() => {
        if (user && user.email) {
            getProducts();
        }
    }, [user, getProducts]); // Depend on `user` so that `getproducts` runs again if `user` changes


    const viewProduct = (product) => {
        // const path = product.pil.path;
        // const id = product.productID;

        // navigate(
        //     `/render/${encodeURIComponent(product.productName)}/${encodeURIComponent(type)}`, 
        //     { state: { id, product, path, type } } 
        // );
    };

    // Each product list will be its own row
    return (
        <>
        <section className='main_container'>
            <div className='sub_container'>
            <div className='sub_container_header'>
                    <Link to={backTo}>
                        <button className='btn_return'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </Link>

                    <div className='main_title'>
                        <h1>Shopping Cart</h1>
                    </div>
                </div>

                <div className="product_list">
                
                    {isLoading ? (
                        <div className='loading'>Loading...</div>
                    ) : productList.length > 0 ? (
                        <>

                            <div className='updated_documents_container'>
                                {(totalPrice !== 0) ? (
                                    <div className='updated_documents'>
                                        <p> Total Price: {totalPrice}</p>
                                    </div>
                                ) : (
                                    <div className='updated_documents'>
                                        <p>No total price, items are free!</p>
                                    </div>
                                )}
                            </div>

                            <div className='product_list_container'>
                                {productList.map((product) => (
                                    <CartItem 
                                        key={product.productID}
                                        product={product}
                                        remove={remove}
                                    />
                                ))}
                            </div>    
                            
                        </>
                    ) : (
                        <div className='loading'>No products found</div>
                    )}

                </div>

            </div>

            {error && 
                <div className='error'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>

                    <div>
                        <span className='font-medium'>{error}</span>
                    </div>
                </div>
            }
        </section>
        </>
    );
};

export default ShoppingCart;