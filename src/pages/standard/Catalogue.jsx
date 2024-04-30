import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../components/context/AuthContext.js';
import Axios from 'axios';
import { ItemNavigation } from '../../components/ItemNavigation.js';
import { Product } from '../../components/Product.js';
import '../../styles/productInfo.css';

const Catalogue = ({ backTo }) => {
    const { user } = UserAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // PRODUCT
    const [currID, setCurrID] = useState(location.state?.id ?? ""); //_id
    const [currProduct, setCurrProduct] = useState({}); 
    const [currIndex, setCurrIndex] = useState(0);
    const [currTotal, setCurrTotal] = useState(0);

    // STATES
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const getItems = async () => {
        setIsLoading(true);
        setError("");    

        console.log(`Current ID:`, currID);

        try {
            const response = await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/getProd`, {
                    params: { id: currID }
                }
            );

            setCurrProduct(response.data.product);
            setCurrID(response.data.product._id)

            setCurrTotal(response.data.total);
            setCurrIndex(response.data.index)

            setError('');
        } catch (err) {
            setError('Failed to fetch product');
            setCurrProduct(null);
            console.error(err);
        }

        setIsLoading(false);
    };

    const handleFormSubmit = async () => {
        console.log(`User Email:`, user.email);
        try {
            const response = await Axios.put(
                `${process.env.REACT_APP_LOCALHOST}/add`, {
                    email: user.email,
                    productID: currID,
                    productName: currProduct.name,
                    productPrice: currProduct.price,
                    productShipping: currProduct.shipping
                }
            );

            console.log(response);

        } catch (err) {
            setError('Failed to add product');
            console.error(err);
        }
    };
    
    const changeItem = async (index) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/getItem`, {
                    params: { index: index }
                }
            );

            if (response) {
                setCurrProduct(response.data.product);
                setCurrID(response.data.product._id);

                setCurrTotal(parseInt(response.data.total));
                setCurrIndex(parseInt(response.data.index));

                setError('');
            } else {
                setError(`Failed to get next product`);
            }

        } catch (err) {
            setError(`Failed to get next product`);
            console.error(err);
        };

        setIsLoading(false);
    };

    const nextItem = async () => {
        if ((currIndex + 1) < currTotal) {  // Assuming currIndex is zero-based and currTotal is the count of items.
            const newIndex = currIndex + 1;
            changeItem(newIndex);
        } else {
            console.log("No more items to navigate to.");
        }
    };
    
    const prevItem = async () => {
        if ((currIndex - 1) >= 0) {
            const newIndex = currIndex - 1;
            changeItem(newIndex);
        } else {
            console.log("No previous items to navigate to.");
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className='main_container'>
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
                        <h1>Search Products</h1>
                    </div>
                </div>

                <div className='product_container'>
                    <div className='product'>
                        <h1 className='product_title'>
                            Product Details
                        </h1>
                        {isLoading ? (
                            <div className='loading'>Loading...</div>
                        ) : (
                            <>
                            <Product 
                                name={currProduct?.name} 
                                id={currProduct?._id}
                                manufacturer={currProduct?.manufacturer}
                                price={currProduct?.price}
                                shipping={currProduct?.shipping}
                                url={currProduct?.url}
                                handleFormSubmit={handleFormSubmit}
                            />  

                        </>
                        )}
                    </div>

                    <div className='product_image flex flex-col items-center justify-center'>
                        <ItemNavigation 
                            image={currProduct?.image}
                            total={currTotal}
                            index={currIndex}
                            prevItem={prevItem}
                            nextItem={nextItem}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Catalogue;