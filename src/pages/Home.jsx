import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

export const Home = () => {
    const [productList, setProductList] = useState([]); 
    const [currProduct, setCurrProduct] = useState(""); // _id
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const getItems = async () => {
        setIsLoading(true);
        setError("");    

        try {
            const response = await Axios.get(
                `${process.env.REACT_APP_LOCALHOST}/getProds`,
            );

            console.log(response);

            if (response) {
                setProductList(response.data);
            } else {
                setProductList({});
            }

        } catch (error) {
            console.error(`Axios Error: ${error}`);
            setError(error);
        };
    };

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
            
            <button>
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
                    <label>Name: </label>
                    <input></input>

                    <label>ID: </label>
                    <input></input>
                    
                    <label>Brand: </label>
                    <input></input>

                    <label>Price: </label>
                    <input></input>

                    {/* IMAGE HERE */}
                </form>
            </div>

            <div className='nav_buttons'>
                {/* TODO: Copy nav buttons on PDF Render of beCared */}
            </div>
        </section>
    )
};