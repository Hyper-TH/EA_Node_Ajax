import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

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