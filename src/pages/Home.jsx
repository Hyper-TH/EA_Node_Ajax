import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { ItemNavigation } from './components/ItemNavigation.js';

export const Home = () => {
    // PRODUCT
    const [productList, setProductList] = useState([]); 
    const [currID, setCurrID] = useState(""); //_id
    const [currProduct, setCurrProduct] = useState({}); 
    const [currIndex, setCurrIndex] = useState(null);
    const [currTotal, setCurrTotal] = useState(null);

    // FOR CRUD
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
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
                `${process.env.REACT_APP_LOCALHOST}/getProds`, {
                    params: { id: currID }
                }
            );

            console.log(response);
            console.log(response.data.product);
            console.log("Total", response.data.total);
            console.log("Index", response.data.index);

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
    };

    // TODO: Perhaps pass the buttons and functions as props
    const updateItem = async () => {
        // TODO: Consider those that are unchanged
        const data = { 
            name: name, 
            brand: brand,
            price: price
        };

        const updatedItem = await Axios.put(
            `${process.env.REACT_APP_LOCALHOST}/editProd`, data
        )
    };


    const searchProduct = (() => {

    });

    const nextItem = (() => {

    });

    const prevItem = (() => {

    });

    const crud_btns = (() => {
        return (
            <>
            <button>
                Insert
            </button>
            
            <button>
                Update
            </button>
            
            <button>
                Delete
            </button>
            
            <button onClick={e => searchProduct(e.target.value)}>
                Search
            </button>
            </>
        );
    })();


    useEffect(() => {
        getItems();
    }, []);

    return (
        <section>
            <div className='crud_buttons'>
                {crud_btns}
            </div>


            <div className='about'>
                <Link to='https://github.com/Hyper-TH/EA_Node_Ajax'>
                    <button>About this page</button>
                </Link>
            </div>

            <div className='container'>
                <form>
                    <label>Name: {currProduct.name}</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />

                    <label>ID: {currProduct._id}</label>
                    
                    <label>Brand: {currProduct.manufacturer}</label>
                    <input value={brand} onChange={(e) => setBrand(e.target.value)} />

                    <label>Price: {currProduct.price}</label>
                    <input value={price} type="number" onChange={(e) => setPrice(e.target.value)} />

                    <img src={currProduct.image} alt="Product Image" />
                </form>
            </div>

            <ItemNavigation 
                total={currTotal}
                index={currIndex}
                prevItem={prevItem}
                nextItem={nextItem}
            />

        </section>
    )
};