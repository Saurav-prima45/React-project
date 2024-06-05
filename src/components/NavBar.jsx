import React from 'react';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import logo from '../Images/logo.svg';

const CustomNavbar = () => {
    return (
        <div className="bg-light fixed-top shadow-sm py-2 px-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center" style={{ gap: '30px' }}>
                    <a href="#home">
                        <img src={logo} alt="Logo" style={{ height: '40px' }} />
                    </a>
                    <div className="d-flex flex-column justify-content-between" style={{ height: '18px', width: '20px', cursor: 'pointer' }}>
                        <span style={{ width: '100%', height: '4px', borderRadius: '10px', backgroundColor: 'black', transition: 'all 0.3s ease-in-out' }}></span>
                        <span style={{ width: '100%', height: '4px', borderRadius: '10px', backgroundColor: 'black', transition: 'all 0.3s ease-in-out' }}></span>
                        <span style={{ width: '100%', height: '4px', borderRadius: '10px', backgroundColor: 'black', transition: 'all 0.3s ease-in-out' }}></span>
                    </div>
                </div>
                <div className="d-none d-lg-flex align-items-center" style={{ gap: '100px' }}>
                    <a href="#calendar" className="text-dark text-decoration-none py-2 px-3">Calendar</a>
                    <a href="#statistic" className="text-dark text-decoration-none py-2 px-3 font-weight-bold">Statistic</a>
                    <a href="#employee" className="text-dark text-decoration-none py-2 px-3">Employee</a>
                </div>
                <div className="d-flex align-items-center" style={{ gap: '20px' }}>
                    <a href="#help" className="text-dark text-decoration-none">Help</a>
                    <div className="position-relative d-flex align-items-center">
                        <FaEnvelope />
                        <span className="badge badge-success position-absolute" style={{ top: '-5px', right: '-10px' }}>2</span>
                    </div>
                    <div className="position-relative d-flex align-items-center">
                        <FaBell />
                        <span className="badge badge-danger position-absolute" style={{ top: '-5px', right: '-10px' }}>2</span>
                    </div>
                    <div className="nav-dropdown position-relative">
                        <button className="btn btn-light dropdown-toggle d-flex align-items-center" style={{ fontSize: '16px' }}>
                            Evan Morales
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#profile" className="dropdown-item">Profile</a>
                            <a href="#settings" className="dropdown-item">Settings</a>
                            <div className="dropdown-divider"></div>
                            <a href="#logout" className="dropdown-item">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomNavbar;
