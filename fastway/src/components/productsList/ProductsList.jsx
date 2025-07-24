import React from 'react';
import './ProductsList.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ProductsList = () => {
    return (
        <div className='container p-5 border border-grey'>
            <h3 className=''>Grocery</h3>
            <div className=" section d-flex justify-content-around align-items-center flex-column ">
                <div className=" p-2 m-5 gap-5 d-flex ">
                    <h4 className=''>Dairy</h4>
                    {/* 1st */}
                    <div className="card p-2" style={{ width: '18rem' }}>
                        <img
                            src="/Dairy/curd/curd1.png"
                            className="card-img-top"
                            alt=""
                        />
                        <div className="card-body"></div>
                            <h5 className="card-title">Dodla curd</h5>
                            <p className="card-text">
                                Cup Curd - Dodla Dairy.
                            </p>
                            <Link to={'/Cart'} className="btn btn-primary"><i className="bi bi-bag"></i></Link>
                        </div>

                        {/* 2nd  */}
                        <div className="card p-2" style={{ width: '18rem' }}>
                        <img
                            src="/Dairy/curd/curd2.png"
                            className="card-img-top"
                            alt=''
                        />
                        <div className="card-body"></div>
                            <h5 className="card-title">Amul curd</h5>
                            <p className="card-text">
                                 Amul Dahi Creamy & Tasty Fresh Curd 800 g.
                            </p>
                            <Link to={'/Cart'} className="btn btn-primary"><i className="bi bi-bag"></i></Link>
                        </div>
                   

                    {/* 3d */}
                        <div className="card p-2" style={{ width: '18rem' }}>
                        <img
                            src="/Dairy/curd/curd3.png"
                            className="card-img-top"
                            alt=""
                        />
                        <div className="card-body"></div>
                            <h5 className="card-title">Heritage curd</h5>
                            <p className="card-text">
                                Buy Heritage Curd Online | Thick and Creamy.
                            </p>
                            <Link to={'/Cart'} className="btn btn-primary"><i className="bi bi-bag"></i></Link>
                        </div>
                    </div>
                    {/* 4th */}
                    </div>
                    </div>

    )
}

export default ProductsList
