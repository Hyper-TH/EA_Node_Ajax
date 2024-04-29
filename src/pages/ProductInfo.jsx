import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { ItemNavigation } from './components/ItemNavigation.js';
import { Product } from './components/Product.js';
import '../styles/productInfo.css';

export const ProductInfo = () => {
    // PRODUCT
    const [currID, setCurrID] = useState(""); //_id
    const [currProduct, setCurrProduct] = useState({}); 
    const [currIndex, setCurrIndex] = useState(0);
    const [currTotal, setCurrTotal] = useState(0);

    // FOR CRUD
    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [price, setPrice] = useState("");

    // STATES
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const getItems = async () => {
        setIsLoading(true);
        setError("");    

        try {
            const response = await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/getProd`, {
                    params: { id: currID }
                }
            );

            console.log(response);
            console.log(response.data.product);
            console.log("Total", response.data.total);
            console.log("Index", response.data.index);

            setCurrProduct(response.data.product);
            setCurrID(response.data.product._id)

            setName(response.data.product.name);
            setManufacturer(response.data.product.manufacturer);
            setPrice(response.data.product.price);

            setCurrTotal(response.data.total);
            setCurrIndex(response.data.index)
            // console.log(typeof(response.data.index));

            setError('');
        } catch (err) {
            setError('Failed to fetch product');
            setCurrProduct(null);
            console.error(err);
        }
    };

    const handleFormSubmit = async (action) => {
        console.log("Pressed a button:", action);
        
        if (action === 'update') {
            await updateItem();
        } else if (action === 'delete') {
            await deleteItem();
        }
    };

    const updateItem = async () => {
        console.log("Updating items..")
        console.log(currID, name, manufacturer, price);

        const updatedItem = await Axios.put(
            `${process.env.REACT_APP_LOCALHOST}/editProd`, {
                id: currID,
                name: name, 
                manufacturer: manufacturer,
                price: price
            }
        );

        if (updatedItem) {
            setCurrID("");
            getItems();
        }
    };

    const deleteItem = async () => {
        console.log("Deleting item...");
        const response = await Axios.put(
            `${process.env.REACT_APP_LOCALHOST}/deleteProd`, {
                id: currID,
            }
        );

        if (response.data) {
            if (currIndex == 0) {
                nextItem();
            } else {
                prevItem();
            }
        } else {
            setError(`Product unsucessfully deleted`);
        }
    };
    
    const changeItem = async (index) => {
        setIsLoading(true);
        setError("");

        console.log(`change item:`, typeof(index));
        try {
            const response = await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/getItem`, {
                    params: { index: index }
                }
            );

            if (response) {
                setCurrProduct(response.data.product);
                setCurrID(response.data.product._id);

                setName(response.data.product.name);
                setManufacturer(response.data.product.manufacturer);
                setPrice(response.data.product.price);

                setCurrTotal(parseInt(response.data.total));
                setCurrIndex(parseInt(response.data.index));

                console.log(typeof(response.data.index));
                setError('');
            } else {
                setError(`Failed to get next product`);
            }

        } catch (err) {
            setError(`Failed to get next product`);
            console.error(err);
        };
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
        if (currIndex >= 0) {
            const newIndex = currIndex - 1;
            changeItem(newIndex);
        } else {
            console.log("No previous items to navigate to.");
        }
    };

    const crud_btns = (() => {
        return (
            <>
            <button>
                Insert
            </button>
            

            </>
        );
    })();


    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className='main_container'>
            <div className='sub_container'>
                <div className='crud_buttons'>
                    {crud_btns}
                </div>


                <div className='btn_primary'>
                    <Link to='https://github.com/Hyper-TH/EA_Node_Ajax'>
                        <button>About this page</button>
                    </Link>
                </div>

                <div className='product_container'>
                    <div className='product'>
                        <h1 className='product_title'>
                            Product Details
                        </h1>
                        <Product 
                            name={currProduct?.name} 
                            id={currProduct?._id}
                            manufacturer={currProduct?.manufacturer}
                            price={currProduct?.price}
                            setName={setName}
                            setManufacturer={setManufacturer}
                            setPrice={setPrice}
                            handleFormSubmit={handleFormSubmit}
                        />                        
                    </div>

                    <div className='product_image'>
                        <img src={currProduct?.image} alt="Product" />

                        <ItemNavigation 
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