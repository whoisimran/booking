import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const Booking = () => {
    const user_id = localStorage.getItem('id');
    const [data, setdata] = useState({});
    const [room, setRoom] = useState([]);

    useEffect(() => {
        getuser();
    }, [])

    const getuser = async () => {
        let response = await fetch(`http://localhost:8080/api/booking/${user_id}`);
        let res = await response.json();
        setdata(res.message);
        //   console.log(res)
        setRoom(JSON.parse(res.message.room_details))
    }
    console.log('data',data);

    return (
        <div className='container-fluid'>
            { data != false ? (
                <div className='wrap_table'>
            <h1 align="center">Your Current Booking</h1>
            <table className='table table-bordered mt-5'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Payment-Status</th>
                        <th>Status</th>
                        <th>Recipt Url</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>

                    
                    <tr>
                        <td>{room.title}</td>
                        <td>{room.price}</td>
                        <td>{data.payment}</td>
                        <td>{data.status}</td>
                        <td><a href={data.receipt_url} target="_blank">Click Here</a></td>
                        <td><img src={room.image} width="150" /></td>



                    </tr>

                    


                </tbody>
            </table>
            </div>
           ) : (
            <div className='wrap_empty text-center'>
            <h3>Currently, There are no Booking</h3>
            <Link to='/profile'>Book Now</Link>
            </div>
            )
           }
        </div>
    )
}

export default Booking