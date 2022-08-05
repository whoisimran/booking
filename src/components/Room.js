import React, { useState } from 'react'
import Select from 'react-select'

import {
    ref,
    uploadBytes,
    getDownloadURL
  } from "firebase/storage";
  import { storage } from "../config";
  import { v4 } from "uuid";

const Room = () => {
    const [imageUpload, uploadimg] = useState(null);
    const [roominfo, Setroominfo] = useState([])

    const myData = [
        { label: 'Free Wifi', value: 1 },
        { label: 'Coffee', value: 2 },
        { label: 'T.V', value: 3 },
        { label: 'Free Parking', value: 4 },
        { label: 'GYM', value: 5 },
        { label: 'Bathroom with shower', value: 6 },
        { label: 'Mini Fridge', value: 7 },
        { label: 'Tea / Coffee Maker', value: 8 },
        { label: 'Air conditioned Rooms', value: 9 }
    ];

    const facility = (res) => {
        Setroominfo(res)
    }

    const savehandler = async (res) => {
        let roominfo_arr = JSON.stringify(roominfo);
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let type = document.getElementById('type').value;
        let price = document.getElementById('price').value;

        const imageRef = ref(storage, `Booking/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {

                let response = await fetch(`http://localhost:8080/api/room`, {
                    method: "POST",
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title: title, description: description, type: type, price: price, facility: roominfo_arr,image:url })
                });
                let res = await response.json();
                console.log(res)
                if(res.success){
                    alert('Room Add Successfully!')
                }else{
                    alert('Something went Wrong!')
                }

            });
        });

    }
    return (
        <div className='card'>
            <h3>Create a New Room</h3>
            <div className='form-group'>
                <label>Enter Title</label>
                <input className='form-control' type="text" id="title" placeholder="Enter Title" />
            </div>

            <div className='form-group'>
                <label>Enter description</label>
                <textarea className='form-control' id="description" placeholder="Enter Description..." ></textarea>
            </div>

            <div className='form-group'>
                <label>Room Type</label>
                <select className='form-control' id='type'>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>

                </select>
            </div>

            <div className='form-group'>
                <label>Price Per Night</label>
                <input className='form-control' type="text" id="price" placeholder="Enter Price" />
            </div>
            <label>Room Facility</label>
            <Select
                options={myData}
                value={roominfo}
                isMulti={true}
                placeholder="Select Facility"
                onChange={facility}
            />

            <div className='form-group'>
                <label>Upload Room Image</label>
                <input className='form-control' type="file" onChange={(event) => uploadimg(event.target.files[0])} />
            </div>


            <div className='form-group'>
                <button onClick={savehandler} className='btn btn-block btn-success'>Add Room</button>
            </div>

        </div>
    )
}

export default Room