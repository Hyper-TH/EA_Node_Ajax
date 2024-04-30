import { Link } from 'react-router-dom';
import '../styles/about.css';

const About = ({ backTo }) => {
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
                    <h1>About</h1>
                </div>
            </div>

            <div className='about_details_container'>
                <div className='about_details'>

                    <div className="about_divider">
                        <hr className="divider_line" />
                        <span className="title_divider">
                            Student Details
                        </span>
                    </div>

                    <div className='about_sub_details'>
                        <div>
                            <span className='about_header inline'>Student Number: </span>
                            <span className='about_text inline'>C</span> 
                        </div>

                        <div>
                            <span className='about_header inline'>Student Name: </span>
                            <span className='about_text inline'>T</span>
                        </div>
                    </div>

                    <div className="about_divider">
                        <hr className="divider_line" />
                        <span className="title_divider">
                            About this project
                        </span>
                    </div>
                    
                    <div className='about_sub_details'>
                        <span className='about_header inline'></span>
                        <span className='about_text inline'></span>
                    </div>

                    <div className="about_divider">
                        <hr className="divider_line" />
                        <span className="title_divider">
                            How it works
                        </span>
                    </div>

                    <div className='about_sub_details'>
                        <div className='about_properties_list'>
                            <div>
                                <span className='about_text inline'>
                                    This web application is a <b>MERN</b> stack application
                                    aided with <b>Firebase's Authentication</b>.
                                </span>
                            </div>

                            <br />

                            <div>
                                <span className='about_text inline'>
                                    There are two types of users:
                                    <ul className='max-w-md space-y-1 text-gray-800 dark:text-gray-300 list-disc list-inside'>
                                        <li>Standard</li>
                                        <li>Verified</li>
                                    </ul>
                                </span>
                            </div>

                            <br />

                            <div>
                                <span className='about_text inline'>
                                    The <b>Standard</b> user has access to 3 pages:
                                    <ul className='max-w-md space-y-1 text-gray-800 dark:text-gray-300 list-disc list-inside'>
                                        <li>Search Products</li>
                                        <li>Check Catalogue</li>
                                        <li>Check Shopping Cart</li>
                                    </ul>
                                </span>
                            </div>

                            <br />

                            <div>
                                <span className='about_text inline'>
                                    Each page have their own dedicated endpoints to the server:
                                    
                                    <div className="endpoint">
                                        <table className="endpointTable">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="headers"> Endpoint name </th>
                                                    <th scope="col" className="headers"> Scope </th>
                                                    <th scope="col" className="headers"> Description </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <th scope="row"> /login </th>
                                                    <td className="px-6 py-4"> General </td>
                                                    <td className="px-6 py-4">
                                                        Verify user upon logging in. 
                                                        Also check if user is already 
                                                        in the users collection, if not
                                                        then create one.
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /getProds </th>
                                                    <td className="px-6 py-4"> General </td>
                                                    <td className="px-6 py-4"> Get results when searching for a product. </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row"> /getProd </th>
                                                    <td className=""> General </td>
                                                    <td className="px-6 py-4">
                                                        Upon landing on checking the catalogue,
                                                        fetch the first product OR the passed
                                                        product (from search results).
                                                    </td>

                                                </tr>

                                                <tr>
                                                    <th scope="row"> /getItem </th>
                                                    <td className="px-6 py-4"> General </td>
                                                    <td className="px-6 py-4">
                                                        Get the next or previous item 
                                                        in the catalogue 
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /getCart </th>
                                                    <td className="px-6 py-4"> Standard </td>
                                                    <td className="px-6 py-4">
                                                        Gets all the items in 
                                                        the user's cart
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /remove </th>
                                                    <td className="px-6 py-4"> Standard </td>
                                                    <td className="px-6 py-4">
                                                        Remove an item from
                                                        the use'rs cart
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /add </th>
                                                    <td className="px-6 py-4"> Standard </td>
                                                    <td className="px-6 py-4">
                                                        Add an item to the cart
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /addProduct </th>
                                                    <td className="px-6 py-4"> Admin </td>
                                                    <td className="px-6 py-4">
                                                        Add a product to the catalogue
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /getCategories </th>
                                                    <td className="px-6 py-4"> Admin </td>
                                                    <td className="px-6 py-4">
                                                        Get a list of categories 
                                                        (for adding a product form).
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /editProd </th>
                                                    <td className="px-6 py-4"> Admin </td>
                                                    <td className="px-6 py-4">
                                                        Edit a product.
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > /deleteProd </th>
                                                    <td className="px-6 py-4"> Admin </td>
                                                    <td className="px-6 py-4">
                                                        Delete a product from the catalogue
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>

        </section>
        </>
    )
};

export default About;