  
import React from 'react';
import { Link } from 'react-router-dom';

export const Head = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-11 col-md-9 col-lg-12 col-xl-12">
                            <div className="banner__text shadow">
                                <h3>Sedersi o portare via</h3>
                                <h1>COMIDA RÁPIDA</h1>
                                <p>If you have too, today’s your lucky day. Because I made this for you so that you never have to feel that frustration or waste that time again</p>
                            </div>
                            <Link to="/menu" className="btn btn-lg __link">Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}