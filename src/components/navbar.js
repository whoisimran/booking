import React from 'react'
import { Link } from 'react-router-dom'

// import Filter from './Filter';
const Navbar = (props) => {
console.log('props navbar', props.role)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Room Booking App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                        {props.role == 'admin' ? (
                            <ul className="navbar-nav">
                             <li className="nav-item">
                             <Link className="nav-link" to="/home">Home</Link>
                         </li>
 
                         <li className="nav-item">
                             <Link className="nav-link" to="/room">Add Room</Link>
                         </li>
 
                         <li className="nav-item">
                             <Link className="nav-link" to="/userlist">Users</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/booking_list">Booking List</Link>
                         </li>
                         </ul>
                        
                        ) : (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/booking">Your Booking Room</Link>
                                </li>
                            </ul>
                     )}
                        
                       
                    
                    
                          
                        
                   

                </div>
            </nav>
        </>
    )
}

export default Navbar