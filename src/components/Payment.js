import React,{useState,useEffect} from 'react'
import {useLocation,useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';


const Payment = () => {
    const navigate = useNavigate();
    const user_id = localStorage.getItem('id');
    const location = useLocation();
    let id = location.state.id;
    const [data,setdata] = useState({});
    const [facility,setfacility] = useState([]);

    useEffect(() => {
        getroom();
    }, [])

    const getroom = async () => {
        let response = await fetch(`http://localhost:8080/api/room/${id}`);
        let res = await response.json();
        setdata(res.message);
        let obj = JSON.parse(res.message.facility);
        setfacility(obj)
        // console.log(res)
    }

    const onToken = async (token,addresses)=>{

        let json_data = JSON.stringify(data)

        let response = await fetch(`http://localhost:8080/checkout`,{
                method: "POST",
                headers:{
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
                },
                body : JSON.stringify({token:token,product:data})
              });

              let res = await response.json();
            //   console.log(res)

            let response2 = await fetch(`http://localhost:8080/api/booking`,{
                method: "POST",
                headers:{
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
                },
                body : JSON.stringify({room_id:data._id,user_id:user_id,room_details:json_data,payment:res.message.status,receipt_url:res.message.receipt_url})
              });

              let res2 = await response2.json();
              console.log('booking',res2)
              if(res2.success){

                let response3 = await fetch(`http://localhost:8080/api/room/${data._id}`,{
                method: "PATCH",
                headers:{
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
                },
                body : JSON.stringify({status:"Booked"})
              });
              let res3 = await response3.json();
              if(res2.success){
                navigate('/booking')
              }else{
                alert('something went wrong!')
              }  
              }else{
                alert('Something went wrong!')
            }
    }

  return (
    <div className='container'>
            <div className="card2 mb-3 mt-5" style={{ maxWidth: "740px" }}>
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <img src={data.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                            
                            <p className="card-text" style={{fontWeight:"bold"}}> &nbsp; &nbsp; &nbsp; &nbsp; Price: {data.price} Per Night</p>
                            <StripeCheckout
                                token={onToken}
                                className="center"
                                stripeKey="pk_test_51JtRscSJHOjmNjIW2goelMNiHDQG1jpS4dIWamP0t7dM4zrWal0cDvtUS3U5MnlyKmgJPOcckI2pT2uWAQBXXfIJ00hVhziG7I"
                                amount={data.price}
                                name={data.title}
                                billingAddress
                            />
                            <p className="card-text" style={{fontWeight:"bold"}}>Room Facilities</p>
                            <ul className='wrap_list'>
                                {facility.map((fact) => {
                                    return <li className='facility'>{fact.label}</li>
                                })}
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div> 
  </div>
  )
}

export default Payment