import React from 'react';
import {baseUrl} from "../shared/baseurl";
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <div className="container-fluid">
                    <div className="row home__box justify-content-lg-around justify-content-center shadow">
                        <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                            <div className="flex py-5 my-2">        
                                <h1>Welcome To The COMIDA RÁPIDA</h1>
                                <p>If you like Streetfood, you will love Comida Rápida</p>
                                <Link to="/aboutus" className="btn btn-lg __link">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-10 col-sm-9 col-md-4 col-lg-5">
                            <div className="home__img py-4 px-1 row align-items-center justify-content-center">
                                <img src={baseUrl + '/images/donuts.jpg'} alt='DONUTS' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}