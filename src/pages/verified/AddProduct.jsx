import { useState } from 'react';
import '../../styles/sign_in.css';

const AddProduct = () => {
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

    const [error, setError] = useState("");
    return (
        <>
        <div className='main_container'>
            <div className='sub_container'>
                <h1 className="flex items-center mb-6 text-4xl font-bold text-gray-900 dark:text-white">
                    Hyper's Shop
                </h1>

                <div className='sign_in_container'>
                    <div className='sign_in'>
                        <h1 className='sign_in_title'>
                            Sign in to your account
                        </h1>

                        <form className='sign_in_form'>
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
                                {/* TODO:  This should be a dropdown of categories*/}
                                <label>Category</label>
                                <input 
                                    value={category}
                                    onChange={(e) =>  setCategory(e.target.value)}
                                    required/>
                            </div>

                            <div>
                                <label>Shipping</label>
                                <input 
                                    value={shipping}
                                    onChange={(e) =>  setShipping(e.target.value)}
                                    required/>
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

                            <button className='btn_login'>Login</button>
                        </form>

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