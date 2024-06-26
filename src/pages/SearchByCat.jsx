import { Link, useNavigate } from 'react-router-dom';
import '../styles/searchProduct.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Result } from '../components/Result';
import { UserAuth } from '../components/context/AuthContext';

const SearchByCat = ({ backTo }) => {
    const [prodQuery, setProdQuery] = useState({});     // State for product query to send to server
    const [productList, setProductList] = useState([])  // State for list of product responses
    const [searchType, setSearchType] = useState("category");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [catList, setCatList] = useState([]);

    const { userType } = UserAuth();
    
    const handleDropdownChange = (event) => {
        setProdQuery(event.target.value);  
    };

    const searchProduct = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError("");

        if (prodQuery) {
            console.log(`Searching:` , prodQuery);
            
            try {
                const response = await Axios.get(
                    `${process.env.REACT_APP_LOCALHOST}/getProds`, {
                        params: { input: encodeURIComponent(prodQuery), type: searchType }
                    }
                );
                    
                if (response) {
                    setProductList(response.data.products);
                    setError('');
                } else {
                    setProductList([]);
                }

            } catch (error) {
                console.error(`Axios Error: ${error}`);
                setError("Local Server Error");
            }

        } else {
            setError("Choose a type then type in a product to start searching!");
        }

        setIsLoading(false);
    };

    const getCategories = async () => {
        setIsLoading(true);
        setError("");

        try {
            const response = await Axios.get(`${process.env.REACT_APP_LOCALHOST}/getCategories`);

            if (response) {
                setCatList(response.data);
            } else {
                setError(`Failed to get list of categories`);
                setCatList([]);
            };

        } catch (error) {
            setError(`Failed to get list of categories`);
            console.error(`Failed to get list of categories`);
        }

        setIsLoading(false);
    };

    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        if (userType === 'verified') {
            navigate(`/productInfo`, { state: { id }});
        } else {
            navigate(`/catalogue`, { state: { id }});
        }
    };
    
    useEffect(() => {
        getCategories();
    }, []);

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
                        <h1>Search Products</h1>
                    </div>
                </div>
                
                <div className='search_product_container'>
                    <div className='search_product'>
                        <div className='search_product_bar'>
                            <form className="search_product_form">
                                <div className='search_container'>

                                    <div className="relative flex">
                                        <select
                                            id="dropdown"
                                            value={prodQuery || ''} 
                                            className="search_type_cat"
                                            onChange={handleDropdownChange}
                                            required
                                        >
                                            <option value="">Choose Category</option>
                                            {catList.map((cat) => (
                                                <option key={cat.id} value={cat.name}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>

                                        <div className="dropdown_icon">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 8 8 8-8"/>
                                            </svg>
                                        </div>

                                    </div>

                                    <div className="relative flex">
                                        <button onClick={searchProduct} className="btn_search_product">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </div>


                                </div>
                            </form>
                        </div>


                    </div>

                </div>

                <div className='product_list'>
                    <div className='product_list_container'>
                        {isLoading ? (
                            <div className='loading'>Loading...</div>
                        ) : productList === null && !prodQuery ? (
                            null
                        ) : productList.length === 0 && prodQuery ? ( 
                            <div className='loading'>Product not found, try again...</div>
                        ) : productList.length > 0 ? (
                            // Map over the medicine list if it has items
                            productList.map((product, index) => {
                                return (
                                    <Result
                                        key={index}
                                        name={product.name}
                                        brand={product.manufacturer}
                                        product={product}
                                        handleViewDetails={handleViewDetails}
                                    />
                                )
                            })
                        ) : (
                            // If empty array
                            <div className='loading text-center'>Choose category to start searching</div>
                        )}
                    </div>
                </div>

            {error && 
                <div className='search_warning'>
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>

                    <div>
                        <span className='font-medium'>{error}</span>
                    </div>
                </div>
            }
            </div>
        </section>
    </>
    )
};

export default SearchByCat;