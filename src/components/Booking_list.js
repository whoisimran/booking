import React,{useState,useEffect} from 'react'

const Booking_list = () => {


    const [data,setdata] = useState([]);

    useEffect(()=>{
        getuser();
    },[])

    const selecthandler = async (e,room_id,booking_id)=>{
        console.log('value >> ', e.target.value)
        console.log('room Id >> ', room_id)
        let status = "";
        if(e.target.value == 'checkOut'){
            status = 'available';
        }else{
            status = 'Booked';

        }
        let response = await fetch(`http://localhost:8080/api/room/${room_id}`, {
            method: "PATCH",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: status })
        });
        let res = await response.json();

        if(res.success){
            let response2 = await fetch(`http://localhost:8080/api/booking/${booking_id}`, {
            method: "PATCH",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: e.target.value })
        });
        let res2 = await response2.json();
        if(res2.success){
            alert('Update Successfully!')
        }else{
            alert('something Went Wrong!');
        }
        }else{
            alert('something Went Wrong!!!');

        }
    }
  
    const getuser = async () => {
      let response = await fetch('http://localhost:8080/api/booking');
      let res = await response.json();
      setdata(res.message);
      console.log(res)
    }
  
      return (
          <div className='container-fluid'>
              <h1 align="center" className='mt-2'>Booking List...</h1>
              <table className='table table-bordered mt-5'>
                  <thead>
                      <tr>
                          <th>User Id</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Payment-Status</th>
                          <th>Status</th>
                          <th>Recipt Url</th>
                          <th>Image</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data && data.map((value, index) => {
                        let details = JSON.parse(value.room_details)
                        let all_select = "";
                        if(value.status == 'checkIn'){
                            all_select+=`<option value="${value.status}" selected>${value.status}</option>`;
                            all_select+=`<option value="checkOut">checkOut</option>`
                        }else{
                            all_select+=`<option value="${value.status}" selected>${value.status}</option>`;
                            all_select+=`<option value="checkIn">checkIn</option>`
                        }
                              return (
                                  <tr key={index}>
                                      <td>{value.user_id}</td>
                                      <td>{details.title}</td>
                                      <td>{details.price}</td>
                                      <td>{value.payment}</td>
                                      <td>
                                      <select onChange={(e)=>selecthandler(e,details._id,value._id)} dangerouslySetInnerHTML={{__html: all_select}}>
                                        </select>
                                        </td>
                                      <td><a href={value.receipt_url} target="_blank">Click Here</a></td>
                                      <td><img src={details.image}  width="150"/></td>

                                    </tr>
  
                              )
  
                      })}
                  </tbody>
              </table>
          </div>
      )
}

export default Booking_list