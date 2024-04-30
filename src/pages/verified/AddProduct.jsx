import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../../styles/addProduct.css';

const AddProduct = ({ backTo }) => {
    // sku and upc are both randomized numbers
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState({});
    const [shipping, setShipping] = useState(0);
    const [description, setDescription] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");

    const [catList, setCatList] = useState([]);

    const [isLoading, setIsLoading] = useState("");
    const [error, setError] = useState("");

    const handleDropdownChange = (e) => {
        const selectedId = e.target.value;
        const selectedCategory = catList.find(cat => cat.id === selectedId);
        setCategory(selectedCategory); // Set the full category object to state
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

    const addProduct = async () => {
        setIsLoading(true);
        setError("");

        try {
            const response = await Axios.post(`${process.env.REACT_APP_LOCALHOST}/addProduct`, {
                name: name,
                type: type,
                price: price,
                category: category,
                shipping: shipping,
                description: description,
                manufacturer: manufacturer,
                model: model,
                url: url,
                image: image
            });

            if (response) {
                setError("Successfully added product!");
            } else {
                setError("Product not added!");
            }
            
        } catch (error) {
            setError(`Product not added.`);
            console.error(`Product added unsuccessfully`);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
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
                        <h1>Add a product</h1>
                    </div>
                </div>

                <div className='add_product_container'>
                    <div className='add_product'>
                        <h1 className='add_product_title'>
                            Sign in to your account
                        </h1>

                        {isLoading ? (
                            <div className='loading'>Loading...</div>
                        ) : (
                            <>
                            <form className='add_product_form' onSubmit={addProduct}>
                            <div>
                                <label>Name</label>
                                <input 
                                    value={name} 
                                    onChange={(e) =>  setName(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>Type</label>
                                <input 
                                    value={type}
                                    onChange={(e) =>  setType(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>Price</label>
                                <input 
                                    value={price} 
                                    onChange={(e) =>  setPrice(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>Category</label>

                                <div className="relative flex-2">
                                    <select
                                        id="dropdown"
                                        value={category.id || ''} // Reflects the id of the selected category in the dropdown
                                        className="search_type"
                                        onChange={handleDropdownChange}
                                        required
                                    >
                                        <option value="">Choose Category</option>
                                        {catList.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
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
                            </div>
                    
                            <div>
                                <label>Shipping</label>
                                <input 
                                    value={shipping}
                                    onChange={(e) =>  setShipping(e.target.value)}/>
                            </div>

                            <div>
                                <label>Description</label>
                                <input 
                                    value={description} 
                                    onChange={(e) =>  setDescription(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>Manufacturer</label>
                                <input 
                                    value={manufacturer}
                                    onChange={(e) =>  setManufacturer(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>Model</label>
                                <input 
                                    value={model} 
                                    onChange={(e) =>  setModel(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>URL</label>
                                <input 
                                    value={url} 
                                    onChange={(e) =>  setUrl(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>Image URL</label>
                                <input 
                                    value={image} 
                                    onChange={(e) =>  setImage(e.target.value)}
                                    required/>
                            </div>

                            <button className='btn_login'>Add Product</button>
                        </form>
                            </>
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
            </div>
        </div>
    </>
    );    
};

export default AddProduct;

/*
const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sku: { type: Number, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    price: { type: Number, required: false },
    upc: { type: String, required: false },
    category: [{
        id: { type: String, required: true },
        name: { type: String, required: true }
    }],
    shipping: { type: Number, required: false },
    description: { type: String, required: false },
    manufacturer: { type: String, required: false },
    model: { type: String, required: false },
    url: { type: String, required: false },
    image: { type: String, required: false } 
}, { strict: false });

*/