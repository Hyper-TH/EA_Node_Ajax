import React from "react";
import '../styles/home.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../components/context/AuthContext.js';


const Home = () => {
    const { user, userType, logout } = UserAuth();
	const navigate = useNavigate();
    
	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
			
			console.log(`Logged Out`)
		} catch (e) {
			console.log(e.message);
		}
	};

    const content = (() => {
        // If user is verified
        if (user && user.email  && (userType === 'verified')) {
            return (
                <>
                <h2 className="sub_title">{`Signed In as ${user.email}`}</h2>

                <Link to="/searchProduct" className="btn_collection_top">
                    Search Products
                </Link>

                <Link to="/productInfo" className="btn_collection_mid">
                    Check Products
                </Link>

                <Link to="/addProduct" className="btn_collection_mid">
                    Add Products
                </Link>

                <Link to="/about" className="btn_collection_bottom">
                    About this web application
                </Link>
                </>
            );
        } 
        // If user is standard
        else {
            return (
                <>
                <h2 className="sub_title">{`Signed In as ${user.email}`}</h2>

                <Link to="/searchProduct" className="btn_collection_top">
                    Search Products
                </Link>

                <Link to="/catalogue" className="btn_collection_mid">
                    Check Catalogue
                </Link>

                <Link to="/cart" className="btn_collection_mid">
                    Check Shopping Cart
                </Link>                
                
                <Link to="/about" className="btn_collection_bottom">
                    About this web application
                </Link>
                </>
            );
        }
    })();
 
    return (
        <section className="main_container">
            <div className="sub_container">
            <h1 className="main_title">
                Welcome to the Hyper Shop!
            </h1>

            <div className="home_container">
                <div className="home">

                    <div className="btn_collection">
                        {content}  

                        
                    </div>   

                    <button className="btn_primary" onClick={handleLogout}>Logout</button>

                </div>
            </div>
            </div>
        </section>
    );
};

export default Home;